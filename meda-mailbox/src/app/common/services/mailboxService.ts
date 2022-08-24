// ========================================
import httpSvc from "./httpService";
import { Observable } from "rxjs";
import { map, first } from "rxjs/operators";
// =========================================

class MailboxService {
  /**
   * Gets a random message based on the `categoryId`.
   * If `random` param is received, that random is kept.
   * 
   * @param categoryID 
   * @param random 
   * @returns 
   */
  getMessage(categoryID: string, random?: number): Observable<any> {
    if (!random) random = Math.ceil(Math.random() * 10);

    // TODO: handle any error thrown by httpSvc
    return httpSvc.get(`${categoryID}/${random}/`)
      .pipe(
        first(),
        map((res: any) => {
          // TODO: built a utility for building the messages based on the category
          // TODO: the utility could continue calling http if the category has API info pending to be gotten.
          const message = `Look for ${ res.name }. ${ res.gender === 'male' ? ' He is' : ' She is'} ${ res.height } cms. tall.`
          return {
            message,
            from: 'Classified',
            subject: categoryID,
          };
        }),
      );
    }

  /**
   * TODO: as of now we get everything at once. What if based on the first category we get the next msgs in time?
   * @returns 
   */
  getMessages(): Observable<any> {
    return httpSvc.get()
      .pipe(
        first(),
        map((res: any) => {
          const messages = [];

          for (let key in res) {
            messages.push({
              subject: key,
              preview: 'preview placeholder',
              read: false
            })
          }

          return messages;
        }),
      );
  }

  // TODO: handle the existing object for marking a message as read
  // TODO: this might not even be needed here after all
  // TODO: this might be replaced by a store handling instead
  // TODO: although we could emulate the BE call for this....
  readMessage(): Observable<any> {
    return httpSvc.post()
      .pipe(
        first(),
        map((res: any) => res), // placeholder for data handling
      );
  }

  // TODO: handle the existing object for marking a message as read
  // TODO: this might not even be needed here after all
  // TODO: this might be replaced by a store handling instead
  // TODO: although we could emulate the BE call for this....
  deleteMessage(): Observable<number> {
    return httpSvc.delete()
      .pipe(
        first(),
        map((res: any) => res), // placeholder for data handling
      );
  }
}

const mailboxSvc = new MailboxService();
export default mailboxSvc;
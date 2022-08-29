// ========================================
import httpSvc from "./http.service";
import { Observable, of } from "rxjs";
import { map, first, catchError } from "rxjs/operators";
import { MailboxMessagesInterface } from "../interfaces";
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
  getMessage(messageID: string, categoryID: string, random?: number): Observable<any> {
    if (!random) random = Math.ceil(Math.random() * 10);

    // TODO: handle any error thrown by httpSvc
    // return httpSvc.get(`onpurposeerr`)
    return httpSvc.get(`${categoryID}/${random}/`)
      .pipe(
        first(),
        catchError(() => of(undefined)),
        map((res: any) => {
          if (!res) return undefined;

          const message = this.dummyMsgGenerator(categoryID, res);

          return {
            message,
            id: messageID,
            from: 'Rebel Base',
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
        map((res: any, index) => {
          const messages: MailboxMessagesInterface[] = [];

          for (let key in res) {
            messages.push({
              id: `m${index++}`,
              read: false,
              subject: key,
              preview: res[key],
            })
          }

          return messages;
        }),
      );
  }

  /**
   * 
   * @param messageID 
   * @returns 
   */
  markMessageAsRead(messageID: string): Observable<any> {
    return httpSvc.post(messageID)
      .pipe(
        first(),
        map((res: any) => res), // placeholder for data handling
      );
  }

  /**
   * 
   * @param messageID 
   * @returns 
   */
  deleteMessage(messageID: string): Observable<string> {
    if (!messageID) return of(`ID not provided, provide ID for deleting.`);

    return httpSvc.delete(messageID)
      .pipe(
        first(),
        map((res: any) => res), // placeholder for data handling
      );
  }

  private dummyMsgGenerator(category: string, res: any): string {
    let message: string = '';
    
    switch(category) {
      case 'people':
        if (res.gender === 'n/a') res.gender = `it's`;
        if (res.gender === 'male') res.gender = `he's`;
        if (res.gender === 'female') res.gender = `she's`;

        message = `Look for ${ res.name }. ${ res.gender } ${ res.height } cms.tall.`
      break;
      case 'planets':
        message = `Go to ${res.name}. Get ready for ${res.terrain}.`
        break;
        case 'films':
        message = `${res.opening_crawl}.`
        break;
      case 'species':
        message = `Look for ${res.name}. You'll have to learn to speak ${res.language}`
        break;
      case 'vehicles':
        message = `Drive the ${res.name}. You'll need ${res.cost_in_credits} to buy one.`
        break;
      case 'starships':
        message = `Destroy the ${res.name}.`
        break;
      default:
        message = `There was an err getting your message.`
    }

    return message;
  }
}

const mailboxSvc = new MailboxService();
export default mailboxSvc;
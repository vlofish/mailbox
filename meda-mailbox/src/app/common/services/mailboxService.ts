import httpSvc from "./httpService";

import { Observable } from "rxjs";
import { map, first } from "rxjs/operators";

class MailboxService {
  // TODO: handle id
  // TODO: maybe with the id we'll get a random sw person
  getMessage(id: string): Observable<any> {
    return httpSvc.get()
      .pipe(
        first(),
        map((res: any) => res), // placeholder for data handling
      );
    }

  // TODO: get everything from a sw category
  // TODO: handle BE error or map() error
  getMessages(): Observable<any> {
    return httpSvc.get()
      .pipe(
        first(),
        map((res: any) => {
          const messages = [];

          // TODO: should we sha the body? would be cool
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
  readMessage(): Observable<any> {
    return httpSvc.post()
      .pipe(
        first(),
        map((res: any) => res), // placeholder for data handling
      );
  }

  // TODO: handle the existing object for marking a message as read
  // TODO: this might not even be needed here after all
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
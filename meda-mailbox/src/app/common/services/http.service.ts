// ===========================================
import { ajax } from 'rxjs/ajax';
import { catchError, delay, map } from 'rxjs/operators';
import { throwError, Observable, of } from 'rxjs';
// ===========================================

class HttpService {
  private domain = 'https://swapi.dev/api/';

  /**
   * Do not prefix `/` to your string.
   * @param uri The uri to get from `swapi`
   */
  get(uri: string = ''): Observable<any> {
    let url = this.domain;
    if (uri) url = `${url}${uri}`;

    return ajax.getJSON(url).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Placeholder for agnostic HTTP post implementation.
   * Uses RxJS `delay` for emulating network when called.
   */
  post(messageID: string): Observable<any> {
    return this.get().pipe(
      delay(500),
      map(_ => this.genericMockedResponse(messageID)),
      catchError(this.genericMockedResponse)
    );
  }

  /**
   * This is just a placeholder.
   * DO NOT USE THIS
   * @returns 
   */
  put(): Observable<any> {
    return of({}).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Placeholder for agnostic HTTP delete implementation.
   * Uses RxJS `delay` for emulating network when called.
   */
  delete(messageID: string): Observable<any> {
    return of({
      deletedID: messageID,
      message: `Message ${messageID} sucessfully deleted from DB.`
    }).pipe(
      delay(500),
      catchError(this.handleError)
    );
  }

  /**
   * 1. client-side or network error occurred
   * 2. backend returned an unsuccessful response
   * 
   * @param error 
   * @returns 
   */
  private handleError(error: any): Observable<Error> {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }
    window.alert('The Empire might be tracking you; the connection was lost. Try to go slower...');
    return throwError(() => new Error('There was an err connecting with the rebel base.'));
  }

  private genericMockedResponse(messageID: string): any {
    return {
      messageID,
      response: `Message ${messageID} connected with rebel base.`,
    };
  }
}

const httpSvc = new HttpService();
export default httpSvc;
// ===========================================
import { ajax } from 'rxjs/ajax';
import { catchError, delay } from 'rxjs/operators';
import { throwError, Observable, of } from 'rxjs';
// ===========================================

// TODO: decorator for making this singleton
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
   * This is just a placeholder.
   * DO NOT USE THIS
   * @returns 
   */
  post(): Observable<any> {
    return of({}).pipe(
      catchError(this.handleError)
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
   * Uses RxJS `delay` for emulating network when called.
   */
  delete(messageID: string): Observable<any> {
    return of({
      deletedID: messageID,
      message: `Message ${messageID} sucessfully deleted from DB.`
    }).pipe(
      delay(2000),
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

    return throwError(() => new Error('There was an err connecting with the servers'));
  }
}

const httpSvc = new HttpService();
export default httpSvc;
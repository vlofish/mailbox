import { ajax } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

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
   * Placeholder; this is still missing the impl
   */
  post(uri: string = 'people/'): Observable<any> {
    return this.get(uri).pipe(
      catchError(this.handleError)
    );
  }

  // TODO: missing impl
  put(uri: string = 'people/'): Observable<any> {
    return this.get(uri).pipe(
      catchError(this.handleError)
    );
  }

  // TODO: missing impl
  delete(uri: string = 'people/'): Observable<any> {
    return this.get(uri).pipe(
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
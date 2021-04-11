// https://www.positronx.io/create-ionic-angular-http-service/

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap, timeout, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Constants } from '../../constants';

const toJSON = (data: any): string => {
  try {
    return JSON.stringify(data)
  } catch (e) {
    return data
  }
}

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  httpHeader = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private constant: Constants) { }

  private requestOptions(){   
    let httpHeader = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return httpHeader;
  }

  post(url, post): Observable<any> {
    let full_url = this.constant.APIBasePath + url;
    return this.http.post<any>(full_url, post, this.requestOptions())      
      .pipe(
        timeout(this.constant.APIRequestTimeout),        
        catchError(this.handleError<any>()),
        map(response => {
          return response;
        })
      );
  }

  get(url): Observable<any> {
    let full_url = this.constant.APIBasePath + url;
    return this.http.get<any>(full_url, this.requestOptions())
      .pipe(
        timeout(this.constant.APIRequestTimeout),
        catchError(this.handleError<any>()),
        map(response => {
          return response;
        })
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}

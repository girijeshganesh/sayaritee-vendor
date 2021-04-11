import { Injectable } from '@angular/core';
import { HttpServiceService } from "../_services/http-service.service";
import { Observable } from 'rxjs';
import { catchError, tap, timeout, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApplicationHttpService {

  constructor(private httpService: HttpServiceService) { }

  // public getToken(post): Observable<any> {
  //   return this.httpService.post("token", post).map((response: Response) => {
  //     return response.json();
  //   });
  // }
}

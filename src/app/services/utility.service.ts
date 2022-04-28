import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  constructor( private httpClient: HttpClient ) { }

  public validateAccount(validateAccount: any): Observable<any> {

    return this.httpClient.post('this.apis.verifyAccount', validateAccount)
  }
}

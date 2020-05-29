import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhoneNumberService {

  private phoneUrl: string;

    constructor(private http: HttpClient) {
      this.phoneUrl = 'http://localhost:8080/modify/';
    }

    public modifyNumber(phone: string): Observable<String[]> {
      return this.http.get<String[]>(this.phoneUrl + phone);
    }
}

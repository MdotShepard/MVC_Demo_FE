import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MessageModel } from './message-model';

@Injectable({
  providedIn: 'root'
})
export class RESTcommunicationService {

  constructor(private httpClient: HttpClient) { }

  url: string;
  httpHeader: HttpHeaders;
  httpOptions: any;

  getHello(): Observable<any> {
    this.url = 'http://localhost:8080/demo/hello';
    return this.httpClient.get(this.url, {observe: 'response'});
  }

  sendCustomMessage(userInput: string): Observable<any> {
    this.url = 'http://localhost:8080/demo/saveMessage';
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      observe: 'response'
    };
    return this.httpClient.post(this.url, userInput, this.httpOptions)
  }

}

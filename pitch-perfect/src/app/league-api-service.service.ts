import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LeagueApiServiceService {

  constructor() { }
  

  get_message(param: String): Observable<string> {
    const message = `Hello, ${param}`;
    return of(message);
  }
  
}

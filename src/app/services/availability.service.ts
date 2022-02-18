import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AvailabilityService {
  constructor(private http: HttpClient) {}

  checkAvailability(): Observable<boolean> {
    return of(true);
    // return this.http.get('localhost:8080/resource/1337/available');
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface AvailabilityResponse {
  available: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class AvailabilityService {
  constructor(private http: HttpClient) {}

  checkAvailability(datetime: string): Observable<AvailabilityResponse> {
    return this.http.get<AvailabilityResponse>(
      `http://localhost:8080/resource/1337/available?datetime=${datetime}`
    );
  }
}

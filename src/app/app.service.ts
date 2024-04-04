import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {mission} from './models/mission.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

    private apiUrl = 'https://api.spacexdata.com/v3';

    constructor(private http: HttpClient) { }
  
    getLaunches(): Observable<mission[]> {
      return this.http.get<mission[]>(`${this.apiUrl}/launches`);
    }
  
    getLaunchByFlightNumber(flightNumber: string): Observable<mission> {
      return this.http.get<mission>(`${this.apiUrl}/launches/${flightNumber}`);
    }
}
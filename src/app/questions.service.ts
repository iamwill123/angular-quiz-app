import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Services are separate entities that isolate operations on data (fetching, saving, and so on). Thanks to Angular’s dependency injection (a way of giving each component what it asks for), these services are available to supply data to any component across the entire app.
@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  constructor(private http: HttpClient) {}

  public getJSON(fileId: string) {
    return this.http.get(`./assets/${fileId}.json`) as Observable<any>;
  }
}

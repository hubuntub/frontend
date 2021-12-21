import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) {}

  // GET
  public get(parameters?: any): Observable<any> {
    return this.http.get<any>(
      'http://localhost:4800/assets/data.json',
      {
        params: parameters
      }
    );
  }

  // POST
  public post(payload: any, prefix = ''): Observable<any> {
    const body = new FormData();
    body.append(prefix, payload);

    return this.http.post<any>(
      'http://localhost:4800/assets/data.json',
      body
    );
  }
}

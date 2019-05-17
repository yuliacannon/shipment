import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, filter } from 'rxjs/operators';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { BaseService } from '../base-service';
import { Pier } from '../interfaces.model'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PierService extends BaseService {
  private pier

  constructor(protected http: HttpClient) {
    super(http);
    this.apiUrl += '/pier';
  }

  getPiers(): Observable<Pier[]> {
    return this.http.get<Pier[]>(`${this.apiUrl}/list`)
      .pipe(
        tap(_ => this.log('fetched pierss')),
        catchError(this.handleError<Pier[]>('getPiers', []))
      );
  }

//   deletePort(id: string) {
//       return this.http.delete(`${this.apiUrl}/${id}/remove`)
//       .pipe(
//         tap(_ => this.log('deleted port')),
//         catchError(this.handleError<Port[]>('deletePort', []))
//       );
//   }

  addPier(pier): Observable<Pier> {
    return this.http.post(`${this.apiUrl}/add`, pier, httpOptions)
    .pipe(
      tap(_ => this.log('added pier')),
      catchError(this.handleError('addPier', pier))
    );
  }

//   getPort(id: string) {
//     return this.http.get(`${this.apiUrl}/${id}`)
//     .pipe(
//       tap(_ => this.log('get port')),
//       catchError(this.handleError('getPort'))
//     );
//   }

//   editPort(id: string, data) {
//     return this.http.put(`${this.apiUrl}/${id}/edit`, data)
//     .pipe(
//       tap(_ => this.log('edit port')),
//       catchError(this.handleError('editPort'))
//     );
//   }

//   getPortValue(): Observable<Port> {
//     return this.port.asObservable();
//  }

//  updatePortValue(port: Port) {
//   this.port.next(port);
// }
 
}
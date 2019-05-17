import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, filter } from 'rxjs/operators';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { BaseService } from '../base-service';
import { Port } from '../interfaces.model'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PortService extends BaseService {
  private port

  constructor(protected http: HttpClient) {
    super(http);
    this.apiUrl += '/port';
  }

  getPorts(): Observable<Port[]> {
    return this.http.get<Port[]>(`${this.apiUrl}/list`)
      .pipe(
        tap(_ => this.log('fetched ports')),
        catchError(this.handleError<Port[]>('getPorts', []))
      );
  }

  deletePort(id: string) {
      return this.http.delete(`${this.apiUrl}/${id}/remove`)
      .pipe(
        tap(_ => this.log('deleted port')),
        catchError(this.handleError<Port[]>('deletePort', []))
      );
  }

  addPort(port): Observable<Port> {
    return this.http.post(`${this.apiUrl}/add`, port, httpOptions)
    .pipe(
      tap(_ => this.log('added port')),
      catchError(this.handleError('addPort', port))
    );
  }

  getPort(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`)
    .pipe(
      tap(_ => this.log('get port')),
      catchError(this.handleError('getPort'))
    );
  }

  editPort(id: string, data) {
    return this.http.put(`${this.apiUrl}/${id}/edit`, data)
    .pipe(
      tap(_ => this.log('edit port')),
      catchError(this.handleError('editPort'))
    );
  }

//   getPortValue(): Observable<Port> {
//     return this.port.asObservable();
//  }

//  updatePortValue(port: Port) {
//   this.port.next(port);
// }
 
}
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';
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
        tap(_ => this.log('fetched piers')),
        catchError(this.handleError<Pier[]>('getPiers', []))
      );
  }

  deletePier(id: string) {
      return this.http.delete(`${this.apiUrl}/${id}/remove`)
      .pipe(
        tap(_ => this.log('deleted pier')),
        catchError(this.handleError<Pier[]>('deletePier', []))
      );
  }

  addPier(pier): Observable<Pier> {
    return this.http.post(`${this.apiUrl}/add`, pier, httpOptions)
    .pipe(
      tap(_ => this.log('added pier')),
      catchError(this.handleError('addPier', pier))
    );
  }

  getPier(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`)
    .pipe(
      tap(_ => this.log('get pier')),
      catchError(this.handleError('getPier'))
    );
  }

  editPier(id: string, data) {
    return this.http.put(`${this.apiUrl}/${id}/edit`, data)
    .pipe(
      tap(_ => this.log('edit pier')),
      catchError(this.handleError('editPier'))
    );
  }
}
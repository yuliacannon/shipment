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
        tap(_ => this.log('fetched pierss')),
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
}
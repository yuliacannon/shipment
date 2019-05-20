import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
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

  getPiers(portId = ''): Observable<Pier[]> {
    return this.http.get<Pier[]>(`${this.apiUrl}/list/${portId}`)
      .pipe(
        tap(_ => this.log('fetched piers')),
        catchError(this.handleErrorC)
      );
  }

  deletePier(id: string) {
      return this.http.delete(`${this.apiUrl}/${id}/remove`)
      .pipe(
        tap(_ => this.log('deleted pier')),
        catchError(this.handleErrorC)
      );
  }

  addPier(pier) {
    return this.http.post(`${this.apiUrl}/add`, pier, httpOptions)
    .pipe(
      tap(_ => this.log('added pier')),
      catchError(this.handleErrorC)
    );
  }

  getPier(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`)
    .pipe(
      tap(_ => this.log('get pier')),
      catchError(this.handleErrorC)
    );
  }

  editPier(id: string, data) {
    return this.http.put(`${this.apiUrl}/${id}/edit`, data)
    .pipe(
      tap(_ => this.log('edit pier')),
      catchError(this.handleErrorC)
    );
  }

  getPiersByName(value: string) {
    return this.http.get<Pier[]>(`${this.apiUrl}/list?value=${value}`)
      .pipe(
        tap(_ => this.log('fetched piers')),
        catchError(this.handleErrorC)
      );
  }

  handleErrorC(error) {
    console.log(error.error)
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error: ${error.error.error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
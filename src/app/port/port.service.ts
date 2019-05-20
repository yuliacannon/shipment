import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';
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
        catchError(this.handleErrorC)
      );
  }

  deletePort(id: string) {
      return this.http.delete(`${this.apiUrl}/${id}/remove`)
      .pipe(
        tap(_ => this.log('deleted port')),
        catchError(this.handleErrorC)
      );
  }

  addPort(port){
    return this.http.post(`${this.apiUrl}/add`, port, httpOptions)
    .pipe(
      tap(_ => this.log('added port')),
      catchError(this.handleErrorC)
    );
  }

  getPort(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`)
    .pipe(
      tap(_ => this.log('get port')),
      catchError(this.handleErrorC)
    );
  }

  editPort(id: string, data) {
    return this.http.put(`${this.apiUrl}/${id}/edit`, data)
    .pipe(
      tap(_ => this.log('edit port')),
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
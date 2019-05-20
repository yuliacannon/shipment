import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { BaseService } from '../base-service';
import { Ship } from '../interfaces.model';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ShipService extends BaseService {

  constructor(protected http: HttpClient) {
    super(http);
    this.apiUrl += '/ship';
  }

  getShips(): Observable<Ship[]> {
    return this.http.get<Ship[]>(`${this.apiUrl}/list`)
      .pipe(
        tap(_ => this.log('fetched ships')),
        catchError(this.handleError<Ship[]>('getShips', []))
      );
  }

  deleteShip(id: string) {
      return this.http.delete(`${this.apiUrl}/${id}/remove`)
      .pipe(
        tap(_ => this.log('deleted ship')),
        catchError(this.handleError<Ship[]>('deleteShip', []))
      );
  }

  addShip(ship): Observable<Ship> {
    return this.http.post(`${this.apiUrl}/add`, ship, httpOptions)
    .pipe(
      tap(_ => this.log('added ship')),
      catchError(this.handleError('addShip', ship))
    );
  }

  getShip(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`)
    .pipe(
      tap(_ => this.log('get ship')),
      catchError(this.handleError('getShip'))
    );
  }

  editShip(id: string, data) {
    return this.http.put(`${this.apiUrl}/${id}/edit`, data)
    .pipe(
      tap(_ => this.log('edit ship')),
      catchError(this.handleError('editShip'))
    );
  }

 
}
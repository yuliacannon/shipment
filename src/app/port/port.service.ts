import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, filter } from 'rxjs/operators';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { BaseService } from '../base-service';
import { Port } from '../interfaces.model'

@Injectable({
  providedIn: 'root'
})
export class PortService extends BaseService {

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
        catchError(this.handleError<Port[]>('getPorts', []))
      );
  }
}
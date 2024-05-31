import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FestivoanioService {

  private url: string;
  constructor(private http: HttpClient) { 
    this.url = `${environment.urlBase}verificar/`;
  }

  public listar(anio: number): Observable<any> {
    return this.http.get(`${this.url}${anio}`);
  }
}

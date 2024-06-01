import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FestivofechaService {

  private url:string;
  constructor(private http: HttpClient) { 
    this.url = `${environment.urlBase}verificar/`;
  }

  public festivo(anio: number, mes: number, dia: number): Observable<string> {
    return this.http.get(`${this.url}${anio}/{mes}/{dia}?mes=${mes}&dia=${dia}`,{responseType: 'text'});
 }
}
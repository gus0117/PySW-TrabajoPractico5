import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empresa } from './../models/empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private url = "http://localhost:3000/api/punto2b/";

  constructor(private _http: HttpClient) { }

  public getEmpresas():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        
      })
    }   
    return this._http.get(this.url, httpOptions);
  }
}

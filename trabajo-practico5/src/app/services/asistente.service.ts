import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Asistente } from '../models/asistente';

@Injectable({
  providedIn: 'root'
})
export class AsistenteService {

  url = "http://localhost:3000/api/punto1/";

  constructor(private _http:HttpClient) { }

  public getAsistentes():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        
      })
    }   
    return this._http.get(this.url, httpOptions);
  }

  public addAsistente(asistente: Asistente):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    let body = JSON.stringify(asistente);
    return this._http.post(this.url, body, httpOptions);
  }

  public deleteAsistente(asistente: Asistente):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        
      })
    }
    return this._http.delete(this.url+asistente._id,httpOptions);
  }
  
  public updateAsistente(asistente: Asistente):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    let body = JSON.stringify(asistente);
    return this._http.put(this.url+asistente._id, body, httpOptions);
  }
}

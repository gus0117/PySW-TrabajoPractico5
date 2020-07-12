import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mensaje } from './../models/mensaje';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {
  
  private url = "http://localhost:3000/api/punto2/";
  constructor(private _http: HttpClient) { }

  public getMensajes():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        
      })
    }   
    return this._http.get(this.url, httpOptions);
  }

  public addMensaje(mensaje:Mensaje):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders(
        {
          "Content-Type": "application/json"
        }
      )
    }

    let body = JSON.stringify(mensaje);
    return this._http.post(this.url, body, httpOptions);
  }

  public editMensaje(mensaje:Mensaje):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders(
        {
          "Content-Type": "application/json"
        }
      )
    }
    let body = JSON.stringify(mensaje);
    return this._http.put(this.url+mensaje._id, body, httpOptions);
  }

  public deleteMensaje(mensaje:Mensaje):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders(
        {

        }
      )
    }
    return this._http.delete(this.url+mensaje._id, httpOptions);
  }
  
}

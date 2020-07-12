import { Injectable } from '@angular/core';
import { Pasaje } from '../models/pasaje';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasajeServiceService {
  private url = "http://localhost:3000/api/punto3b/";
  listaPasajes: Array<Pasaje>;

  constructor(private _http:HttpClient) { 
    
  }

  /**
   * Obtener todos los pasajes disponibles
   */
  getPasajes():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        
      })
    }   
    return this._http.get(this.url, httpOptions);
  }

  /**
   * Agregar un nuevo pasaje a la lista
   * @param pasaje Nuevo pasaje
   */
  addPasaje(pasaje: Pasaje):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    let body = JSON.stringify(pasaje);
    return this._http.post(this.url, body, httpOptions);
  }

  /**
   * Elimina un paseje de la lista
   * @param pasaje Pasaje a eliminar
   */
  deletePasaje(pasaje: Pasaje){
    const httpOptions = {
      headers: new HttpHeaders({
       
      })
    }
    return this._http.delete(this.url+pasaje._id,httpOptions);
  }

  /**
   * Actualiza la lista de pasajes
   * @param pasaje Pasaje a actualizar
   */
  updatePasaje(pasaje: Pasaje){
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    let body = JSON.stringify(pasaje);
    return this._http.put(this.url+pasaje._id, body, httpOptions);

  }
}

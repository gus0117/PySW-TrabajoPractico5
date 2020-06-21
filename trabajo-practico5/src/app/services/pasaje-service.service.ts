import { Injectable } from '@angular/core';
import { Pasaje } from '../models/pasaje';
@Injectable({
  providedIn: 'root'
})
export class PasajeServiceService {
  listaPasajes: Array<Pasaje>;
  constructor() { 
    this.listaPasajes = new Array<Pasaje>();
    this.listaPasajes = 
    [{
      id:1,
      dniPasajero:23321123,
      categoriaPasajero:"m",
      fechaCompra:new Date(2020,2,10),
      precioPasaje: 300.52
    }];
  }

  /**
   * Obtener todos los pasajes disponibles
   */
  getPasajes(){
    return this.listaPasajes;
  }

  /**
   * Agregar un nuevo pasaje a la lista
   * @param pasaje Nuevo pasaje
   */
  addPasaje(pasaje: Pasaje){
    //Generar id
    pasaje.id = this.getIdDisponible();
    //Agrega 
    this.listaPasajes.push(pasaje);
  }

  /**
   * Elimina un paseje de la lista
   * @param pasaje Pasaje a eliminar
   */
  deletePasaje(pasaje: Pasaje){
    //Busca la id del pasaje a eliminar en la lista y obtiene su indice
    var idBorrar = this.listaPasajes.findIndex((item: Pasaje) => item.id == pasaje.id);
    //Elimina por indice
    this.listaPasajes.splice(idBorrar, 1);
  }

  /**
   * Actualiza la lista de pasajes
   * @param pasaje Pasaje a actualizar
   */
  updatePunto(pasaje: Pasaje){
    var idBorrar = this.listaPasajes.findIndex((item: Pasaje) => item.id == pasaje.id);    
    this.listaPasajes.splice(idBorrar, 1,pasaje);

  }

  getIdDisponible(){
    var maxid: number;
    maxid = 0;
    for( var i= 0; i < this.listaPasajes.length; i++){
      if(maxid < this.listaPasajes[i].id){
        maxid = this.listaPasajes[i].id
      }
    }
    return (maxid + 1);
  }
}

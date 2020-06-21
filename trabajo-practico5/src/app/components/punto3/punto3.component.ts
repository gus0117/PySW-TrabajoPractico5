import { Component, OnInit } from '@angular/core';
import { Pasaje } from '../../models/pasaje'
import { PasajeServiceService } from '../../services/pasaje-service.service';

@Component({
  selector: 'app-punto3',
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})

export class Punto3Component implements OnInit {

  pasaje: Pasaje;
  total:number;
  totalVentas:number = 0;
  ventasCategoriaM:number = 0;
  ventasCategoriaJ:number = 0;
  ventasCategoriaA:number = 0;

  constructor(private pasajeService:PasajeServiceService) {
    this.pasaje = new Pasaje();
  }

  ngOnInit(): void {
  }

  guardarPasaje(){
    this.pasajeService.addPasaje(this.pasaje);
    this.actualizarVentasCategoria(this.pasaje.categoriaPasajero);
    this.actualizarTotalVentas(this.pasaje.precioPasaje);
    this.pasaje = new Pasaje();

  }

  actualizarTotalVentas(valor:number){
    this.totalVentas += Number(valor);
  }

  actualizarVentasCategoria(categoria:string){
    switch(categoria){
      case "m": this.ventasCategoriaM++; break;
      case "j": this.ventasCategoriaJ++; break;
      case "a": this.ventasCategoriaA++; break;
      default: break;
    }
  }
  actualizarPrecio(){
    if(this.pasaje.precioPasaje != null && this.pasaje.categoriaPasajero != null){
      switch(this.pasaje.categoriaPasajero){
        case "m": this.total = this.pasaje.precioPasaje * 0.75; break;
        case "j": this.total = this.pasaje.precioPasaje * 0.5; break;
        case "a": this.total = this.pasaje.precioPasaje; break;
        default: break;
      }
    }
  }

  obtenerListaPasajes(): Array<Pasaje>{
    return this.pasajeService.getPasajes();
  }
}

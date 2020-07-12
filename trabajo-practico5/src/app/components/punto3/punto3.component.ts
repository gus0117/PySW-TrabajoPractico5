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
  listaPasajes: Array<Pasaje>;
  total:number;
  totalVentas:number = 0;
  ventasCategoriaM:number = 0;
  ventasCategoriaJ:number = 0;
  ventasCategoriaA:number = 0;

  constructor(private pasajeService:PasajeServiceService) {
    this.pasaje = new Pasaje();
    this.cargarListaPasajes();
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

  cargarListaPasajes(){
    this.pasajeService.getPasajes().subscribe(
      (result) => {
        this.listaPasajes = new Array<Pasaje>();
        let auxPasaje;
        result.forEach(p => {
          auxPasaje = new Pasaje();
          Object.assign(auxPasaje, p);
          this.listaPasajes.push(auxPasaje);
        })
      },
      (error) => { console.log("error en la peticion."); }
    );
  }
}

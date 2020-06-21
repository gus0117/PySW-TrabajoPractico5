import { Component, OnInit } from '@angular/core';
import { Palabra } from '../../models/palabra';
import { PalabraServiceService } from '../../services/palabra-service.service';
@Component({
  selector: 'app-punto4',
  templateUrl: './punto4.component.html',
  styleUrls: ['./punto4.component.css']
})
export class Punto4Component implements OnInit {

  palabra: Palabra;
  palabraIngles: Array<string>;
  respuesta: Array<string>;
  vidas: number = 6;
  puntos: number = 0;
  jugando: boolean = false;

  constructor(private PalabraService: PalabraServiceService) {
    this.palabra = new Palabra();
     this.palabraIngles = new Array<string>();
     this.respuesta = new Array<string>();
  }

  ngOnInit(): void {
    
  }

  comprobarPalabra(indice: number){
    if(this.palabraIngles[indice] != this.respuesta[indice]){
      this.vidas--;
    }
    if(this.palabraIngles.length == this.respuesta.length){
      //palabra completada
      if(this.esIgual()){
         this.puntos++;
         //Siguiente palabra
         this.siguienteNivel();
      }
    }
  }

  esIgual(): boolean{
     for(let i=0; i < this.palabraIngles.length; i++){
       if(this.respuesta[i] != this.palabraIngles[i]){
         return false;
       }
     }
     return true;
  }

  siguienteNivel(){
    this.palabra = this.PalabraService.obtenerPalabra();
    this.palabraIngles = this.PalabraService.obtenerPalabraIngles(this.palabra.palabraIng);
    this.respuesta = new Array<string>();
  }

  iniciarNivel(){
    console.log("Nivel iniciado");
    this.jugando = true;
    this.palabra = this.PalabraService.obtenerPalabra();
    this.palabraIngles = this.PalabraService.obtenerPalabraIngles(this.palabra.palabraIng);
    this.vidas = 6;
    this.puntos = 0;
    //console.log(this.palabraElegida);
  }
}

import { Injectable } from '@angular/core';
import { Palabra } from '../models/palabra';

@Injectable({
  providedIn: 'root'
})
export class PalabraServiceService {

  listaPalabras: Array<Palabra>;

  constructor() { 
    this.listaPalabras = new Array<Palabra>();
    this.listaPalabras = 
    [
      {
        palabraEsp: "leon",
        palabraIng: "lion",
        urlImagen: "/assets/Images/Animales/leon.jpg"
      },
      {
        palabraEsp: "pez",
        palabraIng: "lion",
        urlImagen: "/assets/Images/Animales/pez.jpg"
      },
      {
        palabraEsp: "gato",
        palabraIng: "cat",
        urlImagen: "/assets/Images/Animales/gato.jpg"
      },
      {
        palabraEsp: "perro",
        palabraIng: "dog",
        urlImagen: "/assets/Images/Animales/perro.jpg"
      },
      {
        palabraEsp: "pajaro",
        palabraIng: "bird",
        urlImagen: "/assets/Images/Animales/pajaro.jpg"
      },
      {
        palabraEsp: "cerdito",
        palabraIng: "pig",
        urlImagen: "/assets/Images/Animales/cerdito.jpg"
      },
      {
        palabraEsp: "tortuga",
        palabraIng: "turtle",
        urlImagen: "/assets/Images/Animales/tortuga.jpg"
      },
      {
        palabraEsp: "serpiente",
        palabraIng: "snake",
        urlImagen: "/assets/Images/Animales/serpiente.jpg"
      },
      {
        palabraEsp: "castor",
        palabraIng: "beaver",
        urlImagen: "/assets/Images/Animales/castor.jpg"
      }
    ];
  }

  public obtenerPalabraIngles(unaPalabra: string): Array<string>{
    let arrayPalabra = new Array<string>();
    for(let i=0; i < unaPalabra.length; i++){
       arrayPalabra[i] = unaPalabra[i];
    }

    return arrayPalabra;
  }

  public obtenerPalabra(): Palabra{
    //Genera indice aleatorio
    let indice = this.genererIndiceAleatorio(1, 10);
    let palabra: Palabra = this.listaPalabras[indice];
    return palabra;
  }

  /**
   * Retorna un número aleatorio entre min (incluido) y max (excluido)
   * @param min Desde (incluido)
   * @param max Hasta (excluido)
   */
  public genererIndiceAleatorio(min: number, max: number): number{
    let numero = Math.random() * (max - min) + min;
    numero = Math.trunc(numero - 1);
    return numero;
  }
}

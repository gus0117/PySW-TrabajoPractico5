import { Component, OnInit } from '@angular/core';
import { Asistente } from '../../models/asistente';
import { AsistenteService } from '../../services/asistente.service';
import { element } from 'protractor';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component implements OnInit {

  asistente: Asistente;
  listaAsistentes: Array<Asistente>;

  constructor(private asistenteService: AsistenteService) { 
    this.asistente = new Asistente();
    this.asistente.solicitaConstancia = false;
    this.cargarLista();
  }

  ngOnInit(): void {
  }

  public limpiarAsistente(){
    this.asistente = new Asistente();
    this.asistente.solicitaConstancia = false;
  }

  public cargarLista(){
    this.asistenteService.getAsistentes().subscribe(
      (result) => {
          let asist;
          this.listaAsistentes = new Array<Asistente>();
          result.forEach(element => {
            asist = new Asistente();
            Object.assign(asist, element);
            this.listaAsistentes.push(asist);
          })
          console.log(this.listaAsistentes);
      },
      error => {alert('Error en listar');}
    );
  }

  public agregarNuevoAsistente(){
    this.asistenteService.addAsistente(this.asistente).subscribe(
      (result) => {
        alert("Asistente Guardado");
        this.limpiarAsistente();
        this.cargarLista();
      },
      error => { console.log("error "+error)}
    );
  }

  public borrarAsistente(a: Asistente){
    this.asistenteService.deleteAsistente(a).subscribe(
      (result) => { 
        alert("Asistente Eliminado");
        this.cargarLista();
      },
      error => { console.log("error "+ error)}
    )
  }

  public seleccionarAsistente(a: Asistente){
    let vasistente = new Asistente();
    Object.assign(vasistente,a);
    this.asistente = vasistente;
  }

  public modificarAsistente(){
    this.asistenteService.updateAsistente(this.asistente).subscribe(
      (result) => {
        alert("Asistente Modificado");
        this.cargarLista();
      }
    );
  }
}

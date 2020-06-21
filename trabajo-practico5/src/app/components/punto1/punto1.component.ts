import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Mensaje } from '../../models/mensaje';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})

export class Punto1Component implements OnInit {
  
  mensaje: Mensaje;
  tamMaxTexto: number = 20;
  tamTexto: number;

  mensajes: Array<Mensaje>;

  modalService: NgbModal;

  closeResult = '';
  constructor() { 
    this.mensaje = new Mensaje();
    this.mensajes = new Array<Mensaje>();
  }

  ngOnInit(): void {
  }

  public cambiarTamTexto(){
    this.tamTexto = this.mensaje.texto.length;
    console.log(this.tamTexto);
  }

  public limpiarFormulario(): void{
    this.mensaje.texto = '';
    this.mensaje.para = null;
    this.mensaje.desde = null;

  }
}

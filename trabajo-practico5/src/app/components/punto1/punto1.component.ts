import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Mensaje } from '../../models/mensaje';
import { Empresa } from '../../models/empresa';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MensajeService } from './../../services/mensaje.service';
import { EmpresaService } from './../../services/empresa.service';

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
  empresas: Array<Empresa>;

  modalService: NgbModal;

  closeResult = '';
  constructor(private mensajeService: MensajeService, private empresaService: EmpresaService) { 
    this.mensaje = new Mensaje();
    this.cargarMensajes();
    this.cargarEmpresas();
  }

  ngOnInit(): void {
  }

  public cargarEmpresas(){
    this.empresaService.getEmpresas().subscribe(
      (result) => {
        this.empresas = new Array<Empresa>();
        let emp;
        result.forEach(e => {
          emp = new Empresa();
          Object.assign(emp, e);
          this.empresas.push(emp);
        })
      },
      (error) => { console.log("Error al cargar empresas"); }
    );
  }

  public cargarMensajes(){
    this.mensajeService.getMensajes().subscribe(
      (result) => {
        this.mensajes = new Array<Mensaje>();
        let msj;
        result.forEach(m => {
          msj = new Mensaje();
          Object.assign(msj,m);
          this.mensajes.push(msj);
        });
      },
      (error) => { console.log("error en la solicitud");}
    );
  }

  public agregarMensaje(){
    this.mensaje.fecha = new Date();
    this.mensajeService.addMensaje(this.mensaje).subscribe(
      (result) => {
        this.cargarMensajes();
        //this.limpiarFormulario();
        console.log("Mensaje agregado");
      },
      (error) => { console.log("erro al enviar mensaje"); }
    );
  }
  
  public mostrarMensaje(m:Mensaje){
    let msj = new Mensaje();
    Object.assign(msj,m);
    this.mensaje = msj;
  }

  public editarMensaje(){
    this.mensajeService.editMensaje(this.mensaje).subscribe(
      (result) => {
        this.cargarMensajes();
        //this.limpiarFormulario();
        console.log("Mensaje Editado");
      },
      (error) => { console.log("Error en la solicitud"); }
    )
  }

  public eliminarMensaje(m:Mensaje){
    this.mensajeService.deleteMensaje(m).subscribe(
      (result) => {
        console.log("Mensaje Eliminado");
        this.cargarMensajes();
      },
      (error) => { console.log("Fallo en la peticion."); }
    )
  }

  public cambiarTamTexto(){
    this.tamTexto = this.mensaje.texto.length;
    //console.log(this.tamTexto);
  }

  public limpiarFormulario(): void{
    this.mensaje=new Mensaje();

  }
}

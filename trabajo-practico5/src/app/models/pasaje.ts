import {Adelanto} from './adelanto';

export class Pasaje {
    _id: string;
    dniPasajero: number;
    precioPasaje: number;
    categoriaPasajero: string;
    fechaCompra: Date;
    adelantos: Array<Adelanto>;

    constructor(dniPasajero?:number, precioPasaje?:number, categoriaPasajero?:string, fechaCompra?:Date, adelantos?:Array<Adelanto>){
        this.dniPasajero = dniPasajero;
        this.precioPasaje = precioPasaje;
        this.categoriaPasajero = categoriaPasajero;
        this.fechaCompra = fechaCompra;
        this.adelantos = adelantos;
    }
}

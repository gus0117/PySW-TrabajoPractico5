export class Pasaje {
    id: number;
    dniPasajero: number;
    precioPasaje: number;
    categoriaPasajero: string;
    fechaCompra: Date;

    constructor(dniPasajero?:number, precioPasaje?:number, categoriaPasajero?:string, fechaCompra?:Date){
        this.dniPasajero = dniPasajero;
        this.precioPasaje = precioPasaje;
        this.categoriaPasajero = categoriaPasajero;
        this.fechaCompra = fechaCompra;
    }
}

export class Adelanto {
    _id:string;
    fecha:Date;
    cobrador:string;
    adelanto:number;

    constructor(fecha?:Date, cobrador?:string, adelanto?:number){
        this.fecha=fecha;
        this.cobrador=cobrador;
        this.adelanto=adelanto;
    }
}

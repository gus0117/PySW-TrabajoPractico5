import { Empresa } from './empresa';

export class Mensaje {
    _id: string;
    para: number;
    desde: number;
    texto: string;
    fecha: Date;
    empresa: Empresa;
    constructor (para?: number, desde?: number, texto?: string, fecha?: Date, empresa?:Empresa){
        this.para = para;
        this.desde = desde;
        this.texto = texto;
        this.fecha = fecha;
        this.empresa = empresa;
    }
}

export class Palabra {
    palabraEsp: string;
    palabraIng: string;
    urlImagen: string;

    constructor(palabraEsp?:string, palabraIng?:string, urlImagen?: string){
        this.palabraEsp = palabraEsp;
        this.palabraIng = palabraIng;
        this.urlImagen = urlImagen;
    }
}

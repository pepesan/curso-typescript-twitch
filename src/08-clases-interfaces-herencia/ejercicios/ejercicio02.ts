import {Perro} from "./Perro.ts";

export function setupEjercicio02Clases(element: HTMLParagraphElement){

    let nyska: Perro = new Perro(7,"Nyska");

    // imprimir por pantalla en el elemento parrafo un texto
    element.innerHTML=`
        Herencia:
        Nyska: Edad: ${nyska.edad} : Nombre: ${nyska.nombre}
    `;
}

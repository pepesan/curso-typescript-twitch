import {Katateka} from "./Katateka.ts";

export function setupEjercicio03Clases(element: HTMLParagraphElement){

    let danielSan: Katateka = new Katateka();

    // imprimir por pantalla en el elemento parrafo un texto
    element.innerHTML=`
        Karateka: ${danielSan.grito()}
    `;
}

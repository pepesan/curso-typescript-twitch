import {Animal} from "./Animal.ts";

export function setupEjercicioClases(element: HTMLParagraphElement){

    let animal: Animal = new Animal(12);
    animal.edad = 27;
    // imprimir por pantalla en el elemento parrafo un texto
    element.innerHTML=`
       edad: ${animal.edad}
    `;
}

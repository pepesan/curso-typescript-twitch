import {Animal} from "./Animal.ts";


export function setupClasesEjercicio01(element: HTMLParagraphElement){

    let animal: Animal = new Animal(10);

    element.innerHTML=`
    
    edad: ${animal.age}
    
    
    `;
}

export function setupVars(element: HTMLParagraphElement){
    // definiciones de variables
    let a: null = null
    let b: boolean = true
    let c: number = 23
    let d: string = "Hola"

    // variables
    // var se usa de una manera similar a Javascript
    var numeroVariable: number = 2;
    numeroVariable = numeroVariable +1;

    // let
    // se aplica a variables definidas en el bloque de código
    let variableLocal = "local"
    variableLocal = "otra local"

    // const
    // se aplica a constantes
    const constante: string = "Adios"
    // constante = "Adiosito"  No se puede cambiar

    // imprimir por pantalla en el elemento parrafo un texto
    element.innerHTML=`
        nulo: ${a}, 
        booleano ${b}, 
        numero ${c}, 
        cadena ${d}, 
        numeroVariable ${numeroVariable}, 
        variableLocal ${variableLocal}, 
        constante ${constante}`;
}

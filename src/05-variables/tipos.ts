export function setupVars(element: HTMLParagraphElement){
    // Las anotaciones son útiles cuando el tipo no se deduce de un valor inicial.
    let a: null = null
    let b: boolean = true
    let c: number = 23
    let d: string = "Hola"
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
    // variables
    // `var` tiene alcance de función; en código moderno se suele preferir let/const.
    var numeroVariable: number = 2;
    numeroVariable = numeroVariable +1;

    // `let` tiene alcance de bloque y permite reasignar el valor.
    let variableLocal = "local"
    variableLocal = "otra local"

    // `const` evita reasignar la variable; TypeScript puede inferir su tipo.
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

export function setupVars(element: HTMLParagraphElement){
    let a: null = null
    let b: boolean = true
    let c: number = 23
    let d: string = "Hola"

    element.innerHTML=`nulo: ${a}, booleano ${b}, numero ${c}, cadena ${d}`;
}

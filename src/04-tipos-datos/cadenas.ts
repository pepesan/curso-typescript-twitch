export function setupCadenas(element: HTMLParagraphElement){
    let miCadena: string = "Hola Cadenas"
    let muchosEspacios = "     Espacios     "
    element.innerHTML=`
        miCadena: ${miCadena}, 
        length ${miCadena.length}, 
        toUpperCase ${miCadena.toUpperCase()}, 
        trim ${muchosEspacios.trim()}`;
}

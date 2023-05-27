export function setupBucles(element: HTMLParagraphElement){
    const array: number[] = [1, 2, 3, 4, 5];
    let salidaFor: string;
    salidaFor+="[";
    for (let i = 0; i < array.length; i++) {
        salidaFor+=`${array[i]},`
    }
    salidaFor+="]";

    let i = 0;
    let salidaWhile: string;
    salidaWhile+="[";
    while (i < array.length) {
        salidaWhile+=`${array[i]},`
        i++;
    }
    salidaWhile+="]";

    let salidaDoWhile: string;
    i =0;
    salidaDoWhile+="[";

    do {
        salidaDoWhile+=`${array[i]},`
        i++;
    } while (i < array.length);
    salidaDoWhile+="]";

    const cadena = "Hola, mundo!";
    let salidaForCadena: string = "[";
    for (let i = 0; i < cadena.length; i++) {
        salidaForCadena+=`${cadena[i]}`;
    }
    salidaForCadena+="]";

    let salidaWhileCadena: string = "[";
    i = 0;
    while (i < cadena.length) {
        salidaWhileCadena+=`${cadena[i]}`;
        i++;
    }
    salidaWhileCadena+="]";

    i = 0;
    let salidaDoWhileCadena: string = "[";
    do {
        salidaDoWhileCadena+=`${cadena[i]}`;
        i++;
    } while (i < cadena.length);
    salidaDoWhileCadena+="]";
    // imprimir por pantalla en el elemento parrafo un texto
    element.innerHTML=`
    Bucles: Arrays: For: ${salidaFor} While ${salidaWhile}, Do-While ${salidaDoWhile} Cadenas: For: ${salidaForCadena} While ${salidaWhileCadena}, Do-While ${salidaDoWhileCadena}
    `
}

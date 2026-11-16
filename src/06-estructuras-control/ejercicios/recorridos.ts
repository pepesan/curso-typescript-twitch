/** Recorre diez números con los cinco bucles solicitados y muestra cada iteración. */
export function setupEjerciciosRecorridos(element: HTMLParagraphElement): void {
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const salidaFor: number[] = [];
    const salidaWhile: number[] = [];
    const salidaDoWhile: number[] = [];
    const salidaForOf: number[] = [];
    const salidaForIn: string[] = [];

    for (let indice = 0; indice < numeros.length; indice++) {
        salidaFor.push(numeros[indice]);
    }

    let indiceWhile = 0;
    while (indiceWhile < numeros.length) {
        salidaWhile.push(numeros[indiceWhile]);
        indiceWhile++;
    }

    let indiceDoWhile = 0;
    do {
        salidaDoWhile.push(numeros[indiceDoWhile]);
        indiceDoWhile++;
    } while (indiceDoWhile < numeros.length);

    for (const numero of numeros) {
        salidaForOf.push(numero);
    }

    for (const indice in numeros) {
        salidaForIn.push(`${indice}: ${numeros[indice]}`);
    }

    element.innerHTML = `
        <strong>Ejercicios de Estructuras de Control</strong><br>
        Array: [${numeros.join(", ")}]<br>
        for: ${salidaFor.join(" → ")}<br>
        while: ${salidaWhile.join(" → ")}<br>
        do...while: ${salidaDoWhile.join(" → ")}<br>
        for...of (valores): ${salidaForOf.join(" → ")}<br>
        for...in (índice: valor): ${salidaForIn.join(" | ")}`;
}

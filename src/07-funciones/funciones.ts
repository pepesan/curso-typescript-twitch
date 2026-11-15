/** La anotación describe qué argumentos acepta la función y qué devuelve. */
export function sumar(a: number, b: number): number {
    return a + b;
}

/** `?` hace opcional un parámetro; dentro de la función incluye undefined. */
export function saludar(saludo: string, nombre?: string): string {
    return nombre === undefined ? `${saludo}!` : `${saludo}, ${nombre}!`;
}

/** Los parámetros por defecto también se pueden omitir al llamar. */
export function multiplicar(numero: number, factor = 3): number {
    return numero * factor;
}

/** El parámetro rest reúne cero o más argumentos en un array tipado. */
export function saludarA(saludo: string, ...nombres: string[]): string {
    return `${saludo} ${nombres.join(", ")}!`;
}

/** Un tipo función permite guardar una función en una variable o recibirla. */
type Operacion = (izquierda: number, derecha: number) => number;

export function aplicarOperacion(
    izquierda: number,
    derecha: number,
    operacion: Operacion,
): number {
    return operacion(izquierda, derecha);
}

/**
 * Las sobrecargas ofrecen firmas precisas a quien llama. La implementación
 * usa una unión y comprueba el tipo; no necesita recurrir a `any`.
 */
export function combinar(a: number, b: number): number;
export function combinar(a: string, b: string): string;
export function combinar(a: number | string, b: number | string): number | string {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }

    if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }

    throw new Error("Los dos argumentos deben ser ambos números o ambos textos");
}

export function setupFunciones(element: HTMLParagraphElement): void {
    const suma = aplicarOperacion(2, 3, (a, b) => a + b);
    const producto = aplicarOperacion(2, 3, (a, b) => a * b);

    element.innerHTML = `
        sumar(2, 3): ${sumar(2, 3)}<br>
        saludar("Hola"): ${saludar("Hola")}<br>
        saludar("Hola", "Ada"): ${saludar("Hola", "Ada")}<br>
        multiplicar(4): ${multiplicar(4)}<br>
        saludarA("Hola", "Ada", "Grace"): ${saludarA("Hola", "Ada", "Grace")}<br>
        aplicarOperacion con suma: ${suma}; con producto: ${producto}<br>
        combinar(2, 3): ${combinar(2, 3)}; combinar("Hola", " TypeScript"): ${combinar("Hola", " TypeScript")}
    `;
}

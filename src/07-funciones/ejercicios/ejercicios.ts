/** Imprime un valor en la consola; el valor de retorno es `void`. */
export function imprimirEnConsola(valor: string): void {
    console.log(valor);
}

/** Suma dos números e imprime el resultado en la consola. */
export function sumarEImprimir(a: number, b: number): void {
    console.log(a + b);
}

/** Suma dos números y devuelve el resultado al llamador. */
export function sumarYDevolver(a: number, b: number): number {
    return a + b;
}

/** Los parámetros opcionales se estrechan con `??` antes de sumarlos. */
export function sumarOpcionales(a?: number, b?: number): number {
    return (a ?? 0) + (b ?? 0);
}

/** Los dos parámetros tienen valores por defecto independientes. */
export function sumarConDefecto(a = 10, b = 20): number {
    return a + b;
}

/** El parámetro rest recoge una cantidad variable de textos en un array. */
export function concatenar(...partes: string[]): string {
    return partes.join("");
}

export function setupEjerciciosFunciones(element: HTMLParagraphElement): void {
    imprimirEnConsola("Ejercicios de Funciones: mensaje de prueba");
    sumarEImprimir(3, 4);

    element.innerHTML = `
        <strong>Ejercicios de Funciones</strong><br>
        imprimirEnConsola("mensaje"): consulta la consola del navegador.<br>
        sumarEImprimir(3, 4): imprime 7 en la consola.<br>
        sumarYDevolver(3, 4): ${sumarYDevolver(3, 4)}.<br>
        sumarOpcionales(3, 4): ${sumarOpcionales(3, 4)}; sumarOpcionales(3): ${sumarOpcionales(3)}.<br>
        sumarConDefecto(): ${sumarConDefecto()}; sumarConDefecto(1, 2): ${sumarConDefecto(1, 2)}.<br>
        concatenar("Type", "Script"): ${concatenar("Type", "Script")}.`;
}

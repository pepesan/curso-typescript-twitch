/** Guarda y recupera un dato; el bloque catch permite informar fallos del navegador. */
export function setupEjercicioLocalStorage(element: HTMLParagraphElement): void {
    let salida: string;

    try {
        localStorage.setItem("curso-typescript-ejercicio", "dato guardado");
        const valorRecuperado = localStorage.getItem("curso-typescript-ejercicio");
        salida = `Valor recuperado: ${valorRecuperado}`;
    } catch (error: unknown) {
        const mensaje = error instanceof Error ? error.message : String(error);
        salida = `No se pudo usar localStorage: ${mensaje}`;
    }

    element.innerHTML = `<strong>Ejercicio de LocalStorage</strong><br>${salida}`;
}

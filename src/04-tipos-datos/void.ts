/** `void` indica que la función termina sin devolver un valor útil. */
function registrar(mensaje: string): void {
    console.log(mensaje);
}

/** `never` describe una función que no llega a terminar normalmente. */
function fallar(mensaje: string): never {
    throw new Error(mensaje);
}

export function setupVoid(element: HTMLParagraphElement): void {
    registrar("Una función void puede producir efectos, pero no devuelve un resultado.");

    // Al capturar el error podemos mostrarlo sin interrumpir la carga de la página.
    try {
        fallar("Ejemplo de una función que devuelve never");
    } catch (error: unknown) {
        const mensaje = error instanceof Error ? error.message : "Error desconocido";
        element.textContent = `void: registrar no devuelve un valor. never: ${mensaje}`;
    }
}

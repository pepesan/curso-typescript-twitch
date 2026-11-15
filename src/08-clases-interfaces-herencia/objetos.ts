/**
 * Un alias de tipo permite dar nombre a una forma de objeto. `?` marca una
 * propiedad opcional: al leerla, el valor puede ser undefined.
 */
export type Direccion = {
    calle: string;
    ciudad: string;
    codigoPostal?: string;
};

/** Las interfaces también describen la forma que debe tener un objeto. */
export interface Cliente {
    readonly id: number;
    nombre: string;
    direccion?: Direccion;
}

/** Recibe una interfaz, pero acepta cualquier objeto compatible con ella. */
export function presentarCliente(cliente: Cliente): string {
    const ciudad = cliente.direccion?.ciudad ?? "ciudad no indicada";
    const codigoPostal = cliente.direccion?.codigoPostal ?? "sin código postal";
    return `${cliente.nombre} (id ${cliente.id}), vive en ${ciudad}, ${codigoPostal}`;
}

export function setupObjetos(element: HTMLParagraphElement): void {
    const cliente: Cliente = {
        id: 101,
        nombre: "Ada Lovelace",
        direccion: { calle: "St James's Square", ciudad: "Londres" },
    };

    // `readonly` impide reasignar id en TypeScript; no congela el objeto en ejecución.
    element.textContent = presentarCliente(cliente);
}

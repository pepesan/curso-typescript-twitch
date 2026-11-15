/** Un union type enumera las formas válidas que puede tomar un valor. */
export type EstadoPedido = "pendiente" | "enviado" | "entregado";

/** `null` y `undefined` son casos explícitos que el código debe manejar. */
export function nombreEstado(estado: EstadoPedido | undefined): string {
    if (estado === undefined) {
        return "El pedido todavía no tiene estado";
    }

    // La comparación literal estrecha EstadoPedido al valor comprobado.
    switch (estado) {
        case "pendiente":
            return "Estamos preparando el pedido";
        case "enviado":
            return "El pedido está en camino";
        case "entregado":
            return "El pedido se entregó";
        default:
            // Si añadimos otro estado y olvidamos tratarlo, el compilador avisa.
            const estadoNoContemplado: never = estado;
            return estadoNoContemplado;
    }
}

/** `typeof` permite distinguir miembros primitivos de una unión. */
export function mostrarCodigo(codigo: string | number): string {
    if (typeof codigo === "number") {
        return `Código numérico: ${codigo.toFixed(0)}`;
    }

    return `Código alfanumérico: ${codigo.toUpperCase()}`;
}

/** Comprobamos ambos valores nulos explícitamente antes de usar el texto. */
export function normalizarNombre(nombre: string | null | undefined): string {
    if (nombre == null) {
        // `== null` cubre null y undefined; TypeScript los quita de la unión.
        return "Nombre no indicado";
    }

    return nombre.trim();
}

type ResultadoEntrega =
    | { tipo: "exito"; codigoSeguimiento: string }
    | { tipo: "error"; mensaje: string };

/** Una propiedad literal común permite distinguir variantes de objetos. */
export function describirEntrega(resultado: ResultadoEntrega): string {
    if (resultado.tipo === "exito") {
        // Esta rama tiene el tipo { tipo: "exito"; codigoSeguimiento: string }.
        return `Seguimiento: ${resultado.codigoSeguimiento}`;
    }

    // Aquí TypeScript sabe que solo queda la variante de error.
    return `No se pudo enviar: ${resultado.mensaje}`;
}

export function setupEstrechamiento(element: HTMLParagraphElement): void {
    element.innerHTML = [
        nombreEstado("enviado"),
        nombreEstado(undefined),
        mostrarCodigo("ab-42"),
        mostrarCodigo(42),
        normalizarNombre(null),
        normalizarNombre("  Grace Hopper  "),
        describirEntrega({ tipo: "exito", codigoSeguimiento: "TS-42" }),
        describirEntrega({ tipo: "error", mensaje: "dirección incompleta" }),
    ].join("<br>");
}

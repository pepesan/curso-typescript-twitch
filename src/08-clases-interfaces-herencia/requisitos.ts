/** Los tipos describen los datos que llegan desde el requisito del ejercicio. */
export interface ArticuloPedido {
    nombre: string;
    precioUnitario: number;
    unidades: number;
}

export interface Pedido {
    articulos: readonly ArticuloPedido[];
    /** Porcentaje opcional entre 0 y 100; si se omite, no hay descuento. */
    descuentoPorcentaje?: number;
}

/**
 * Requisito: sumar precio × unidades de cada artículo y aplicar el descuento.
 * El tipo ayuda a usar la forma correcta del pedido, pero no valida datos externos.
 */
export function calcularTotal(pedido: Pedido): number {
    const subtotal = pedido.articulos.reduce(
        (suma, articulo) => suma + articulo.precioUnitario * articulo.unidades,
        0,
    );
    const descuento = pedido.descuentoPorcentaje ?? 0;

    // TypeScript valida la forma, no los rangos numéricos: eso se comprueba aquí.
    if (descuento < 0 || descuento > 100) {
        throw new RangeError("El descuento debe estar entre 0 y 100");
    }

    return subtotal * (1 - descuento / 100);
}

export function setupRequisitos(element: HTMLParagraphElement): void {
    const pedido: Pedido = {
        articulos: [
            { nombre: "Libro", precioUnitario: 20, unidades: 2 },
            { nombre: "Cuaderno", precioUnitario: 5, unidades: 1 },
        ],
        descuentoPorcentaje: 10,
    };

    element.textContent = `Total del pedido: ${calcularTotal(pedido).toFixed(2)} €`;
}

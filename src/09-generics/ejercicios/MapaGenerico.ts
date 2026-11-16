/** Guarda pares clave/valor conservando ambos tipos mediante parámetros genéricos. */
export class MapaGenerico<Clave, Valor> {
    private readonly datos: Map<Clave, Valor>;

    /** El constructor puede recibir pares iniciales o empezar con un mapa vacío. */
    constructor(entradas: Iterable<readonly [Clave, Valor]> = []) {
        this.datos = new Map(entradas);
    }

    /** Añade una pareja o sustituye el valor de una clave que ya existe. */
    add(clave: Clave, valor: Valor): void {
        this.datos.set(clave, valor);
    }

    /** Devuelve true si la clave estaba en el mapa y se ha eliminado. */
    borrar(clave: Clave): boolean {
        return this.datos.delete(clave);
    }

    /** Devuelve una representación legible de todos los pares almacenados. */
    display(): string {
        if (this.datos.size === 0) return "(mapa vacío)";

        return Array.from(this.datos, ([clave, valor]) => `${String(clave)} → ${String(valor)}`).join("; ");
    }
}

export function setupEjercicioMapa(element: HTMLParagraphElement): void {
    const edades = new MapaGenerico<string, number>([["Ada", 36]]);
    edades.add("Grace", 85);
    const antesDeBorrar = edades.display();
    const borrado = edades.borrar("Ada");

    element.innerHTML = `
        <strong>Ejercicios de Generics · Mapa</strong><br>
        Mapa inicial (constructor): ${new MapaGenerico<string, number>([["Ada", 36]]).display()}<br>
        Después de add("Grace", 85): ${antesDeBorrar}<br>
        borrar("Ada"): ${borrado}; contenido: ${edades.display()}`;
}

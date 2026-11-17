/**
 * Listado genérico: T se fija al crear la instancia (GenericList<number>, GenericList<Task>...)
 * y todos los métodos trabajan con ese mismo tipo, sin usar `any`.
 */
export class GenericList<T> {
    private items: T[] = [];
    private released = false;

    /** Inicializa el listado con los valores recibidos, en el mismo orden. */
    constructor(...initialItems: T[]) {
        this.items.push(...initialItems);
    }

    get size(): number {
        this.ensureActive();
        return this.items.length;
    }

    /** Inserta al principio: los demás elementos se desplazan una posición. */
    insertAtStart(item: T): void {
        this.ensureActive();
        this.items.unshift(item);
    }

    /** Añade al final del listado. */
    insertAtEnd(item: T): void {
        this.ensureActive();
        this.items.push(item);
    }

    /** Inserta en una posición concreta (0 = inicio, size = final). */
    insertAt(position: number, item: T): void {
        this.ensureActive();
        if (!Number.isInteger(position) || position < 0 || position > this.items.length) {
            throw new RangeError(`Posición ${position} fuera de rango (0-${this.items.length})`);
        }
        this.items.splice(position, 0, item);
    }

    /** Devuelve una copia de solo lectura: el llamador no puede modificar el listado interno. */
    toArray(): readonly T[] {
        this.ensureActive();
        return [...this.items];
    }

    /**
     * Libera los elementos: suelta el array interno y marca el listado como liberado.
     * JavaScript no tiene free() manual: al soltar las referencias, el recolector de
     * basura puede reclamar la memoria. Después de liberar, cualquier uso lanza error.
     */
    release(): void {
        this.items = [];
        this.released = true;
    }

    private ensureActive(): void {
        if (this.released) {
            throw new Error("El listado ya ha sido liberado");
        }
    }
}

export function setupGenericList(element: HTMLParagraphElement): void {
    // Inicializado con valores: T = number
    const numbers = new GenericList<number>(2, 3, 4);
    numbers.insertAtStart(1);
    numbers.insertAtEnd(5);
    numbers.insertAt(3, 99);
    const beforeRelease = numbers.toArray().join(", ");
    const sizeBefore = numbers.size;

    // Con otro tipo: T = string, sin constructor inicial
    const names = new GenericList<string>();
    names.insertAtEnd("Ada");
    names.insertAtStart("Grace");

    // Con objetos: T = { id, title }
    interface Task {
        id: number;
        title: string;
    }
    const tasks = new GenericList<Task>({ id: 1, title: "Revisar clases" });
    tasks.insertAtEnd({ id: 2, title: "Probar generics" });

    // Posición fuera de rango: el error se captura y se muestra
    let positionError = "";
    try {
        numbers.insertAt(42, 0);
    } catch (error) {
        positionError = error instanceof Error ? error.message : String(error);
    }

    // Liberación de memoria y uso posterior
    numbers.release();
    let releasedError = "";
    try {
        numbers.toArray();
    } catch (error) {
        releasedError = error instanceof Error ? error.message : String(error);
    }

    element.innerHTML = `
        numeros tras inicializar e insertar: ${beforeRelease} (tamaño ${sizeBefore})<br>
        nombres: ${names.toArray().join(", ")} (tamaño ${names.size})<br>
        tareas: ${tasks.toArray().map((t) => `${t.id} - ${t.title}`).join(" | ")}<br>
        error al insertar en posición 42: ${positionError}<br>
        tras liberar: ${releasedError}
    `;
}

import { describe, expect, it } from "vitest";
import { GenericList } from "../../src/08-clases-interfaces-herencia/listado-generico.ts";

describe("GenericList<T>", () => {
    it("se inicializa con los valores recibidos en orden", () => {
        const list = new GenericList<number>(2, 3, 4);
        expect(list.toArray()).toEqual([2, 3, 4]);
        expect(list.size).toBe(3);
    });

    it("sin argumentos empieza vacío", () => {
        const list = new GenericList<string>();
        expect(list.size).toBe(0);
        expect(list.toArray()).toEqual([]);
    });

    it("insertAtStart coloca el elemento en la primera posición", () => {
        const list = new GenericList<number>(2, 3);
        list.insertAtStart(1);
        expect(list.toArray()).toEqual([1, 2, 3]);
    });

    it("insertAtEnd añade al final", () => {
        const list = new GenericList<number>(1, 2);
        list.insertAtEnd(3);
        expect(list.toArray()).toEqual([1, 2, 3]);
    });

    it("insertAt inserta en la posición indicada", () => {
        const list = new GenericList<number>(1, 2, 4);
        list.insertAt(2, 3);
        expect(list.toArray()).toEqual([1, 2, 3, 4]);
    });

    it("insertAt acepta 0 y el tamaño como posiciones válidas", () => {
        const list = new GenericList<string>("b");
        list.insertAt(0, "a");
        list.insertAt(list.size, "c");
        expect(list.toArray()).toEqual(["a", "b", "c"]);
    });

    it("insertAt lanza RangeError con posiciones fuera de rango o no enteras", () => {
        const list = new GenericList<number>(1, 2);
        expect(() => list.insertAt(-1, 0)).toThrow(RangeError);
        expect(() => list.insertAt(3, 0)).toThrow(RangeError);
        expect(() => list.insertAt(1.5, 0)).toThrow(RangeError);
        expect(list.toArray()).toEqual([1, 2]);
    });

    it("toArray devuelve una copia: modificarla no altera el listado", () => {
        const list = new GenericList<number>(1, 2);
        const copy = list.toArray() as number[];
        copy.push(99);
        expect(list.toArray()).toEqual([1, 2]);
    });

    it("funciona con objetos tipados", () => {
        interface Task {
            id: number;
            title: string;
        }
        const tasks = new GenericList<Task>({ id: 1, title: "Clases" });
        tasks.insertAtEnd({ id: 2, title: "Generics" });
        expect(tasks.toArray().map((t) => t.title)).toEqual(["Clases", "Generics"]);
    });

    it("release vacía el listado y cualquier uso posterior lanza error", () => {
        const list = new GenericList<number>(1, 2, 3);
        list.release();
        expect(() => list.size).toThrow("liberado");
        expect(() => list.toArray()).toThrow("liberado");
        expect(() => list.insertAtEnd(4)).toThrow("liberado");
        expect(() => list.insertAtStart(0)).toThrow("liberado");
        expect(() => list.insertAt(0, 0)).toThrow("liberado");
    });
});

import { describe, expect, it } from "vitest";
import {
    aplicarOperacion,
    combinar,
    multiplicar,
    saludar,
    saludarA,
    setupFunciones,
    sumar,
} from "../../src/07-funciones/funciones.ts";

describe("funciones tipadas", () => {
    it("suma dos números", () => {
        expect(sumar(2, 3)).toBe(5);
    });

    it("acepta un nombre opcional al saludar", () => {
        expect(saludar("Hola")).toBe("Hola!");
        expect(saludar("Hola", "Ada")).toBe("Hola, Ada!");
    });

    it("usa el valor por defecto del parámetro", () => {
        expect(multiplicar(4)).toBe(12);
        expect(multiplicar(4, 2)).toBe(8);
    });

    it("reúne argumentos rest en una lista", () => {
        expect(saludarA("Hola", "Ada", "Grace")).toBe("Hola Ada, Grace!");
    });

    it("recibe otra función como argumento", () => {
        expect(aplicarOperacion(6, 2, (a, b) => a / b)).toBe(3);
    });

    it("aplica la sobrecarga apropiada y rechaza tipos mezclados en ejecución", () => {
        expect(combinar(2, 3)).toBe(5);
        expect(combinar("Hola", " TypeScript")).toBe("Hola TypeScript");
        // Simula una llamada desde JavaScript o desde datos no comprobados.
        expect(() => combinar(2, "3" as never)).toThrow(
            "Los dos argumentos deben ser ambos números o ambos textos",
        );
    });

    it("muestra ejemplos en el elemento recibido", () => {
        const elemento = { innerHTML: "" } as HTMLParagraphElement;

        setupFunciones(elemento);

        expect(elemento.innerHTML).toContain("Hola, Ada!");
        expect(elemento.innerHTML).toContain("aplicarOperacion con suma: 5");
    });
});

/**
 * `unknown` sirve para datos cuyo tipo todavía no conocemos, por ejemplo una
 * respuesta externa. A diferencia de `any`, obliga a comprobar el tipo antes
 * de usar operaciones específicas.
 */
export function describirValor(valor: unknown): string {
    if (typeof valor === "string") {
        // Dentro de esta rama TypeScript ya sabe que valor es string.
        return `Texto de ${valor.length} caracteres: ${valor.toUpperCase()}`;
    }

    if (typeof valor === "number") {
        return `Número: ${valor.toFixed(2)}`;
    }

    if (valor === null) {
        return "El valor es null";
    }

    if (Array.isArray(valor)) {
        return `Array con ${valor.length} elementos`;
    }

    return `Otro tipo: ${typeof valor}`;
}

export function setupUnknown(element: HTMLParagraphElement): void {
    const valores: unknown[] = ["TypeScript", 15, null, ["a", "b"]];
    element.innerHTML = valores.map(describirValor).join("<br>");
}

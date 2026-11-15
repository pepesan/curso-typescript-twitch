/** Tipo exportado para compartir el contrato entre módulos. */
export type Idioma = "es" | "en";

/** Cada archivo es un módulo; exportamos solo lo que otros archivos necesitan. */
export function crearSaludo(nombre: string, idioma: Idioma): string {
    return idioma === "es" ? `Hola, ${nombre}` : `Hello, ${nombre}`;
}

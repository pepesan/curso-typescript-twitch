// Importamos una función y un tipo desde otro archivo del curso.
import { crearSaludo, type Idioma } from "../10-modulos/saludos.ts";

export function saludosDeEjemplo(): string[] {
    const idiomas: Idioma[] = ["es", "en"];
    return idiomas.map((idioma) => crearSaludo("Ada", idioma));
}

export function setupImportaciones(element: HTMLParagraphElement): void {
    element.textContent = saludosDeEjemplo().join(" · ");
}

import { PerroRaza } from "./PerroRaza.ts";

export function setupEjercicioPerroRaza(element: HTMLParagraphElement): void {
    const primerPerro = new PerroRaza("Nyska", "Pastor alemán");
    const segundoPerro = new PerroRaza("Rocky", "Mestizo");

    console.log("Ejercicios de clases y objetos · Perro:", primerPerro, segundoPerro);

    element.innerHTML = `
        <strong>Ejercicios de clases y objetos · Perro</strong><br>
        ${primerPerro.display()}<br>
        ${segundoPerro.display()}<br>
        Getters: nombre=${primerPerro.nombre}, raza heredada=${primerPerro.raza}`;
}

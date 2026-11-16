import { AnimalRaza } from "./AnimalRaza.ts";

export function setupEjercicioAnimalRaza(element: HTMLParagraphElement): void {
    const sinArgumento = new AnimalRaza();
    const conRaza = new AnimalRaza("Labrador");

    console.log("Ejercicios de clases y objetos · Animal:", sinArgumento, conRaza);

    element.innerHTML = `
        <strong>Ejercicios de clases y objetos · Animal</strong><br>
        Sin parámetro: ${sinArgumento.display()}<br>
        Con parámetro: ${conRaza.display()}<br>
        Getter raza: ${conRaza.raza}`;
}

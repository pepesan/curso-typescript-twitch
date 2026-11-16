import { AnimalRaza } from "./AnimalRaza.ts";

export class PerroRaza extends AnimalRaza {
    private _nombre: string;

    constructor(nombre: string, raza: string) {
        super(raza);
        this._nombre = nombre;
    }

    get nombre(): string {
        return this._nombre;
    }

    set nombre(nombre: string) {
        this._nombre = nombre;
    }

    override display(): string {
        return `Perro[nombre: ${this._nombre}, raza: ${this.raza}]`;
    }
}

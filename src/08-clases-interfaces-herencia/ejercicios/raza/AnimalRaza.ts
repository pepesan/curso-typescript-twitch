export class AnimalRaza {
    private _raza: string;

    constructor(raza: string = "Sin especificar") {
        this._raza = raza;
    }

    get raza(): string {
        return this._raza;
    }

    set raza(raza: string) {
        this._raza = raza;
    }

    display(): string {
        return `Animal[raza: ${this._raza}]`;
    }
}

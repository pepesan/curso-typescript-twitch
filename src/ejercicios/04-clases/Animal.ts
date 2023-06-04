export class Animal{

    private _edad: number;

    constructor(edad: number = 1) {
        this._edad = edad;
    }

    public get edad(): number{
        return this._edad;
    }

    public set edad(edad: number) {
        if (edad==0){
            throw new Error('The age is invalid');
        }
        this._edad = edad;
    }
}

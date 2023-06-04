export class Animal{

    private _age: number;

    constructor(age: number) {
        this._age = age;
    }

    public get age (){
        return this._age;
    }

    public set age (age: number){
        if (age == 0){
            throw new Error('The age is invalid');
        }
        this._age= age;
    }

}

export function setupClases(element: HTMLParagraphElement){

    // uso de interfaces básicas
    // definición del interfaz
    interface KeyPair {
        key: number;
        value: string;
    }
    // uso del Interfaz
    let kv1: KeyPair = { key:1, value:"David" };

    // definición de una clase
    class Employee {
        empCode: number; // Integer ampCode
        empName: string; // String empName

        constructor(code: number = 0, name: string = "") {
            this.empName = name;
            this.empCode = code;
        }
    }
    // instanciación del objeto constructor sin parametros
    let empleado = new Employee(); // Employee empleado = new Employee();
    empleado.empCode = 27;
    empleado.empName = "David"

    // instanciación del objeto constructor con parametros
    let empleado2 = new Employee(27, "David");
    empleado2 = new Employee(27);
    empleado2.empName = "David";

    // definición de getter y setters
    class Person {
        // atributo privado
        private _age: number;
        // atributo protegido
        protected _firstName: string;
        // atributo de sólo lectura privado
        private readonly _lastName: string;

        // función constructora
        constructor(age: number = 0, firstName: string = "", lastName: string = "") {
            this._age = age;
            this._firstName = firstName;
            this._lastName = lastName;
        }

        // getter de age
        public get age() {
            return this._age;
        }

        // setter de age
        public set age(theAge: number) {
            this._age = theAge;
        }


        // getter de _firstname
        public get firstName(): string {
            return this._firstName;
        }

        // getter de _firstname personalizado
        public set firstName(value: string) {
            if (value==""){
                throw new Error('The firtName is invalid');
            }
            this._firstName = value;
        }

        // getter de _lastName
        public get lastName(): string {
            return this._lastName;
        }

        // getter de varios valores
        public getFullName(): string {
            return `${this._firstName} ${this._lastName}`;
        }
    }

    let person: Person = new Person(44, "David", "Vaquero")
    // usando los setters
    person.age = 45
    console.log(person.age)
    person.firstName = "Davicin"
    console.log(person.firstName)


    class Person2{
        // atributo privado
        private _age: number;
        // atributo protegido
        protected _firstName: string;
        // atributo de sólo lectura privado
        private readonly _lastName: string;

        // función constructora
        constructor(age: number = 0, firstName: string = "", lastName: string = "") {
            this._age = age;
            this._firstName = firstName;
            this._lastName = lastName;
        }

        // getter de age
        public getAge() {
            return this._age;
        }

        // setter de age
        public setAge(theAge: number) {
            this._age = theAge;
        }


        // getter de _firstname
        public getFirstName(): string {
            return this._firstName;
        }

        // getter de _firstname personalizado
        public setFirstName(value: string) {
            if (value==""){
                throw new Error('The firtName is invalid');
            }
            this._firstName = value;
        }

        // getter de _lastName
        public getLastName(): string {
            return this._lastName;
        }

        // getter de varios valores
        public getFullName(): string {
            return `${this._firstName} ${this._lastName}`;
        }
    }

    let person2: Person2 = new Person2(44, "David", "Vaquero")
    // usando los setters
    person2.setAge(45);
    person2.setFirstName("Davicin");
    console.log(person2.getFullName());

    // uso de toString
    class Cuadrado{
        private _lado: number;

        constructor(lado: number = 0) {
            this._lado = lado;
        }


        get lado(): number {
            return this._lado;
        }

        set lado(value: number) {
            this._lado = value;
        }

        // método getter con cálculo específico
        public get area(){
            return Math.pow(this._lado,2);
        }

        // método toString
        public toString(): string{
            return `Cuadrado[lado: ${this._lado}]`
        }

    }

    let cuadrado: Cuadrado = new Cuadrado(2);
    console.log(cuadrado);
    console.log(cuadrado.toString());
    // uso de Herencia
    // clase Madre
    class Persona {
        // atributos privados
        private _age: number;
        private _firstName: string;
        // atributo de sólo lectura
        private _lastName: string;

        // función constructora
        constructor(age: number = 0, firstName: string = "", lastName: string = "") {
            this._age = age;
            this._firstName = firstName;
            this._lastName = lastName;
        }

        // getter de age
        public get age() {
            return this._age;
        }

        // setter de age
        public set age(theAge: number) {
            this._age = theAge;
        }


        // getter de _firstname
        public get firstName(): string {
            return this._firstName;
        }

        // getter de _firstname personalizado
        public set firstName(value: string) {
            if (value==""){
                throw new Error('The age is invalid');
            }
            this._firstName = value;
        }

        // getter de _lastName
        public get lastName(): string {
            return this._lastName;
        }


        set lastName(value: string) {
            this._lastName = value;
        }

        // getter de varios valores
        public getFullName(): string {
            return `${this._firstName} ${this._lastName}`;
        }

        public toString(): string{
            return `Persona[age: ${this._age}, firstName: ${this._firstName}, lastName: ${this._lastName}]`
        }
    }
    // Clase hija
    class Empleado extends Persona{
        // nuevo atributo
        private _cargo: string;

        // uso de constructora con herencia
        constructor(age: number = 0, firstName: string = "", lastName: string = "", cargo: string ="") {
            super(age, firstName, lastName);
            this._cargo = cargo;
        }


        // getter específico
        get cargo(): string {
            return this._cargo;
        }

        // setter específico
        set cargo(value: string) {
            this._cargo = value;
        }

        get puestoNombre(): string{
            return `${this.getFullName()}: ${this._cargo}`
        }

        public toString(): string{
            return `Empleado[
            age: ${this.age}, 
            firstName: ${this.firstName}, 
            lastName : ${this.lastName}
            cargo: ${this._cargo} 
            ]`
        }
    }
    let empleado3: Empleado = new Empleado(44, "David", "Vaquero", "Formador");
    console.log(empleado3);

    // uso de interfaces con clases
    // definición del interfaz que define métodos
    interface Imprime{
        dameString(): string;
    }
    // clase que implementa el interfaz
    class Animalico implements Imprime{
        // implementación del método
        public dameString():string{
            return "Algo";
        }
    }

    let animalico: Animalico = new Animalico();
    console.log(animalico.dameString());

    interface OtroInterfaz{
        dameOtraString(): string;
    }

    class AnimalicoMultiple implements Imprime, OtroInterfaz{
        public dameString():string{
            return "Algo";
        }

        public dameOtraString(): string{
            return "otra String";
        }
    }

    let animalicomultiple: AnimalicoMultiple = new AnimalicoMultiple();
    console.log(animalicomultiple.dameString());
    console.log(animalicomultiple.dameOtraString());

    // incluidos ejemplos de interfaces con datos
    interface Datos{
        nombre: string;
        edad: number;
    }


    let misDatos: Datos = {
        nombre: "David",
        edad: 45
    }


    // Datos estáticos
    class Estaticos{
        // define un atributo estático
        public static valor: number = 0;

        // define una función estática
        public static sumaValores(num1: number, num2: number): number{
            return num1 + num2;
        }
    }

    // llamada a atributo estático
    Estaticos.valor++;
    // llamada a método estático
    console.log(Estaticos.sumaValores(2,3));

    // Clases Abstractas
    // Definición clase abstracta
    abstract class Base {
        abstract getName(): string;
    }

    // no puedo crear objetos de una clase abstracta
    // let base: Base = new Base();

    // definición de clase que hereda de abstracta
    class Derived extends Base {
        getName() {
            return "world";
        }

    }

    const d: Derived = new Derived();

    class KeyValuePair<T = number, U = string>
    {
        private key: T | undefined;
        private val: U | undefined;
        constructor(key?: T, val?: U) {
            this.key = key;
            this.val = val;
        }
        setKeyValue(key: T , val: U ): void {
            this.key = key;
            this.val = val;
        }
        display():void {
            console.log(`Key = ${this.key}, val = ${this.val}`);
        }
    }

    let kvp1 = new KeyValuePair<number, string>();
    kvp1.setKeyValue(1, "Steve");
    kvp1.display(); //Output: Key = 1, Val = Steve

    element.innerHTML=`
        empleado: ${empleado.empCode} , ${empleado.empName} : 
        Interface KeyPair: ${kv1.key}, ${kv1.value} :
        empleado2: ${empleado2.empCode} , ${empleado2.empName} : 
        usando los getters : 
        person: ${person.age} ,${person.firstName}, ${person.lastName}, ${person.getFullName()} :
        uso de toString y area:
        Cuadrado: ${cuadrado.lado}, ${cuadrado.toString()} , area: ${cuadrado.area}  :
        Herencia:
        ${empleado3.toString()} , getfullname ${empleado3.getFullName()} , cargoname ${empleado3.puestoNombre} :
        Uso de Interfaces:
        Animalico: ${animalico.dameString()} :
        AnimalicoMultiple: ${animalicomultiple.dameOtraString()}:
        misDatos: ${misDatos.edad} , ${misDatos.nombre}
        Atributos estáticos:
        Estaticos: ${Estaticos.valor} :
        Clases Abstractas:
        Abstracta: ${d.getName()} :
    `;
}

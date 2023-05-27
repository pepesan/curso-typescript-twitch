export function setupFunciones(element: HTMLParagraphElement){

    // procedimiento
    // función que no devuelve nada
    function hazAlgo():void{
        console.log("Algo");
    }
    //llamada a procedimiento
    hazAlgo();

    // paso de parámetro a función
    function imprimeAlgo(mensaje: string):void{
        console.log(mensaje);
    }
    // invocación del procedimiento
    imprimeAlgo("Algo más");

    // funciones que devuelven algo
    function suma(a:number, b: number): number{
        return a+b;
    }

    let salidaSuma:number = suma(2,3);

    // Funciones con parámetros opcionales
    function Greet(greeting: string, name?: string ) : string {

        if (name == undefined){
            name = "";
        }

        return greeting + ' ' + name + '!';
    }

    // llamada a función
    let salidaGreet: string = Greet("Hola", "David");

    // parámetros por defecto
    function multiplica(num: number, multi: number = 3): number{
        return num*multi;
    }

    let salidaMultiplica:number  = multiplica(2,3);
    salidaMultiplica  = multiplica(2); // multi = 3

    // múltiples parámetros indefinidos en número
    function Greet3(greeting: string, ...names: string[]) {
        return greeting + " " + names.join(", ") + "!";
    }

    let salidaGreet3: string = Greet3("Hola"); // "Hola !"
    salidaGreet3 = Greet3("Hola", "David") // "Hola David!"
    salidaGreet3 = Greet3("Hola", "David", "ViciosTV", "Vamoacodear")// "Hola David, ViciosTV, Vamoacodear!"

    // Arrow Functions

    let sum = (x: number, y: number): number => {
        return x + y;
    };

    let salidaSum = sum(2,3);

    // Arrow Function de un una sola sentencia
    let Print = () => console.log("Hola TypeScript");

    Print();

    // Sobre carga de funciones
    // definimos las funciones
    function add(a:string, b:string):string;
    function add(a:number, b:number): number;
    // implementamos la función
    function add(a: any, b:any): any {
        return a + b;
    }

    let salidaAdd: any = add(2,3);
    salidaAdd = add("hola", " mundo")


    element.innerHTML=`
    suma(2,3) = ${salidaSuma}, salidaGreet: ${salidaGreet}  multiplica(2,3): ${salidaMultiplica}
    Greet3("Hola", "David", "ViciosTV", "Vamoacodear"): ${salidaGreet3} sum(2,3): ${salidaSum} 
    add("hola", "mundo") ${salidaAdd}
    `
}

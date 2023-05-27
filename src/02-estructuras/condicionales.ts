export function setupCondicionales(element: HTMLParagraphElement){
    // declaración de variables
    const hora: number = 5;
    let mensajeHora: string;
    // sentencia if
    if(hora >= 0 && hora<=12){
        // se cumple la condición marcada
        mensajeHora ="Es un numero valido para una hora de mañana"
    }
    // if esle
    if(hora >= 0 && hora<=12){
        // se cumple la condición marcada
        mensajeHora ="Es un numero valido para una hora de mañana"
    }else{
        // bloque de ejecución del else
        mensajeHora ="Es un numero valido para una hora de tarde"
    }

    // if esle if else
    if(hora >= 0 && hora<=12){
        mensajeHora ="Es un numero valido para una hora de mañana"
    }else if(hora >= 13 && hora<=23){
        mensajeHora ="Es un numero valido para una hora de tarde"
    }else{
        mensajeHora = "No es un numero valido para un hora"
    }

    // Sentencia condicional múltiple
    // Switch
    // declarar la variables
    const dia: number = 4;
    let mensajeDia: string;
    // Hacer uso de un switch
    // Comprobar el valor de una variable
    switch(dia){
        // caso dia == 1
        case 1:
            mensajeDia="Lunes";
            break;
        // caso dia == 2
        case 2:
            mensajeDia="Martes";
            break;
        // caso dia == 3
        case 3:
            mensajeDia="Miercoles";
            break;

        // caso dia == 4
        case 4:
            mensajeDia="Jueves";
            break;
        // caso dia == 5
            case 5:
            mensajeDia="Viernes";
            break;

        // caso dia == 6
        case 6:
            mensajeDia="Sabado";
            break;
        // caso dia == 7
        case 7:
            mensajeDia="Domingo";
            break;
        // caso dia != a lo anterior
        default:
            mensajeDia="No es un numero valido para un dia";
    }

    // imprimir por pantalla en el elemento parrafo un texto
    element.innerHTML=`
    Condicionales: ${hora} ${mensajeHora} ${dia} ${mensajeDia}
    `
}

export function setupCondicionales(element: HTMLParagraphElement){
    const hora: number = 5;
    let mensajeHora: string;
    if(hora >= 0 && hora<=12){
        mensajeHora ="Es un numero valido para una hora de mañana"
    }else if(hora >= 13 && hora<=23){
        mensajeHora ="Es un numero valido para una hora de tarde"
    } else{
        mensajeHora = "No es un numero valido para un hora"
    }

    const dia: number = 4;
    let mensajeDia: string;
    switch(dia){
        case 1:
            mensajeDia="Lunes";
            break;
        case 2:
            mensajeDia="Martes";
            break;
        case 3:
            mensajeDia="Miercoles";
            break;
        case 4:
            mensajeDia="Jueves";
            break;
        case 5:
            mensajeDia="Viernes";
            break;
        case 6:
            mensajeDia="Sabado";
            break;
        case 7:
            mensajeDia="Domingo";
            break;
        default:
            mensajeDia="No es un numero valido para un dia";
    }

    // imprimir por pantalla en el elemento parrafo un texto
    element.innerHTML=`
    Condicionales: ${hora} ${mensajeHora} ${dia} ${mensajeDia}
    `
}

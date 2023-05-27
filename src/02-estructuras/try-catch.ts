export function setupTryCatch(element: HTMLParagraphElement){
    let salida: string;
    try {
        // Intenta acceder al localStorage y realizar alguna operación
        localStorage.setItem("clave", "valor");
        const valor = localStorage.getItem("clave");
        salida =`Valor almacenado en localStorage: ${valor}`;
    } catch (error) {
        // Captura cualquier error ocurrido y muestra un mensaje de error
        salida =`Error al utilizar localStorage: ${error}`;
    }

    // imprimir por pantalla en el elemento parrafo un texto
    element.innerHTML=`
    Try Catch: ${salida}
    `
}

export function setupTuplas(element: HTMLParagraphElement){
    let miTupla: [string, string] = ["Hola", "Mundo"];
    // en las tuplas no se pueden cambiar los valores
    let miTuplaMixta: [number, string] = [3, "Mundo"];

    element.innerHTML=`
        miTupla [${miTupla}], 
        miTupla[0] ${miTupla[0]}, 
        miTuplaMixta [${miTuplaMixta}], 
        miTuplaMixta[0] ${miTuplaMixta[0]}`;
}

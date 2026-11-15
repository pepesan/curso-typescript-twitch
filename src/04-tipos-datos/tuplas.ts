export function setupTuplas(element: HTMLParagraphElement){
    // Una tupla fija los tipos y el orden de sus posiciones, pero sigue siendo mutable.
    let miTupla: [string, string] = ["Hola", "Mundo"];
    let miTuplaMixta: [number, string] = [3, "Mundo"];
    miTupla[0] = "Buenas";

    // readonly sí impide asignar a una posición de la tupla.
    const coordenada: readonly [number, number] = [40.4, -3.7];

    element.innerHTML=`
        miTupla [${miTupla}], 
        miTupla[0] ${miTupla[0]} (la tupla se puede modificar),
        miTuplaMixta [${miTuplaMixta}], 
        miTuplaMixta[0] ${miTuplaMixta[0]},
        coordenada readonly [${coordenada}]`;
}

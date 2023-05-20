export function setupAny(element: HTMLParagraphElement){
    let arrayIndefinido: any[] = ["Altaskur", 212, true];
    arrayIndefinido.push("ViciosTV");

    element.innerHTML=`
        arrayIndefinido ${arrayIndefinido}, 
        arrayIndefinido[0] ${arrayIndefinido[0]}, 
        arrayIndefinido[3] ${arrayIndefinido[3]}
    `;
}

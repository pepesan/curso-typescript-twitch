export function setupAny(element: HTMLParagraphElement){
    // `any` permite mezclar tipos, pero también elimina las comprobaciones.
    // Usa `unknown` cuando recibas un valor externo y aún no conozcas su tipo.
    let arrayIndefinido: any[] = ["Altaskur", 212, true];
    arrayIndefinido.push("ViciosTV");

    element.innerHTML=`
        arrayIndefinido ${arrayIndefinido}, 
        arrayIndefinido[0] ${arrayIndefinido[0]}, 
        arrayIndefinido[3] ${arrayIndefinido[3]}
    `;
}

export function setupVoid(element: HTMLParagraphElement): void{

    // tipo void
    // muy usado en funciones
    let laNada: void = undefined;
    // Never
    // never se usa principalmente para definir que una función no devuelve nunca nada


    // laNada = 2; // no puiede contener valor
    element.innerHTML=`
        laNada ${laNada}
    `;
}

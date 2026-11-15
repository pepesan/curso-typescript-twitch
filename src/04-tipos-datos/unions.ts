export function setupUnions(element: HTMLParagraphElement){
    // La unión admite cualquiera de estos dos tipos, pero no valores ajenos a ellos.
    let codigo: (string | number);
    codigo = 123;   // OK
    codigo = "ABC"; // OK
    // codigo = false; // Compiler Error

    element.innerHTML=`codigo ${codigo}`;
}

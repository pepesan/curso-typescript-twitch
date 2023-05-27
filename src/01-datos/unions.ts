export function setupUnions(element: HTMLParagraphElement){
    let codigo: (string | number);
    codigo = 123;   // OK
    codigo = "ABC"; // OK
    // codigo = false; // Compiler Error

    element.innerHTML=`codigo ${codigo}`;
}

export function setupEnums(element: HTMLParagraphElement){
    // Los enums numéricos generan valores numéricos en ejecución.
    enum Color{
        Verde=0, Rojo=1, Azul=2
    }
    const color: Color= Color.Azul

    // Para estados pequeños también es común usar una unión de literales,
    // que evita crear un enum en ejecución.
    type ColorTexto = "verde" | "rojo" | "azul";
    const colorTexto: ColorTexto = "azul";

    element.innerHTML=`enum numérico: ${color}; unión literal: ${colorTexto}`;
}

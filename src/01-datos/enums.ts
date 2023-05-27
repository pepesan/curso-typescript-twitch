export function setupEnums(element: HTMLParagraphElement){
    enum Color{
        Verde=0, Rojo=1, Azul=2
    }
    let color: Color= Color.Azul

    element.innerHTML=`color ${color}`;
}

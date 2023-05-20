export function setupArrays(element: HTMLParagraphElement){
    let miArray: number[] = [1, 12, 93, 5];
    miArray[0]  = 0;
    let cadenas: string[] = ["a", "apricot", "mango"];
    element.innerHTML=`miArray [${miArray}], miArray[0] ${miArray[0]} lenght ${miArray.length}`;
    element.innerHTML+=`: cadenas [${cadenas}], cadenas[0] ${cadenas[0]} lenght ${cadenas.length}`;
}

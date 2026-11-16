/** Soluciones prácticas independientes del ejemplo introductorio de variables. */
export function setupEjerciciosVariables(element: HTMLParagraphElement): void {
    const valorNulo: null = null;
    const esValido: boolean = true;
    const temperatura: number = 21;
    const saludo: string = "Hola desde TypeScript";

    const primerNumero: number = 12;
    const segundoNumero: number = 30;
    const tercerNumero: number = 8;
    const suma = primerNumero + segundoNumero;

    var variableConVar = "var";
    let variableConLet = "valor inicial";
    const constanteConConst = "const";
    variableConLet = "valor actualizado";

    element.innerHTML = `
        <strong>Ejercicios de Variables</strong><br>
        Tipos: null=${valorNulo}, boolean=${esValido}, number=${temperatura}, string="${saludo}".<br>
        Tres valores number: ${primerNumero}, ${segundoNumero}, ${tercerNumero}.<br>
        Suma de los dos primeros: ${primerNumero} + ${segundoNumero} = ${suma}.<br>
        Declaraciones: var=${variableConVar}, let=${variableConLet}, const=${constanteConConst}.`;
}

import assert from "node:assert/strict";
import { Given, Then, When } from "@cucumber/cucumber";
import { saludar } from "../../../src/07-funciones/funciones.ts";

let saludoBase: string;
let nombre: string;
let resultado: string;

Given("que preparo un saludo {string}", (saludo: string) => {
    saludoBase = saludo;
});

When("lo dirijo a {string}", (persona: string) => {
    nombre = persona;
    resultado = saludar(saludoBase, nombre);
});

Then("el resultado es {string}", (esperado: string) => {
    assert.equal(resultado, esperado);
});

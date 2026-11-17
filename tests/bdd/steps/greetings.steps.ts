import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "chai";
import { saludar } from "../../../src/07-funciones/funciones.ts";

let baseGreeting: string;
let name: string;
let result: string;

Given("I prepare a greeting {string}", (greeting: string) => {
    baseGreeting = greeting;
});

When("I direct it to {string}", (person: string) => {
    name = person;
    result = saludar(baseGreeting, name);
});

Then("the result is {string}", (expected: string) => {
    expect(result).to.equal(expected);
});

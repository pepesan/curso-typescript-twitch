import { Given, Then, When } from "@cucumber/cucumber";
import { assert } from "chai";
import { saludar } from "../../../src/07-funciones/funciones.ts";

let baseGreeting: string;
let message: string;

Given("I prepare a plain greeting {string}", (greeting: string) => {
    baseGreeting = greeting;
});

When("I greet without a name", () => {
    message = saludar(baseGreeting);
});

Then("the message is {string}", (expected: string) => {
    assert.strictEqual(message, expected);
});

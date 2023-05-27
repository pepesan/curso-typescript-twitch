import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { setupVars } from "./01-datos/tipos.ts";
import {setupArrays} from "./01-datos/arrays.ts";
import {setupCadenas} from "./01-datos/cadenas.ts";
import {setupTuplas} from "./01-datos/tuplas.ts";
import {setupEnums} from "./01-datos/enums.ts";
import {setupUnions} from "./01-datos/unions.ts";
import {setupAny} from "./01-datos/any.ts";
import {setupVoid} from "./01-datos/void.ts";
import {setupCondicionales} from "./02-estructuras/condicionales.ts";
import {setupBucles} from "./02-estructuras/bucles.ts";
import {setupTryCatch} from "./02-estructuras/try-catch.ts";
import {setupFunciones} from "./03-funciones/funciones.ts";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <h2>Variables y tipos</h2>
    <p id="variables" class="read-the-docs">
    </p>
    <p id="arrays" class="read-the-docs">
    </p>
    <p id="cadenas" class="read-the-docs">
    </p>
    <p id="tuplas" class="read-the-docs">
    </p>
    <p id="enums" class="read-the-docs">
    </p>
    <p id="unions" class="read-the-docs">
    </p>
    <p id="anys" class="read-the-docs">
    </p>
    <p id="voids" class="read-the-docs">
    </p>
    <h2>Estructuras de Control</h2>
    <p id="condicionales" class="read-the-docs">
    </p>
    <p id="bucles" class="read-the-docs">
    </p>
    <p id="trycatch" class="read-the-docs">
    </p>
    <h2>Funciones</h2>
    <p id="funciones" class="read-the-docs">
    </p>
  </div>
`

// Manejo de datos
setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
setupVars(document.querySelector<HTMLParagraphElement>('#variables')!)
setupArrays(document.querySelector<HTMLParagraphElement>('#arrays')!)
setupCadenas(document.querySelector<HTMLParagraphElement>('#cadenas')!)
setupTuplas(document.querySelector<HTMLParagraphElement>('#tuplas')!)
setupEnums(document.querySelector<HTMLParagraphElement>('#enums')!)
setupUnions(document.querySelector<HTMLParagraphElement>('#unions')!)
setupAny(document.querySelector<HTMLParagraphElement>('#anys')!)
setupVoid(document.querySelector<HTMLParagraphElement>('#voids')!)
// estructuras de control
setupCondicionales(document.querySelector<HTMLParagraphElement>('#condicionales')!)
setupBucles(document.querySelector<HTMLParagraphElement>('#bucles')!)
setupTryCatch(document.querySelector<HTMLParagraphElement>('#trycatch')!)
// funciones
setupFunciones(document.querySelector<HTMLParagraphElement>('#funciones')!)

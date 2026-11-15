import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { setupVars } from "./05-variables/tipos.ts";
import {setupArrays} from "./04-tipos-datos/arrays.ts";
import {setupCadenas} from "./04-tipos-datos/cadenas.ts";
import {setupTuplas} from "./04-tipos-datos/tuplas.ts";
import {setupEnums} from "./04-tipos-datos/enums.ts";
import {setupUnions} from "./04-tipos-datos/unions.ts";
import {setupAny} from "./04-tipos-datos/any.ts";
import {setupVoid} from "./04-tipos-datos/void.ts";
import {setupUnknown} from "./04-tipos-datos/unknown.ts";
import {setupEstrechamiento} from "./04-tipos-datos/estrechamiento.ts";
import {setupCondicionales} from "./06-estructuras-control/condicionales.ts";
import {setupBucles} from "./06-estructuras-control/bucles.ts";
import {setupTryCatch} from "./06-estructuras-control/try-catch.ts";
import {setupFunciones} from "./07-funciones/funciones.ts";
import {setupClases} from "./08-clases-interfaces-herencia/clases.ts";
import {setupObjetos} from "./08-clases-interfaces-herencia/objetos.ts";
import {setupRequisitos} from "./08-clases-interfaces-herencia/requisitos.ts";
import {setupEjercicioClases} from "./08-clases-interfaces-herencia/ejercicios/ejercicio01.ts";
import {setupEjercicio02Clases} from "./08-clases-interfaces-herencia/ejercicios/ejercicio02.ts";
import {setupEjercicio03Clases} from "./08-clases-interfaces-herencia/ejercicios/ejercicio03.ts";
import {setupGenerics} from "./09-generics/generics.ts";
import {setupImportaciones} from "./11-importaciones-exportaciones/ejemplo.ts";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Curso práctico de TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <h2>04. Tipos de datos</h2>
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
    <p id="unknown" class="read-the-docs"></p>
    <p id="estrechamiento" class="read-the-docs"></p>
    <h2>05. Variables</h2>
    <p id="variables" class="read-the-docs"></p>
    <h2>06. Estructuras de control</h2>
    <p id="condicionales" class="read-the-docs">
    </p>
    <p id="bucles" class="read-the-docs">
    </p>
    <p id="trycatch" class="read-the-docs">
    </p>
    <h2>07. Funciones</h2>
    <p id="funciones" class="read-the-docs">
    </p>
    <h2>08. Objetos, clases, interfaces y herencia</h2>
    <p id="objetos" class="read-the-docs"></p>
    <p id="requisitos" class="read-the-docs"></p>
    <p id="clases" class="read-the-docs">
    </p>
    <h2>Ejercicios de clases</h2>
    <p id="ejercicio-clases" class="read-the-docs"></p>
    <p id="ejercicio-clases-02" class="read-the-docs"></p>
    <p id="ejercicio-clases-03" class="read-the-docs"></p>
    <h2>09. Generics</h2>
    <p id="generics" class="read-the-docs">
    </p>
    <h2>10 y 11. Módulos, importaciones y exportaciones</h2>
    <p id="importaciones" class="read-the-docs"></p>
    <h2>12. Testing</h2>
    <p class="read-the-docs">Pruebas unitarias: <code>npm run test:unit</code>. Escenarios BDD con Cucumber.js: <code>npm run test:bdd</code>. Cobertura: <code>npm run test:coverage</code>.</p>
    
  </div>
`

// Cada sección usa una función setup para escribir su ejemplo en el párrafo.
setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
setupArrays(document.querySelector<HTMLParagraphElement>('#arrays')!)
setupCadenas(document.querySelector<HTMLParagraphElement>('#cadenas')!)
setupTuplas(document.querySelector<HTMLParagraphElement>('#tuplas')!)
setupEnums(document.querySelector<HTMLParagraphElement>('#enums')!)
setupUnions(document.querySelector<HTMLParagraphElement>('#unions')!)
setupAny(document.querySelector<HTMLParagraphElement>('#anys')!)
setupVoid(document.querySelector<HTMLParagraphElement>('#voids')!)
setupUnknown(document.querySelector<HTMLParagraphElement>('#unknown')!)
setupEstrechamiento(document.querySelector<HTMLParagraphElement>('#estrechamiento')!)
setupVars(document.querySelector<HTMLParagraphElement>('#variables')!)
// estructuras de control
setupCondicionales(document.querySelector<HTMLParagraphElement>('#condicionales')!)
setupBucles(document.querySelector<HTMLParagraphElement>('#bucles')!)
setupTryCatch(document.querySelector<HTMLParagraphElement>('#trycatch')!)
// funciones
setupFunciones(document.querySelector<HTMLParagraphElement>('#funciones')!)
// objetos, clases e interfaces
setupClases(document.querySelector<HTMLParagraphElement>('#clases')!)
setupObjetos(document.querySelector<HTMLParagraphElement>('#objetos')!)
setupRequisitos(document.querySelector<HTMLParagraphElement>('#requisitos')!)
setupEjercicioClases(document.querySelector<HTMLParagraphElement>('#ejercicio-clases')!)
setupEjercicio02Clases(document.querySelector<HTMLParagraphElement>('#ejercicio-clases-02')!)
setupEjercicio03Clases(document.querySelector<HTMLParagraphElement>('#ejercicio-clases-03')!)
setupGenerics(document.querySelector<HTMLParagraphElement>('#generics')!)
setupImportaciones(document.querySelector<HTMLParagraphElement>('#importaciones')!)

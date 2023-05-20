import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { setupVars } from "./tipos.ts";
import {setupArrays} from "./arrays.ts";
import {setupCadenas} from "./cadenas.ts";

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
    <p id="variables" class="read-the-docs">
    </p>
    <p id="arrays" class="read-the-docs">
    </p>
    <p id="cadenas" class="read-the-docs">
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
setupVars(document.querySelector<HTMLParagraphElement>('#variables')!)
setupArrays(document.querySelector<HTMLParagraphElement>('#arrays')!)
setupCadenas(document.querySelector<HTMLParagraphElement>('#cadenas')!)

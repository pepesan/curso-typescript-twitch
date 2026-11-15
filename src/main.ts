import "./styles/main.scss";
import { setupArrays } from "./04-tipos-datos/arrays.ts";
import { setupCadenas } from "./04-tipos-datos/cadenas.ts";
import { setupTuplas } from "./04-tipos-datos/tuplas.ts";
import { setupEnums } from "./04-tipos-datos/enums.ts";
import { setupUnions } from "./04-tipos-datos/unions.ts";
import { setupAny } from "./04-tipos-datos/any.ts";
import { setupVoid } from "./04-tipos-datos/void.ts";
import { setupUnknown } from "./04-tipos-datos/unknown.ts";
import { setupEstrechamiento } from "./04-tipos-datos/estrechamiento.ts";
import { setupVars } from "./05-variables/tipos.ts";
import { setupCondicionales } from "./06-estructuras-control/condicionales.ts";
import { setupBucles } from "./06-estructuras-control/bucles.ts";
import { setupTryCatch } from "./06-estructuras-control/try-catch.ts";
import { setupFunciones } from "./07-funciones/funciones.ts";
import { setupClases } from "./08-clases-interfaces-herencia/clases.ts";
import { setupObjetos } from "./08-clases-interfaces-herencia/objetos.ts";
import { setupRequisitos } from "./08-clases-interfaces-herencia/requisitos.ts";
import { setupEjercicioClases } from "./08-clases-interfaces-herencia/ejercicios/ejercicio01.ts";
import { setupEjercicio02Clases } from "./08-clases-interfaces-herencia/ejercicios/ejercicio02.ts";
import { setupEjercicio03Clases } from "./08-clases-interfaces-herencia/ejercicios/ejercicio03.ts";
import { setupGenerics } from "./09-generics/generics.ts";
import { setupImportaciones } from "./11-importaciones-exportaciones/ejemplo.ts";
import { setupTheme } from "./ui/theme.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="app-shell">
    <header class="topbar">
      <a class="brand" href="#inicio" aria-label="Cursos de Desarrollo, inicio">
        <img src="/brand/cursos-de-desarrollo.svg" alt="Cursos de Desarrollo" />
        <span class="brand-divider" aria-hidden="true"></span>
        <span class="brand-course">TypeScript</span>
      </a>
      <button class="theme-toggle" id="theme-toggle" type="button" aria-label="Cambiar tema">
        <span class="theme-toggle-icon" aria-hidden="true">☾</span>
        <span class="theme-toggle-label">Tema</span>
      </button>
    </header>

    <div class="course-layout">
      <aside class="unit-sidebar" aria-label="Navegación del curso">
        <div class="sidebar-heading">
          <p class="eyebrow">CURSO · 15 HORAS</p>
          <h2>Contenido</h2>
        </div>
        <nav aria-label="Unidades">
          <ol class="unit-list">
            <li><a href="#unidad-01"><span>01</span> Introducción</a></li>
            <li><a href="#unidad-02"><span>02</span> Entorno de desarrollo</a></li>
            <li><a href="#unidad-03"><span>03</span> Compilación</a></li>
            <li><a href="#unidad-04"><span>04</span> Tipos de datos</a></li>
            <li><a href="#unidad-05"><span>05</span> Variables</a></li>
            <li><a href="#unidad-06"><span>06</span> Estructuras de control</a></li>
            <li><a href="#unidad-07"><span>07</span> Funciones</a></li>
            <li><a href="#unidad-08"><span>08</span> Objetos y clases</a></li>
            <li><a href="#unidad-09"><span>09</span> Generics</a></li>
            <li><a href="#unidad-10"><span>10</span> Módulos</a></li>
            <li><a href="#unidad-11"><span>11</span> Importar y exportar</a></li>
            <li><a href="#unidad-12"><span>12</span> Testing</a></li>
          </ol>
        </nav>
      </aside>

      <main class="lesson-main" id="inicio">
        <section class="welcome-panel">
          <p class="eyebrow">RUTA DE APRENDIZAJE</p>
          <h1>Aprende TypeScript<br /><span>paso a paso</span></h1>
          <p>Un recorrido práctico desde los tipos básicos hasta las pruebas automatizadas.</p>
          <div class="welcome-meta"><span>12 unidades</span><span aria-hidden="true">·</span><span>15 horas</span><span aria-hidden="true">·</span><span>Ejemplos prácticos</span></div>
        </section>

        <section class="lesson-section" id="unidad-01">
          <div class="section-heading"><span class="unit-number">01</span><div><p class="eyebrow">UNIDAD 01</p><h2>Introducción</h2></div></div>
          <p class="section-intro">TypeScript añade un sistema de tipos estático a JavaScript. En esta unidad conocerás el propósito del lenguaje y cómo acompaña al código JavaScript que ya conoces.</p>
        </section>
        <section class="lesson-section" id="unidad-02">
          <div class="section-heading"><span class="unit-number">02</span><div><p class="eyebrow">UNIDAD 02</p><h2>Entorno de desarrollo</h2></div></div>
          <p class="section-intro">El curso usa Node.js, npm y Vite. Ejecuta <code>npm install</code> y después <code>npm run dev</code> para abrir la aplicación.</p>
        </section>
        <section class="lesson-section" id="unidad-03">
          <div class="section-heading"><span class="unit-number">03</span><div><p class="eyebrow">UNIDAD 03</p><h2>Compilación a JavaScript</h2></div></div>
          <p class="section-intro">TypeScript comprueba tipos y se transforma para ejecutarse como JavaScript. <code>npm run build</code> genera la aplicación de producción en <code>dist/</code>.</p>
        </section>
        <section class="lesson-section" id="unidad-04">
          <div class="section-heading"><span class="unit-number">04</span><div><p class="eyebrow">UNIDAD 04</p><h2>Tipos de datos</h2></div></div>
          <div class="example-output" id="arrays"></div><div class="example-output" id="cadenas"></div>
          <div class="example-output" id="tuplas"></div><div class="example-output" id="enums"></div>
          <div class="example-output" id="unions"></div><div class="example-output" id="anys"></div>
          <div class="example-output" id="voids"></div><div class="example-output" id="unknown"></div>
          <div class="example-output" id="estrechamiento"></div>
        </section>
        <section class="lesson-section" id="unidad-05">
          <div class="section-heading"><span class="unit-number">05</span><div><p class="eyebrow">UNIDAD 05</p><h2>Variables</h2></div></div>
          <div class="example-output" id="variables"></div>
        </section>
        <section class="lesson-section" id="unidad-06">
          <div class="section-heading"><span class="unit-number">06</span><div><p class="eyebrow">UNIDAD 06</p><h2>Estructuras de control</h2></div></div>
          <div class="example-output" id="condicionales"></div><div class="example-output" id="bucles"></div>
          <div class="example-output" id="trycatch"></div>
        </section>
        <section class="lesson-section" id="unidad-07">
          <div class="section-heading"><span class="unit-number">07</span><div><p class="eyebrow">UNIDAD 07</p><h2>Funciones</h2></div></div>
          <div class="example-output" id="funciones"></div>
        </section>
        <section class="lesson-section" id="unidad-08">
          <div class="section-heading"><span class="unit-number">08</span><div><p class="eyebrow">UNIDAD 08</p><h2>Objetos, clases, interfaces y herencia</h2></div></div>
          <div class="example-output" id="objetos"></div><div class="example-output" id="requisitos"></div>
          <div class="example-output" id="clases"></div>
          <h3>Prácticas guiadas</h3>
          <div class="example-output" id="ejercicio-clases"></div><div class="example-output" id="ejercicio-clases-02"></div>
          <div class="example-output" id="ejercicio-clases-03"></div>
        </section>
        <section class="lesson-section" id="unidad-09">
          <div class="section-heading"><span class="unit-number">09</span><div><p class="eyebrow">UNIDAD 09</p><h2>Generics</h2></div></div>
          <div class="example-output" id="generics"></div>
        </section>
        <section class="lesson-section" id="unidad-10">
          <div class="section-heading"><span class="unit-number">10</span><div><p class="eyebrow">UNIDAD 10</p><h2>Módulos</h2></div></div>
          <p class="section-intro">Un módulo agrupa código relacionado y define qué partes ofrece a otros archivos.</p>
        </section>
        <section class="lesson-section" id="unidad-11">
          <div class="section-heading"><span class="unit-number">11</span><div><p class="eyebrow">UNIDAD 11</p><h2>Importaciones y exportaciones</h2></div></div>
          <div class="example-output" id="importaciones"></div>
        </section>
        <section class="lesson-section" id="unidad-12">
          <div class="section-heading"><span class="unit-number">12</span><div><p class="eyebrow">UNIDAD 12</p><h2>Testing</h2></div></div>
          <p class="section-intro">Pruebas unitarias: <code>npm run test:unit</code>. Escenarios BDD con Cucumber.js: <code>npm run test:bdd</code>. Cobertura: <code>npm run test:coverage</code>.</p>
        </section>
        <footer class="page-footer">Hecho para aprender · Cursos de Desarrollo</footer>
      </main>
    </div>
  </div>
`;

setupTheme(document.querySelector<HTMLButtonElement>("#theme-toggle")!);

// Cada setup escribe la demostración actual en su espacio de salida.
setupArrays(document.querySelector<HTMLDivElement>("#arrays")!);
setupCadenas(document.querySelector<HTMLDivElement>("#cadenas")!);
setupTuplas(document.querySelector<HTMLDivElement>("#tuplas")!);
setupEnums(document.querySelector<HTMLDivElement>("#enums")!);
setupUnions(document.querySelector<HTMLDivElement>("#unions")!);
setupAny(document.querySelector<HTMLDivElement>("#anys")!);
setupVoid(document.querySelector<HTMLDivElement>("#voids")!);
setupUnknown(document.querySelector<HTMLDivElement>("#unknown")!);
setupEstrechamiento(document.querySelector<HTMLDivElement>("#estrechamiento")!);
setupVars(document.querySelector<HTMLDivElement>("#variables")!);
setupCondicionales(document.querySelector<HTMLDivElement>("#condicionales")!);
setupBucles(document.querySelector<HTMLDivElement>("#bucles")!);
setupTryCatch(document.querySelector<HTMLDivElement>("#trycatch")!);
setupFunciones(document.querySelector<HTMLDivElement>("#funciones")!);
setupObjetos(document.querySelector<HTMLDivElement>("#objetos")!);
setupRequisitos(document.querySelector<HTMLDivElement>("#requisitos")!);
setupClases(document.querySelector<HTMLDivElement>("#clases")!);
setupEjercicioClases(document.querySelector<HTMLDivElement>("#ejercicio-clases")!);
setupEjercicio02Clases(document.querySelector<HTMLDivElement>("#ejercicio-clases-02")!);
setupEjercicio03Clases(document.querySelector<HTMLDivElement>("#ejercicio-clases-03")!);
setupGenerics(document.querySelector<HTMLDivElement>("#generics")!);
setupImportaciones(document.querySelector<HTMLDivElement>("#importaciones")!);

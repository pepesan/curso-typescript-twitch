import type { CourseExample, CourseUnit } from "./courseCatalog.ts";

export interface CourseRoute {
    unitId: string;
    exampleId: string;
}

export function resolveCourseRoute(hash: string, units: readonly CourseUnit[]): CourseRoute {
    const match = hash.match(/^#unidad-(\d{2})(?:\/([\w-]+))?$/);
    const requestedUnit = units.find((unit) => unit.id === match?.[1]) ?? units[0];
    const requestedExample = requestedUnit.examples.find((item) => item.id === match?.[2]) ?? requestedUnit.examples[0];
    return { unitId: requestedUnit.id, exampleId: requestedExample.id };
}

function routeFromHash(units: readonly CourseUnit[]): CourseRoute {
    return resolveCourseRoute(window.location.hash, units);
}

function unitHash(unitId: string, exampleId: string): string {
    return `#unidad-${unitId}/${exampleId}`;
}

function renderUnitButtons(units: readonly CourseUnit[], activeUnitId: string): string {
    return units.map((unit) => `
        <li>
          <button class="unit-button${unit.id === activeUnitId ? " is-active" : ""}"
            type="button" data-unit-id="${unit.id}" aria-pressed="${unit.id === activeUnitId}">
            <span class="unit-button-number">${unit.id}</span>
            <span>${unit.title}</span>
          </button>
        </li>`).join("");
}

function renderExampleButtons(examples: readonly CourseExample[], activeExampleId: string): string {
    return examples.map((item, index) => `
        <li>
          <button class="example-button${item.id === activeExampleId ? " is-active" : ""}"
            type="button" data-example-id="${item.id}" aria-pressed="${item.id === activeExampleId}">
            <span class="example-button-number">${String(index + 1).padStart(2, "0")}</span>
            <span>${item.title}</span>
          </button>
        </li>`).join("");
}

function getElement<T extends HTMLElement>(root: HTMLElement, selector: string): T {
    const element = root.querySelector<T>(selector);
    if (!element) {
        throw new Error(`Falta el elemento requerido: ${selector}`);
    }
    return element;
}

/** Controla la selección de unidades y ejemplos sin volver a cargar la página. */
export class CourseApp {
    private readonly allExamples: Array<{ unit: CourseUnit; example: CourseExample }>;
    private focusAfterRender: "unit" | "example" | null = null;

    constructor(
        private readonly root: HTMLElement,
        private readonly units: readonly CourseUnit[],
    ) {
        this.allExamples = units.flatMap((unit) => unit.examples.map((item) => ({ unit, example: item })));
        this.renderShell();

        root.addEventListener("click", (event: MouseEvent) => this.onClick(event));
        window.addEventListener("hashchange", () => this.renderCurrentRoute());

        if (!window.location.hash) {
            const firstUnit = units[0];
            window.history.replaceState(null, "", unitHash(firstUnit.id, firstUnit.examples[0].id));
        }
        this.renderCurrentRoute();
    }

    private renderShell(): void {
        this.root.innerHTML = `
          <div class="app-shell">
            <a class="skip-link" href="#lesson-main">Saltar al contenido</a>
            <header class="topbar">
              <a class="brand" href="#unidad-01/proposito" aria-label="Cursos de Desarrollo, inicio">
                <img src="./brand/cursos-de-desarrollo.svg" alt="Cursos de Desarrollo" />
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
                <nav aria-label="Unidades"><ol class="unit-list" id="unit-list"></ol></nav>
              </aside>
              <main class="lesson-main" id="lesson-main" tabindex="-1">
                <p class="sr-only" id="lesson-announcement" aria-live="polite" aria-atomic="true"></p>
                <p class="breadcrumb" id="breadcrumb"></p>
                <header class="unit-header">
                  <span class="unit-number" id="unit-number"></span>
                  <div><p class="eyebrow" id="unit-label"></p><h1 id="unit-title"></h1></div>
                </header>
                <p class="section-intro" id="unit-description"></p>
                <nav class="example-navigation" aria-label="Ejemplos de esta unidad">
                  <h2>Ejemplos</h2>
                  <ol class="example-list" id="example-list"></ol>
                </nav>
                <article class="example-card" aria-labelledby="example-title">
                  <div class="example-card-heading">
                    <p class="eyebrow" id="example-position"></p>
                    <h2 id="example-title"></h2>
                  </div>
                  <p class="example-summary" id="example-summary"></p>
                  <section class="example-result" id="example-result" aria-label="Demostración">
                    <h3>Demostración</h3>
                    <p class="result-caption" id="result-caption"></p>
                    <p class="example-output" id="example-output"></p>
                  </section>
                  <details class="source-details" id="source-details">
                    <summary>Ver fuente del ejemplo</summary>
                    <pre><code id="source-code"></code></pre>
                  </details>
                </article>
                <nav class="lesson-pager" aria-label="Navegar entre ejemplos">
                  <button class="pager-button" type="button" id="previous-example">
                    <span aria-hidden="true">←</span><span id="previous-label">Anterior</span>
                  </button>
                  <span class="pager-count" id="pager-count"></span>
                  <button class="pager-button pager-next" type="button" id="next-example">
                    <span id="next-label">Siguiente</span><span aria-hidden="true">→</span>
                  </button>
                </nav>
              </main>
            </div>
          </div>`;
    }

    private onClick(event: MouseEvent): void {
        if (!(event.target instanceof Element)) return;
        const unitButton = event.target.closest<HTMLButtonElement>("[data-unit-id]");
        if (unitButton) {
            const unit = this.units.find((item) => item.id === unitButton.dataset.unitId);
            if (unit) {
                const targetHash = unitHash(unit.id, unit.examples[0].id);
                if (window.location.hash !== targetHash) {
                    this.focusAfterRender = "unit";
                    window.location.hash = targetHash;
                }
            }
            return;
        }

        const exampleButton = event.target.closest<HTMLButtonElement>("[data-example-id]");
        if (exampleButton) {
            const route = routeFromHash(this.units);
            const targetHash = unitHash(route.unitId, exampleButton.dataset.exampleId!);
            if (window.location.hash !== targetHash) {
                this.focusAfterRender = "example";
                window.location.hash = targetHash;
            }
            return;
        }

        if (event.target.closest("#previous-example")) this.moveExample(-1);
        if (event.target.closest("#next-example")) this.moveExample(1);
    }

    private moveExample(offset: -1 | 1): void {
        const route = routeFromHash(this.units);
        const currentIndex = this.allExamples.findIndex(({ unit, example }) => unit.id === route.unitId && example.id === route.exampleId);
        const target = this.allExamples[currentIndex + offset];
        if (target) window.location.hash = unitHash(target.unit.id, target.example.id);
    }

    private renderCurrentRoute(): void {
        const route = routeFromHash(this.units);
        const unit = this.units.find((item) => item.id === route.unitId)!;
        const exampleIndex = unit.examples.findIndex((item) => item.id === route.exampleId);
        const selectedExample = unit.examples[exampleIndex];
        const flatIndex = this.allExamples.findIndex(({ example }) => example.id === selectedExample.id);

        // Normaliza enlaces incompletos para que cada ejemplo tenga una URL compartible.
        const canonicalHash = unitHash(unit.id, selectedExample.id);
        if (window.location.hash !== canonicalHash) {
            window.history.replaceState(null, "", canonicalHash);
        }
        document.title = `${selectedExample.title} · ${unit.title} | Curso de TypeScript`;

        getElement<HTMLOListElement>(this.root, "#unit-list").innerHTML = renderUnitButtons(this.units, unit.id);
        getElement<HTMLOListElement>(this.root, "#example-list").innerHTML = renderExampleButtons(unit.examples, selectedExample.id);
        getElement<HTMLParagraphElement>(this.root, "#breadcrumb").textContent = `Curso / Unidad ${unit.id}`;
        getElement<HTMLParagraphElement>(this.root, "#lesson-announcement").textContent = `Unidad ${unit.id}: ${unit.title}. Ejemplo: ${selectedExample.title}`;
        getElement<HTMLSpanElement>(this.root, "#unit-number").textContent = unit.id;
        getElement<HTMLParagraphElement>(this.root, "#unit-label").textContent = `UNIDAD ${unit.id}`;
        getElement<HTMLHeadingElement>(this.root, "#unit-title").textContent = unit.title;
        getElement<HTMLParagraphElement>(this.root, "#unit-description").textContent = unit.description;
        getElement<HTMLParagraphElement>(this.root, "#example-position").textContent = `EJEMPLO ${String(exampleIndex + 1).padStart(2, "0")} DE ${String(unit.examples.length).padStart(2, "0")}`;
        getElement<HTMLHeadingElement>(this.root, "#example-title").textContent = selectedExample.title;
        getElement<HTMLParagraphElement>(this.root, "#example-summary").textContent = selectedExample.summary;

        const sourceDetails = getElement<HTMLDetailsElement>(this.root, "#source-details");
        sourceDetails.hidden = selectedExample.sourceCode === undefined;
        getElement<HTMLElement>(this.root, "#source-code").textContent = selectedExample.sourceCode ?? "";

        const resultSection = getElement<HTMLElement>(this.root, "#example-result");
        resultSection.hidden = !selectedExample.render && !selectedExample.output;
        getElement<HTMLParagraphElement>(this.root, "#result-caption").textContent = selectedExample.render
            ? "Este resultado se genera al seleccionar el ejemplo."
            : "Resultado esperado";
        const output = getElement<HTMLParagraphElement>(this.root, "#example-output");
        output.replaceChildren();
        if (selectedExample.render) {
            selectedExample.render(output);
        } else {
            output.textContent = selectedExample.output ?? "";
        }

        const previous = this.allExamples[flatIndex - 1];
        const next = this.allExamples[flatIndex + 1];
        const previousButton = getElement<HTMLButtonElement>(this.root, "#previous-example");
        const nextButton = getElement<HTMLButtonElement>(this.root, "#next-example");
        previousButton.disabled = !previous;
        nextButton.disabled = !next;
        getElement<HTMLSpanElement>(this.root, "#previous-label").textContent = previous ? `Anterior · ${previous.example.title}` : "Inicio del curso";
        getElement<HTMLSpanElement>(this.root, "#next-label").textContent = next ? `Siguiente · ${next.example.title}` : "Fin del curso";
        getElement<HTMLSpanElement>(this.root, "#pager-count").textContent = `${flatIndex + 1} / ${this.allExamples.length}`;

        const activeUnitButton = this.root.querySelector<HTMLButtonElement>("[data-unit-id].is-active");
        const activeExampleButton = this.root.querySelector<HTMLButtonElement>("[data-example-id].is-active");
        activeUnitButton?.scrollIntoView({ block: "nearest", inline: "center" });
        activeExampleButton?.scrollIntoView({ block: "nearest", inline: "center" });

        // Rebuilding the button list would otherwise drop keyboard focus.
        if (this.focusAfterRender === "unit") activeUnitButton?.focus({ preventScroll: true });
        if (this.focusAfterRender === "example") activeExampleButton?.focus({ preventScroll: true });
        this.focusAfterRender = null;
    }
}

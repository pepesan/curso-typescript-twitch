import { setupAny } from "../04-tipos-datos/any.ts";
import { setupArrays } from "../04-tipos-datos/arrays.ts";
import { setupCadenas } from "../04-tipos-datos/cadenas.ts";
import { setupEnums } from "../04-tipos-datos/enums.ts";
import { setupEstrechamiento } from "../04-tipos-datos/estrechamiento.ts";
import { setupTuplas } from "../04-tipos-datos/tuplas.ts";
import { setupUnions } from "../04-tipos-datos/unions.ts";
import { setupUnknown } from "../04-tipos-datos/unknown.ts";
import { setupVoid } from "../04-tipos-datos/void.ts";
import { setupVars } from "../05-variables/tipos.ts";
import { setupEjerciciosVariables } from "../05-variables/ejercicios/ejercicios.ts";
import { setupBucles } from "../06-estructuras-control/bucles.ts";
import { setupEjerciciosRecorridos } from "../06-estructuras-control/ejercicios/recorridos.ts";
import { setupEjercicioLocalStorage } from "../06-estructuras-control/ejercicios/localStorage.ts";
import { setupCondicionales } from "../06-estructuras-control/condicionales.ts";
import { setupTryCatch } from "../06-estructuras-control/try-catch.ts";
import { setupFunciones } from "../07-funciones/funciones.ts";
import { setupEjerciciosFunciones } from "../07-funciones/ejercicios/ejercicios.ts";
import { setupClases } from "../08-clases-interfaces-herencia/clases.ts";
import { setupObjetos } from "../08-clases-interfaces-herencia/objetos.ts";
import { setupRequisitos } from "../08-clases-interfaces-herencia/requisitos.ts";
import { setupGenericList } from "../09-generics/listado-generico.ts";
import { setupEjercicioClases } from "../08-clases-interfaces-herencia/ejercicios/ejercicio01.ts";
import { setupEjercicio02Clases } from "../08-clases-interfaces-herencia/ejercicios/ejercicio02.ts";
import { setupEjercicio03Clases } from "../08-clases-interfaces-herencia/ejercicios/ejercicio03.ts";
import { setupEjercicioAnimalRaza } from "../08-clases-interfaces-herencia/ejercicios/raza/ejercicioAnimal.ts";
import { setupEjercicioPerroRaza } from "../08-clases-interfaces-herencia/ejercicios/raza/ejercicioPerro.ts";
import { setupGenerics } from "../09-generics/generics.ts";
import { setupEjercicioMapa } from "../09-generics/ejercicios/MapaGenerico.ts";
import { crearSaludo } from "../10-modulos/saludos.ts";
import { setupImportaciones } from "../11-importaciones-exportaciones/ejemplo.ts";

/** Un fichero del proyecto mostrado en el ejemplo, con su ruta relativa a la raíz. */
export interface SourceFile {
    path: string;
    code: string;
}

/** Bloque de código del ejemplo; sin ruta cuando es un fragmento escrito en el catálogo. */
export interface SourceBlock {
    path?: string;
    code: string;
}

export interface CourseExample {
    id: string;
    title: string;
    summary: string;
    sources: readonly SourceBlock[];
    render?: (target: HTMLParagraphElement) => void;
    output?: string;
}

export interface CourseUnit {
    id: string;
    title: string;
    description: string;
    examples: readonly CourseExample[];
}

const rawSources = import.meta.glob<string>(
    ["../[0-9][0-9]-*/**/*.ts", "../../tests/**/*.{ts,feature}"],
    { query: "?raw", import: "default", eager: true },
);

/** Clave de import.meta.glob (relativa a src/app/) → ruta relativa a la raíz del proyecto. */
function toProjectPath(key: string): string {
    const parts = ["src", "app"];
    for (const segment of key.split("/")) {
        if (segment === "..") parts.pop();
        else if (segment !== ".") parts.push(segment);
    }
    return parts.join("/");
}

const sourcesByPath = new Map(
    Object.entries(rawSources).map(([key, code]) => [toProjectPath(key), code]),
);

/** Carga el código de un fichero del proyecto; falla al arrancar si la ruta no existe. */
function sourceFile(path: string): SourceFile {
    const code = sourcesByPath.get(path);
    if (code === undefined) {
        throw new Error(`Fichero de ejemplo no encontrado: ${path}`);
    }
    return { path, code };
}

type CodeSource = string | SourceFile | readonly SourceFile[] | undefined;

function toBlocks(source: CodeSource): readonly SourceBlock[] {
    if (source === undefined) return [];
    if (typeof source === "string") return [{ code: source }];
    if ("path" in source) return [source];
    return source;
}

function example(
    id: string,
    title: string,
    summary: string,
    source?: CodeSource,
    render?: (target: HTMLParagraphElement) => void,
    output?: string,
): CourseExample {
    return { id, title, summary, sources: toBlocks(source), render, output };
}

/** Catálogo en el orden del temario; los ejemplos apuntan al código real. */
export const courseUnits: readonly CourseUnit[] = [
    {
        id: "01",
        title: "Introducción",
        description: "Qué aporta TypeScript cuando ya conoces JavaScript: comprobar tipos antes de ejecutar y obtener mejores herramientas en el editor.",
        examples: [example("proposito", "¿Para qué sirve TypeScript?", "TypeScript es JavaScript con sintaxis de tipos. Los tipos ayudan a detectar usos incorrectos mientras escribes; desaparecen al generar JavaScript.", "const curso: string = \"TypeScript\";\nconsole.log(curso);", undefined, "Salida: TypeScript")],
    },
    {
        id: "02",
        title: "Entorno de desarrollo",
        description: "El curso usa Node.js, npm y Vite para instalar herramientas, servir la aplicación y construir la versión final.",
        examples: [example("comandos", "Instalar y arrancar", "Instala las dependencias del proyecto y arranca el servidor de desarrollo de Vite.", "npm install\nnpm run dev", undefined, "Vite muestra una dirección local para abrir el curso en el navegador.")],
    },
    {
        id: "03",
        title: "Compilación a JavaScript",
        description: "La comprobación de tipos y la generación de JavaScript son pasos distintos. Vite los coordina para desarrollo y producción.",
        examples: [example("build", "Generar la aplicación", "El comando de build comprueba el proyecto con TypeScript y empaqueta recursos estáticos en dist/.", "npm run build\n\n# Comprueba y empaqueta la aplicación\n# Resultado: dist/index.html y dist/assets/*", undefined, "La carpeta dist/ contiene los archivos listos para publicar.")],
    },
    {
        id: "04",
        title: "Tipos de datos",
        description: "Describe los valores que maneja el programa y comprueba operaciones antes de que el código se ejecute.",
        examples: [
            example("arrays", "Arrays y elementos tipados", "Un array de number acepta números. La anotación puede escribirse como T[] o Array<T>.", sourceFile("src/04-tipos-datos/arrays.ts"), setupArrays),
            example("cadenas", "Cadenas de texto", "Las anotaciones string permiten usar operaciones propias del texto con ayuda del editor.", sourceFile("src/04-tipos-datos/cadenas.ts"), setupCadenas),
            example("tuplas", "Tuplas", "Una tupla fija los tipos y las posiciones. Puede ser mutable o declararse readonly.", sourceFile("src/04-tipos-datos/tuplas.ts"), setupTuplas),
            example("enums", "Enums y uniones literales", "Compara el enum numérico con una unión de valores de texto conocida en compilación.", sourceFile("src/04-tipos-datos/enums.ts"), setupEnums),
            example("unions", "Uniones", "Una unión permite más de un tipo. Antes de usar una operación, comprueba qué variante tienes.", sourceFile("src/04-tipos-datos/unions.ts"), setupUnions),
            example("any", "El coste de any", "any desactiva el análisis de tipos. Úsalo solo cuando necesites salir explícitamente del sistema de tipos.", sourceFile("src/04-tipos-datos/any.ts"), setupAny),
            example("unknown", "Entrada unknown", "unknown representa datos cuyo tipo no conocemos. Hay que estrecharlo antes de operar con él.", sourceFile("src/04-tipos-datos/unknown.ts"), setupUnknown),
            example("void-never", "void y never", "void describe funciones sin resultado útil; never describe una función que no termina normalmente.", sourceFile("src/04-tipos-datos/void.ts"), setupVoid),
            example("narrowing", "Estrechamiento y uniones discriminadas", "Usa typeof, comprobaciones de null y propiedades literales para distinguir las variantes de una unión.", sourceFile("src/04-tipos-datos/estrechamiento.ts"), setupEstrechamiento),
        ],
    },
    {
        id: "05",
        title: "Variables",
        description: "Declara valores con alcance de bloque, decide si pueden reasignarse y deja que TypeScript infiera el tipo cuando es evidente.",
        examples: [
            example("declaraciones", "let, const y var", "Compara la inferencia con anotaciones explícitas y el alcance de bloque de let/const frente a var.", sourceFile("src/05-variables/tipos.ts"), setupVars),
            example("ejercicios-variables", "Ejercicios: tipos y suma", "Declara valores null, boolean, number y string; suma dos variables number y compara var, let y const.", sourceFile("src/05-variables/ejercicios/ejercicios.ts"), setupEjerciciosVariables),
        ],
    },
    {
        id: "06",
        title: "Estructuras de control",
        description: "Las condiciones y los bucles son JavaScript; TypeScript además usa el flujo de control para estrechar tipos.",
        examples: [
            example("condicionales", "if y switch", "Selecciona una rama según una condición y cubre los casos de un valor con switch.", sourceFile("src/06-estructuras-control/condicionales.ts"), setupCondicionales),
            example("bucles", "Iterar arrays y cadenas", "Compara for, while, do...while, for...of y for...in según qué elemento o índice necesitas.", sourceFile("src/06-estructuras-control/bucles.ts"), setupBucles),
            example("try-catch", "Manejo de errores", "try/catch permite responder a errores en ejecución; la excepción capturada debe tratarse como desconocida.", sourceFile("src/06-estructuras-control/try-catch.ts"), setupTryCatch),
            example("ejercicios-bucles", "Ejercicios: recorrer diez números", "Recorre un array de diez valores con for, while, do...while, for...of y for...in, y muestra todas las iteraciones.", sourceFile("src/06-estructuras-control/ejercicios/recorridos.ts"), setupEjerciciosRecorridos),
            example("ejercicio-local-storage", "Ejercicio: LocalStorage y try/catch", "Guarda un valor en LocalStorage, recupéralo y presenta el resultado incluso si el navegador produce un error.", sourceFile("src/06-estructuras-control/ejercicios/localStorage.ts"), setupEjercicioLocalStorage),
        ],
    },
    {
        id: "07",
        title: "Funciones",
        description: "Expresa el contrato de una función en sus parámetros, resultado y callbacks para reutilizarla con seguridad.",
        examples: [
            example("firmas", "Parámetros, retornos y sobrecargas", "Explora valores opcionales y por defecto, rest, tipos función, callbacks y sobrecargas sin perder el tipo de resultado.", sourceFile("src/07-funciones/funciones.ts"), setupFunciones),
            example("ejercicios-funciones", "Ejercicios: suma y parámetros", "Practica funciones que imprimen, devuelven sumas, aceptan parámetros opcionales o predeterminados y concatenan textos con rest.", sourceFile("src/07-funciones/ejercicios/ejercicios.ts"), setupEjerciciosFunciones),
        ],
    },
    {
        id: "08",
        title: "Clases, interfaces y herencia",
        description: "Modela objetos, aplica requisitos de negocio y organiza comportamiento con interfaces, clases y herencia.",
        examples: [
            example("objetos", "Objetos, type e interface", "Los tipos de objeto describen las propiedades requeridas y opcionales; readonly evita reasignarlas desde TypeScript.", sourceFile("src/08-clases-interfaces-herencia/objetos.ts"), setupObjetos),
            example("requisitos", "Objetos a partir de requisitos", "Calcula el total de un pedido y valida en ejecución un porcentaje de descuento.", sourceFile("src/08-clases-interfaces-herencia/requisitos.ts"), setupRequisitos),
            example("clases", "Clases e interfaces", "El ejemplo reúne constructores, encapsulación, getters, herencia, interfaces y clases abstractas.", sourceFile("src/08-clases-interfaces-herencia/clases.ts"), setupClases),
            example("ejercicio-animal", "Práctica: Animal", "Crea una clase, oculta su estado y expón operaciones seguras mediante getters y setters.", sourceFile("src/08-clases-interfaces-herencia/ejercicios/ejercicio01.ts"), setupEjercicioClases),
            example("ejercicio-perro", "Práctica: herencia", "Extiende Animal con Perro y reutiliza el comportamiento de la clase base.", sourceFile("src/08-clases-interfaces-herencia/ejercicios/ejercicio02.ts"), setupEjercicio02Clases),
            example("ejercicio-interface", "Práctica: interfaz", "Implementa el contrato Luchador y utiliza la instancia a través de su método.", sourceFile("src/08-clases-interfaces-herencia/ejercicios/ejercicio03.ts"), setupEjercicio03Clases),
            example("ejercicio-animal-raza", "Ejercicio: Animal y raza", "Implementa raza con constructor predeterminado, getter, setter y display; crea instancias con y sin parámetro.", [sourceFile("src/08-clases-interfaces-herencia/ejercicios/raza/AnimalRaza.ts"), sourceFile("src/08-clases-interfaces-herencia/ejercicios/raza/ejercicioAnimal.ts")], setupEjercicioAnimalRaza),
            example("ejercicio-perro-raza", "Ejercicio: Perro hereda de Animal", "Extiende Animal, pasa la raza a super, guarda el nombre de Perro y muestra dos objetos por consola y en pantalla.", [sourceFile("src/08-clases-interfaces-herencia/ejercicios/raza/AnimalRaza.ts"), sourceFile("src/08-clases-interfaces-herencia/ejercicios/raza/PerroRaza.ts"), sourceFile("src/08-clases-interfaces-herencia/ejercicios/raza/ejercicioPerro.ts")], setupEjercicioPerroRaza),
        ],
    },
    {
        id: "09",
        title: "Generics",
        description: "Escribe funciones y estructuras reutilizables que conservan el tipo concreto de los valores que reciben.",
        examples: [
            example("generics", "Funciones y restricciones genéricas", "T relaciona entradas y salidas. Una restricción extends permite requerir propiedades concretas sin perder el tipo original.", sourceFile("src/09-generics/generics.ts"), setupGenerics),
            example("listado-generico", "Listado genérico", "Un Listado<T> se inicializa con valores, inserta al inicio, al final o en una posición, y se libera de memoria vaciando sus referencias.", sourceFile("src/09-generics/listado-generico.ts"), setupGenericList),
            example("ejercicio-mapa-generico", "Ejercicio: mapa clave/valor", "Implementa una clase genérica con constructor, add, borrar por clave y display usando Map.", sourceFile("src/09-generics/ejercicios/MapaGenerico.ts"), setupEjercicioMapa),
        ],
    },
    {
        id: "10",
        title: "Módulos",
        description: "Cada archivo puede definir un módulo con responsabilidades y elementos públicos claramente delimitados.",
        examples: [example("modulo-saludos", "Un módulo reutilizable", "El módulo exporta una función y un tipo para que otros archivos los puedan reutilizar.", sourceFile("src/10-modulos/saludos.ts"), (target) => { target.textContent = crearSaludo("Ada", "es"); })],
    },
    {
        id: "11",
        title: "Importaciones y exportaciones",
        description: "Usa export e import para compartir funciones y tipos entre unidades sin acoplarlas a una sola página.",
        examples: [example("import-type", "Importar valores y tipos", "Importa la función que se ejecuta y el tipo que solo necesita el compilador.", sourceFile("src/11-importaciones-exportaciones/ejemplo.ts"), setupImportaciones)],
    },
    {
        id: "12",
        title: "Testing",
        description: "Compara pruebas unitarias directas con escenarios BDD y consulta la cobertura generada por Vitest.",
        examples: [
            example("vitest", "Prueba unitaria con Vitest", "Llama a la función directamente y comprueba el resultado esperado.", sourceFile("tests/unit/funciones.test.ts"), undefined, "Pruebas de funciones, tema, catálogo y rutas; ejecución: npm run test:unit"),
            example("cucumber", "Escenario BDD con Cucumber.js", "Describe el comportamiento con lenguaje de dominio y conecta cada paso con la función real.", sourceFile("tests/bdd/features/saludos.feature"), undefined, "1 escenario aprobado; ejecución: npm run test:bdd"),
        ],
    },
];

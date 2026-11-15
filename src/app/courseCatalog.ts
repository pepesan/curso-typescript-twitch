import { setupAny } from "../04-tipos-datos/any.ts";
import anyCode from "../04-tipos-datos/any.ts?raw";
import { setupArrays } from "../04-tipos-datos/arrays.ts";
import arraysCode from "../04-tipos-datos/arrays.ts?raw";
import { setupCadenas } from "../04-tipos-datos/cadenas.ts";
import stringsCode from "../04-tipos-datos/cadenas.ts?raw";
import { setupEnums } from "../04-tipos-datos/enums.ts";
import enumsCode from "../04-tipos-datos/enums.ts?raw";
import { setupEstrechamiento } from "../04-tipos-datos/estrechamiento.ts";
import narrowingCode from "../04-tipos-datos/estrechamiento.ts?raw";
import { setupTuplas } from "../04-tipos-datos/tuplas.ts";
import tuplesCode from "../04-tipos-datos/tuplas.ts?raw";
import { setupUnions } from "../04-tipos-datos/unions.ts";
import unionsCode from "../04-tipos-datos/unions.ts?raw";
import { setupUnknown } from "../04-tipos-datos/unknown.ts";
import unknownCode from "../04-tipos-datos/unknown.ts?raw";
import { setupVoid } from "../04-tipos-datos/void.ts";
import voidCode from "../04-tipos-datos/void.ts?raw";
import { setupVars } from "../05-variables/tipos.ts";
import variablesCode from "../05-variables/tipos.ts?raw";
import { setupBucles } from "../06-estructuras-control/bucles.ts";
import loopsCode from "../06-estructuras-control/bucles.ts?raw";
import { setupCondicionales } from "../06-estructuras-control/condicionales.ts";
import conditionsCode from "../06-estructuras-control/condicionales.ts?raw";
import { setupTryCatch } from "../06-estructuras-control/try-catch.ts";
import exceptionsCode from "../06-estructuras-control/try-catch.ts?raw";
import { setupFunciones } from "../07-funciones/funciones.ts";
import functionsCode from "../07-funciones/funciones.ts?raw";
import { setupClases } from "../08-clases-interfaces-herencia/clases.ts";
import classesCode from "../08-clases-interfaces-herencia/clases.ts?raw";
import { setupObjetos } from "../08-clases-interfaces-herencia/objetos.ts";
import objectsCode from "../08-clases-interfaces-herencia/objetos.ts?raw";
import { setupRequisitos } from "../08-clases-interfaces-herencia/requisitos.ts";
import requirementsCode from "../08-clases-interfaces-herencia/requisitos.ts?raw";
import { setupEjercicioClases } from "../08-clases-interfaces-herencia/ejercicios/ejercicio01.ts";
import exerciseOneCode from "../08-clases-interfaces-herencia/ejercicios/ejercicio01.ts?raw";
import { setupEjercicio02Clases } from "../08-clases-interfaces-herencia/ejercicios/ejercicio02.ts";
import exerciseTwoCode from "../08-clases-interfaces-herencia/ejercicios/ejercicio02.ts?raw";
import { setupEjercicio03Clases } from "../08-clases-interfaces-herencia/ejercicios/ejercicio03.ts";
import exerciseThreeCode from "../08-clases-interfaces-herencia/ejercicios/ejercicio03.ts?raw";
import { setupGenerics } from "../09-generics/generics.ts";
import genericsCode from "../09-generics/generics.ts?raw";
import { crearSaludo } from "../10-modulos/saludos.ts";
import modulesCode from "../10-modulos/saludos.ts?raw";
import { setupImportaciones } from "../11-importaciones-exportaciones/ejemplo.ts";
import importsCode from "../11-importaciones-exportaciones/ejemplo.ts?raw";
import unitTestCode from "../../tests/unit/funciones.test.ts?raw";
import bddFeatureCode from "../../tests/bdd/features/saludos.feature?raw";

export interface CourseExample {
    id: string;
    title: string;
    summary: string;
    sourceCode?: string;
    render?: (target: HTMLParagraphElement) => void;
    output?: string;
}

export interface CourseUnit {
    id: string;
    title: string;
    description: string;
    examples: readonly CourseExample[];
}

function example(
    id: string,
    title: string,
    summary: string,
    sourceCode?: string,
    render?: (target: HTMLParagraphElement) => void,
    output?: string,
): CourseExample {
    return { id, title, summary, sourceCode, render, output };
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
            example("arrays", "Arrays y elementos tipados", "Un array de number acepta números. La anotación puede escribirse como T[] o Array<T>.", arraysCode, setupArrays),
            example("cadenas", "Cadenas de texto", "Las anotaciones string permiten usar operaciones propias del texto con ayuda del editor.", stringsCode, setupCadenas),
            example("tuplas", "Tuplas", "Una tupla fija los tipos y las posiciones. Puede ser mutable o declararse readonly.", tuplesCode, setupTuplas),
            example("enums", "Enums y uniones literales", "Compara el enum numérico con una unión de valores de texto conocida en compilación.", enumsCode, setupEnums),
            example("unions", "Uniones", "Una unión permite más de un tipo. Antes de usar una operación, comprueba qué variante tienes.", unionsCode, setupUnions),
            example("any", "El coste de any", "any desactiva el análisis de tipos. Úsalo solo cuando necesites salir explícitamente del sistema de tipos.", anyCode, setupAny),
            example("unknown", "Entrada unknown", "unknown representa datos cuyo tipo no conocemos. Hay que estrecharlo antes de operar con él.", unknownCode, setupUnknown),
            example("void-never", "void y never", "void describe funciones sin resultado útil; never describe una función que no termina normalmente.", voidCode, setupVoid),
            example("narrowing", "Estrechamiento y uniones discriminadas", "Usa typeof, comprobaciones de null y propiedades literales para distinguir las variantes de una unión.", narrowingCode, setupEstrechamiento),
        ],
    },
    {
        id: "05",
        title: "Variables",
        description: "Declara valores con alcance de bloque, decide si pueden reasignarse y deja que TypeScript infiera el tipo cuando es evidente.",
        examples: [example("declaraciones", "let, const y var", "Compara la inferencia con anotaciones explícitas y el alcance de bloque de let/const frente a var.", variablesCode, setupVars)],
    },
    {
        id: "06",
        title: "Estructuras de control",
        description: "Las condiciones y los bucles son JavaScript; TypeScript además usa el flujo de control para estrechar tipos.",
        examples: [
            example("condicionales", "if y switch", "Selecciona una rama según una condición y cubre los casos de un valor con switch.", conditionsCode, setupCondicionales),
            example("bucles", "Iterar arrays y cadenas", "Compara for, while, do...while, for...of y for...in según qué elemento o índice necesitas.", loopsCode, setupBucles),
            example("try-catch", "Manejo de errores", "try/catch permite responder a errores en ejecución; la excepción capturada debe tratarse como desconocida.", exceptionsCode, setupTryCatch),
        ],
    },
    {
        id: "07",
        title: "Funciones",
        description: "Expresa el contrato de una función en sus parámetros, resultado y callbacks para reutilizarla con seguridad.",
        examples: [example("firmas", "Parámetros, retornos y sobrecargas", "Explora valores opcionales y por defecto, rest, tipos función, callbacks y sobrecargas sin perder el tipo de resultado.", functionsCode, setupFunciones)],
    },
    {
        id: "08",
        title: "Clases, interfaces y herencia",
        description: "Modela objetos, aplica requisitos de negocio y organiza comportamiento con interfaces, clases y herencia.",
        examples: [
            example("objetos", "Objetos, type e interface", "Los tipos de objeto describen las propiedades requeridas y opcionales; readonly evita reasignarlas desde TypeScript.", objectsCode, setupObjetos),
            example("requisitos", "Objetos a partir de requisitos", "Calcula el total de un pedido y valida en ejecución un porcentaje de descuento.", requirementsCode, setupRequisitos),
            example("clases", "Clases e interfaces", "El ejemplo reúne constructores, encapsulación, getters, herencia, interfaces y clases abstractas.", classesCode, setupClases),
            example("ejercicio-animal", "Práctica: Animal", "Crea una clase, oculta su estado y expón operaciones seguras mediante getters y setters.", exerciseOneCode, setupEjercicioClases),
            example("ejercicio-perro", "Práctica: herencia", "Extiende Animal con Perro y reutiliza el comportamiento de la clase base.", exerciseTwoCode, setupEjercicio02Clases),
            example("ejercicio-interface", "Práctica: interfaz", "Implementa el contrato Luchador y utiliza la instancia a través de su método.", exerciseThreeCode, setupEjercicio03Clases),
        ],
    },
    {
        id: "09",
        title: "Generics",
        description: "Escribe funciones y estructuras reutilizables que conservan el tipo concreto de los valores que reciben.",
        examples: [example("generics", "Funciones y restricciones genéricas", "T relaciona entradas y salidas. Una restricción extends permite requerir propiedades concretas sin perder el tipo original.", genericsCode, setupGenerics)],
    },
    {
        id: "10",
        title: "Módulos",
        description: "Cada archivo puede definir un módulo con responsabilidades y elementos públicos claramente delimitados.",
        examples: [example("modulo-saludos", "Un módulo reutilizable", "El módulo exporta una función y un tipo para que otros archivos los puedan reutilizar.", modulesCode, (target) => { target.textContent = crearSaludo("Ada", "es"); })],
    },
    {
        id: "11",
        title: "Importaciones y exportaciones",
        description: "Usa export e import para compartir funciones y tipos entre unidades sin acoplarlas a una sola página.",
        examples: [example("import-type", "Importar valores y tipos", "Importa la función que se ejecuta y el tipo que solo necesita el compilador.", importsCode, setupImportaciones)],
    },
    {
        id: "12",
        title: "Testing",
        description: "Compara pruebas unitarias directas con escenarios BDD y consulta la cobertura generada por Vitest.",
        examples: [
            example("vitest", "Prueba unitaria con Vitest", "Llama a la función directamente y comprueba el resultado esperado.", unitTestCode, undefined, "Pruebas de funciones, tema, catálogo y rutas; ejecución: npm run test:unit"),
            example("cucumber", "Escenario BDD con Cucumber.js", "Describe el comportamiento con lenguaje de dominio y conecta cada paso con la función real.", bddFeatureCode, undefined, "1 escenario aprobado; ejecución: npm run test:bdd"),
        ],
    },
];

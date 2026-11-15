# Temario de TypeScript

## Objetivos

- Comprender para qué sirve TypeScript y cómo complementa a JavaScript.
- Configurar el entorno, compilar TypeScript y ejecutar el JavaScript generado.
- Usar variables, tipos, estructuras de control y funciones con seguridad de tipos.
- Modelar requisitos mediante objetos, interfaces, clases y tipos genéricos.
- Organizar el código en módulos y comprobarlo con pruebas automatizadas.

## Unidades

### 01. Introducción

- Relación entre JavaScript, ECMAScript y TypeScript.
- Qué aporta el análisis estático de tipos durante el desarrollo.
- Qué ocurre con las anotaciones de tipo al generar JavaScript.

### 02. Entorno de desarrollo

- Uso de Node.js y npm para trabajar con el proyecto.
- Instalación de dependencias.
- Arranque del servidor de desarrollo con Vite.

### 03. Compilación a JavaScript

- Comprobación de tipos y generación de JavaScript.
- Proceso de compilación de la aplicación.
- Creación de los archivos de producción en `dist/`.

### 04. Tipos de datos

- Cadenas, arrays y tuplas.
- Enums y uniones literales.
- Uniones de tipos y estrechamiento con comprobaciones.
- Diferencias entre `any` y `unknown`.
- Uso de `void` y `never`.

### 05. Variables

- Declaración con `let`, `const` y `var`.
- Inferencia y anotaciones de tipos.
- Alcance de bloque y reasignación.

### 06. Estructuras de control

- Condicionales con `if` y `switch`.
- Iteración con bucles sobre arrays y cadenas.
- Manejo de errores con `try` y `catch`.
- Estrechamiento de tipos según el flujo de control.

### 07. Funciones

- Parámetros y valores de retorno.
- Parámetros opcionales, predeterminados y rest.
- Tipos de función, callbacks y sobrecargas.
- Reutilización de funciones con contratos claros.

### 08. Clases, interfaces y herencia

- Tipos para objetos, alias e interfaces.
- Modelado de requisitos con objetos.
- Clases, constructores, encapsulación y modificadores de acceso.
- Herencia, clases abstractas e implementación de interfaces.

### 09. Generics

- Funciones y estructuras genéricas.
- Relación entre los tipos de entrada y salida.
- Restricciones genéricas con `extends`.

### 10. Módulos

- Organización del código por archivos y responsabilidades.
- Declaración de funciones y tipos reutilizables en un módulo.

### 11. Importaciones y exportaciones

- Exportación e importación de funciones y tipos.
- Diferencia entre importar valores usados en ejecución e importar tipos.

### 12. Testing

- Pruebas unitarias directas con Vitest.
- Escenarios BDD con Cucumber.js.
- Ejecución de las pruebas y consulta de la cobertura de código.

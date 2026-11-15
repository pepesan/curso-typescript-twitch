# Curso de TypeScript

Repositorio didáctico para aprender los fundamentos de TypeScript partiendo de JavaScript. El temario y sus objetivos están en [TEMARIO.md](TEMARIO.md).

Los ejemplos están organizados en `src/` mediante unidades numeradas que siguen el temario. Algunas unidades son documentación de apoyo; las que contienen código se muestran desde la aplicación de ejemplo.

La aplicación permite elegir una unidad y después uno de sus ejemplos. Cada ejemplo presenta una explicación, su demostración y el código fuente desplegable. La selección se refleja en la URL para poder compartir enlaces directos; el tema claro/oscuro se conserva en el navegador.

La configuración de Vite usa rutas relativas, por lo que el contenido de `dist/` también se puede servir desde una subcarpeta.

# Cómo arranco la aplicación de ejemplo
La aplicación está creada con Vite. Necesitas Node.js 22.12 o posterior dentro de las versiones admitidas por las herramientas (22, 24 o 26+). Ejecuta `npm install` y después `npm run dev`.

## Cómo recorrer el curso

El índice superior permite elegir una unidad. Dentro de ella, selecciona un ejemplo para ver su explicación y demostración; abre **Ver fuente del ejemplo** para consultar el TypeScript. Los controles anterior/siguiente recorren el curso y cada selección tiene un enlace directo en la URL. El tema claro u oscuro se puede cambiar desde el botón de la cabecera.

# Cómo accedo a la aplicación

[http://localhost:5173/](http://localhost:5173/)

## Pruebas y cobertura

- `npm run test:unit`: pruebas unitarias con Vitest.
- `npm run test:bdd`: escenarios de comportamiento con Cucumber.js.
- `npm test`: ejecuta ambos conjuntos.
- `npm run test:coverage`: crea informes de cobertura; consulta [la unidad 12](src/12-testing/README.md).

## Build de producción

`npm run build` comprueba los tipos y genera la aplicación estática en `dist/`. Puedes probar el resultado con `npm run preview`. Las rutas relativas de Vite permiten publicar esa carpeta también bajo una subruta.

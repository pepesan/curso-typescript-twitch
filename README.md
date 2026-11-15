# Curso de TypeScript

Repositorio didáctico para aprender los fundamentos de TypeScript partiendo de JavaScript. El temario y sus objetivos están en [TEMARIO.md](TEMARIO.md).

Los ejemplos están organizados en `src/` mediante unidades numeradas que siguen el temario. Algunas unidades son documentación de apoyo; las que contienen código se muestran desde la aplicación de ejemplo.

La aplicación permite elegir una unidad y después uno de sus ejemplos. Cada ejemplo presenta una explicación, su demostración y el código fuente desplegable. La selección se refleja en la URL para poder compartir enlaces directos; el tema claro/oscuro se conserva en el navegador.

# Cómo arranco la aplicación de ejemplo
La aplicación está creada con Vite. Para iniciarla, ejecuta `npm install` y después `npm run dev`.

# Cómo accedo a la aplicación

[http://localhost:5173/](http://localhost:5173/)

## Pruebas y cobertura

- `npm run test:unit`: pruebas unitarias con Vitest.
- `npm run test:bdd`: escenarios de comportamiento con Cucumber.js.
- `npm test`: ejecuta ambos conjuntos.
- `npm run test:coverage`: crea informes de cobertura; consulta [la unidad 12](src/12-testing/README.md).

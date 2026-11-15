# 12. Testing

Esta unidad demuestra dos formas de comprobar el comportamiento de una función:

- **Prueba unitaria con Vitest:** `tests/unit/funciones.test.ts` llama a las funciones directamente y comprueba resultados concretos.
- `tests/unit/theme.test.ts` comprueba cómo se elige el tema guardado o el del sistema.
- **Escenario BDD con Cucumber.js:** `tests/bdd/features/saludos.feature` describe un ejemplo en lenguaje de dominio; los pasos TypeScript reutilizan la función `saludar`.

Comandos disponibles desde la raíz:

```sh
npm run test:unit      # ejecuta Vitest
npm run test:bdd       # ejecuta los escenarios Cucumber
npm test               # ejecuta ambos conjuntos
npm run test:coverage  # ejecuta Vitest y genera cobertura
```

Vitest genera informes en texto, JSON resumido y HTML en `coverage/`. El primer umbral es 90 % en líneas, funciones y sentencias para el módulo didáctico `src/07-funciones/funciones.ts`. La cobertura se amplía a otros módulos a medida que se añaden pruebas representativas; Cucumber aporta escenarios BDD, y no forma parte del cálculo de cobertura de Vitest.

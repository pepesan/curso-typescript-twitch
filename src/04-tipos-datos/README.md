# 04. Tipos de datos

Ejemplos: arrays, cadenas, tuplas, enums, uniones, `any`, `unknown`, `void`, `never` y estrechamiento de tipos.

`unknown` es la opción segura cuando el tipo de entrada no se conoce: antes de usar un valor como texto, número u objeto hay que comprobarlo. `any` desactiva esa comprobación y se muestra para reconocer código que conviene evitar. `normalizarNombre` enseña a manejar tanto `null` como `undefined`.

`void` se usa en funciones que no devuelven un resultado útil; `never` describe funciones que no terminan normalmente, por ejemplo porque siempre lanzan un error. Las uniones discriminadas y su comprobación exhaustiva se ven en `estrechamiento.ts`.

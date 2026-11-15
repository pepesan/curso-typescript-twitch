# language: es
# Un escenario describe el comportamiento esperado en lenguaje de dominio.
Característica: Saludos
  Para reutilizar una función de saludo
  Como persona que usa el curso
  Quiero saludar con o sin nombre

  Escenario: Saludar a una persona por su nombre
    Dado que preparo un saludo "Hola"
    Cuando lo dirijo a "Ada"
    Entonces el resultado es "Hola, Ada!"

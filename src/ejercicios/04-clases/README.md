# Ejercicios de la Unidad 04: Clases

## Ejercicio 1
* Todo este ejercicio se resolverá en la carpeta
  src/ejercicios/04-clases
* Crea una nueva clase que sea capaz de guardar
  los datos de un animal, hazlo en un fichero llamado
  Animal.ts, la clase se llamará Animal
* Crea un nuevo párrafo en el main.ts con el id
  ejercicio-clases que podamos modificar más adelante
* Crea un método setupEjercicioClases dentro de la carpeta  
  ejercicio/04-clases en el fichero ejercicio01.ts para que
  modifique el párrafo que se pase como parámetro
* Modifica el main.ts para que llame al método
  setupEjercicioClases pasádole como parámetro el
  parrafo cuyo identificativo sea ejercicio-clases
* La clase Animal tiene un atributo llamado edad de tipo number
* Modifica el fichero Animal.ts para que tenga ese atributo
* Modifica la clase Animal para que tenga una función
  constructora que inicialice el atributo age a 0 cuando se
  ejecute
* Modifica el fichero ejercicio01.ts para que dentro de la
  función inicializar un objeto llamado animal de la clase
  Animal. (Recuerda que debes pasar una edad en la llamada new)
* Modifica la misma función para que modifique el párrafo con
  el dato de la edad del objeto animal
* Modifica la clase Animal para que el atributo age sea privado
  y modifica también su nombre a _age
* Verás que ya no puedes acceder directamente al atributo desde
  el objeto, deberás crear un getter para el atributo _age llamado
  age
* Crea otro método en clase Animal que permita modificar el atributo
  _age (Setter) que lance un error en el caso de age ser 0

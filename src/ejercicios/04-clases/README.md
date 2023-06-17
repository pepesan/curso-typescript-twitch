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
 ejercicio/clases en el fichero ejercicio01.ts para que 
 modifique el párrafo que se pase como parámetro
* Modifica el main.ts para que llame al método 
 setupEjercicioClases pasándole como parámetro el 
 párrafo cuyo identificativo sea ejercicio-clases
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

## Ejercicio 2
* En base al ejercicio anterior resolver la siguientes cuestiones:
* Crea un nuevo párrafo en el main.ts con el id
  ejercicio-clases-02 que podamos modificar más adelante
* Crea un método setupEjercicio02Clases dentro de la carpeta  
  ejercicio/clases en el fichero ejercicio02.ts para que
  modifique el párrafo que se pase como parámetro
* Modifica el main.ts para que llame al método
    setupEjercicio02Clases pasándole como parámetro el
    párrafo cuyo identificativo sea ejercicio-clases-02
* Crea una nueva clase llamada Perro que herede de Animal
* Dentro del fichero ejercicio02.ts crea un objeto de la clase perro 
  llamado nyska con una llamada al constructor sin parámetros. Comprueba que 
  al ponerlo dentro del párrafo presenta la edad de nyska es 1
* Declara un nuevo atributo a la clase Perro que sea de tipo string y se llame
  _nombre que esté declarado como atributo privado
* Crea una función constructora para la clase Perro que permita inicializar
  tanto la edad como el nombre del perro, coloca valores por defecto
* Modifica la llamada a la función constructora del objeto nyska para pasar
  los datos de 7 a edad y "Nyska" como nombre
* Crea el getter y el setter llamado nombre del atributo _nombre en la clase Perro
* Modifica la salida del párrafo del ejercicio para incluir la edad del objeto 
  nyska y su nombre
* Crea el toString de Animal y el de Perro para que presente en una cadena
  los valores de ambas clases
## Ejercicio 3
* En base al ejercicio anterior resolver la siguientes cuestiones:
* Crea un nuevo párrafo en el main.ts con el id
  ejercicio-clases-03 que podamos modificar más adelante
* Crea un método setupEjercicio03Clases dentro de la carpeta  
  ejercicio/clases en el fichero ejercicio03.ts para que
  modifique el párrafo que se pase como parámetro
* Modifica el main.ts para que llame al método
  setupEjercicio02Clases pasándole como parámetro el
  párrafo cuyo identificativo sea ejercicio-clases-03
* Crea un nuevo interfaz llamado Luchador
* El interfaz debe definir un método abstracto llamado grito que devuelva
  una string
* Crea una nueva clase llamada Karateka que implemente el interfaz Luchador
* Dentro del método grito de Katareta haz que devuelva "KYA!"
* Dentro del fichero ejercicio03.ts crea un objeto de la clase Katateka llamado
  danielSan
* Haz que en el párrafo del ejercicio devuelva una llamada al método grito


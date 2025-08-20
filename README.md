# Curso-Typescript-Fernando-Herrera

# Typescript

typescript no funciona en timepo de ejecucion.

Typescript → tiempo de compilacion

Javascript → tiempo de ejecucion.

typescript no te ahorra codigo, es mas, te anade codigo. pero te agrega seguridad.

### Tipos básicos:

Las funciones no tienen inferencia, se debe evitar usar los tipos ANY

En los callback, evitar usar FUNCTION: es el ANY de las funciones.

### Union Types

`const HeroPowerScale = ‘local’ | ‘planetary’ | ‘galactic’ | ‘universal`

`const HeroBasics {`

`name,`

`age`

`}`

`const HeroProperties:{`

`id,`

`leve,`

`power`

`}`

`const Hero  = HeroBasics & HeroProperties`

### Type Indexing

### Type from function return.

`type Address - ReturnType<typeof createAddress>`

### Arrays

const strings = [] —> Por inferencia esto es igual a un tipo never.

### Funciones

En las funciones cuando existen parametros de tipo optionales, deben ir al final de todos los parametro (antes typeacript lo permitia, ahora ya no )

---

ES5 VS ES6

- Las funciones en ES5 se pueden sobreescribir incluso usando const, en ES6 no, da un error

## Destructuracion

en ES5 generaba mas codigo usando var, en ES6 es el mismo codigo que JS

## Clases

Con una caracteristica nueva de ES6 en JS

## Scope

dentro de un if se puede crear una nueva variable, con el nombre de la variable que existe fuera del if.

## Objeto THIS en una funcion flecha

en una función de flecha, el objeto "THIS" no se refiere a la propia función. En su lugar, "THIS" retiene el valor que tenía en el contexto donde se definió la función de flecha, es decir, "THIS" se mantiene igual al contexto exterior y no cambia cuando se ejecuta la función. Este es un concepto clave en JavaScript que ayuda a evitar confusiones con el valor de "THIS" en diferentes tipos de funciones.

## metodos de clase

En ES6 no se puede hacer todavia metodos privados, en ts se declaran y cuando se intenta acceder da error, pero igual se compila/transpila

## static

la propiedad y metodos estaticos son accesibles sin crear un objeto de la clase, sino directamente declarando la clase

## identificadores

public --> Se puede acceder desde fuera de la clase
private --> se puede acceder solo dentro de la clase
protected --> se puede acceder desde la clase y clase que extienden de ella.

## Clases abstractas

No se puede crear una nueva instancia de una clase abstracta,
Sirve para crear otras clases, o asegurasse que otras clases implementen lo que se establece en la abstracta.

## Constructores privados

Sirven para crear el patron singleton, cada vez se usa menos

## Interfaces

Es similar a los types en TS. La diferencia es que un tipo no puede extenderse, la interfaz si.
Una interfaz tiene lo mas minimo de una clase.

Las interfaces no implementan los metodos, a difrenecia de las clases.

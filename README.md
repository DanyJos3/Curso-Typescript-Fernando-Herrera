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

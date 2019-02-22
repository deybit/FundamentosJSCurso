var maria = {
  nombre: 'Maria',
  apellido: 'Mendez',
  edad: 23

}

var jose = {
  nombre: 'Jose',
  apellido: 'Martinez',
  edad: 24

}

//var nombre2 = 'Damian'

function imprimirNombreEnMayusculas(persona) {
  nombre = persona.nombre.toUpperCase()
  console.log(nombre)
}

function imprimirNombreEnMayusculas2({ nombre }) {
  nombre2 = nombre.toUpperCase()
  console.log(nombre2)
}

imprimirNombreEnMayusculas(maria)
imprimirNombreEnMayusculas(jose)
imprimirNombreEnMayusculas2({nombre: 'Alex'})






/*var sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  edad: 28
}

var dario = {
  nombre: 'Darío',
  apellido: 'Susnisky',
  edad: 27
}

function imprimirNombreEnMayusculas({ nombre }) {
  console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(sacha)
imprimirNombreEnMayusculas(dario)
// imprimirNombreEnMayusculas({ nombre: 'Pepito' })
imprimirNombreEnMayusculas({ apellido: 'Gomez' })
*/

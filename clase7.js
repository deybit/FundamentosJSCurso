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

  var { nombre } = persona
  //nombre = persona.nombre.toUpperCase()
  console.log(nombre)
}

function imprimirNombreYEdad (persona){

  var { nombre } = persona
  var { edad } = persona
  console.log('Hola me llamo ' + nombre + ' y tengo ' + edad + ' años');
  //hola me llamo tal y tengo x años
}


function imprimirNombreEnMayusculas2({ nombre }) {
  nombre2 = nombre.toUpperCase()
  console.log(nombre2)
}

imprimirNombreEnMayusculas(maria)
imprimirNombreEnMayusculas(jose)
imprimirNombreYEdad(jose)
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

function imprimirNombreEnMayusculas(persona) {
  // var nombre = persona.nombre
  var { nombre } = persona
  console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(sacha)
imprimirNombreEnMayusculas(dario)
// imprimirNombreEnMayusculas({ nombre: 'Pepito' })
// imprimirNombreEnMayusculas({ apellido: 'Gomez' })

function imprimirNombreYEdad() {
  // Hola, me llamo Sacha y tengo 28 años
  // Hola, me llamo Darío y tengo 27 años
}
*/

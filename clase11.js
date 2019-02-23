var jose = {
  nombre: 'Jose',
  apellido: 'Aleman',
  edad: 23,
  ingeniero: true,
  dj: false,
  guitarrista: false,
  piloto:true
}

function imprimirSiEsMayorDeEdad(persona){
  if(persona.edad>17){
    //console.log(persona.nombre + ' es mayor de edad')
    console.log(`${persona.nombre} es mayor de edad`)
  }else{
    // console.log(persona.nombre + ' es menor de edad')
    console.log(`${persona.nombre} es menor de edad`)
  }
}

function mayorDeEdad (persona){
  if (persona.edad >17){
    return true
  }
}

/* var sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  edad: 28,
  ingeniero: false,
  cocinero: false,
  cantante: true,
  dj: false,
  guitarrista: false,
  drone: false
}

var juan = {
  nombre: 'Juan',
  apellido: 'Gomez',
  edad: 13
}

function imprimirProfesiones(persona) {
  console.log(`${persona.nombre} es:`)

  if (persona.ingeniero) {
    console.log('Ingeniero')
  } else {
    console.log('No es ingeniero')
  }

  if (persona.cocinero) {
    console.log('Cocinero')
  }

  if (persona.dj) {
    console.log('DJ')
  }

  if (persona.cantante) {
    console.log('Cantante')
  }

  if (persona.guitarrista) {
    console.log('Gutiarrista')
  }

  if (persona.drone) {
    console.log('Piloto de drone')
  }
}

const MAYORIA_DE_EDAD = 18

function esMayorDeEdad(persona) {
  return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeEdad(persona) {
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`)
  } else {
    console.log(`${persona.nombre} es menor de edad`)
  }
}
*/

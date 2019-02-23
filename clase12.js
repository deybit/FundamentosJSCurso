var jose = {
  nombre: 'Jose',
  apellido: 'Aleman',
  edad: 24,
  ingeniero: true,
  dj: false,
  guitarrista: false,
  piloto:true
}

function imprimirSiEsMayorDeEdad(persona){
  if(mayorDeEdad(persona)>17){
    //console.log(persona.nombre + ' es mayor de edad')
    console.log(`${persona.nombre} es mayor de edad`)
  }else{
    // console.log(persona.nombre + ' es menor de edad')
    console.log(`${persona.nombre} es menor de edad`)
  }
}

var mayorDeEdad4 = function (persona){
  if (persona.edad >17){
    return true
  }
}

var mayorDeEdad2 = (persona) => {
  if (persona.edad >17){
    return true
  }
}

//const mayorDeEdad3 = persona => persona.edad >= 18

const mayorDeEdad = ({ edad }) => edad >= 18
const menorDeEdad = ({ edad }) => !mayorDeEdad({ edad })

function verificarAcceso(persona){
  if (menorDeEdad(persona)){
    console.log('Acceso denegado')
  }else{
    console.log('Acceso permitido')
  }
}


/*Tdodos los codigos de mayorDeEdad son equivalentes */


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

// const esMayorDeEdad = function (persona) {
//   return persona.edad >= MAYORIA_DE_EDAD
// }
const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD

function imprimirSiEsMayorDeEdad(persona) {
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`)
  } else {
    console.log(`${persona.nombre} es menor de edad`)
  }
}

function permitirAcceso(persona) {
  if (!esMayorDeEdad(persona)) {
    console.log('ACCESO DENEGADO')
  }
}
*/

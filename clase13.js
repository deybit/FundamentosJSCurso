var jose = {
  nombre: 'Jose',
  apellido: 'Aleman',
  edad: 24,
  peso: 62
}

console.log(`Al principio de año ${jose.nombre} pesa ${jose.peso} kilogramos`)

const aumentarDePeso = (persona, incremento) => {
  persona.peso += incremento
}

const bajarDePeso = (persona, decremento) => {
  persona.peso -= decremento
}

for (var i = 1; i <= 365; i++ ){

  var random = Math.random()

  if (random < 0.25){
    aumentarDePeso(jose,Math.random())

  }else if ( random < 0.50){
    bajarDePeso(jose,Math.random())
  }

}

console.log(`Al final del año ${jose.nombre} pesa ${jose.peso.toFixed(2)} kilogramos`)






 /*
console.log(`Al inicio del año ${sacha.nombre} pesa ${sacha.peso}kg`)

// function aumentarDePeso (persona) {
//   return persona.peso += 200
// }
const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for (var i = 1; i <= DIAS_DEL_ANO; i++) {
  var random = Math.random()

  if (random < 0.25) {
    aumentarDePeso(sacha)
  } else if (random < 0.5) {
    adelgazar(sacha)
  }
}

console.log(`Al final del año ${sacha.nombre} pesa ${sacha.peso.toFixed(1)}kg`)
*/

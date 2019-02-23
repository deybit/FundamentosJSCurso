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
var i = 0
var meta = jose.peso -3
while (jose.peso > meta){
  //debugger
  i +=1
  var random = Math.random()
  if (random < 0.25){
    aumentarDePeso(jose,Math.random())
  }else if ( random < 0.50){
    bajarDePeso(jose,Math.random())
  }
}

console.log(`${jose.nombre} logro la meta y llego al peso de ${jose.peso.toFixed(2)} kilogramos en ${i} dias`)


/* var sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  edad: 28,
  peso: 75
}

console.log(`Al inicio del año ${sacha.nombre} pesa ${sacha.peso}kg`)

// function aumentarDePeso (persona) {
//   return persona.peso += 200
// }
const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = sacha.peso - 3
var dias = 0

while (sacha.peso > META) {
  if (comeMucho()) {
    aumentarDePeso(sacha)
  }
  if (realizaDeporte()) {
    adelgazar(sacha)
  }
  dias += 1
}

console.log(`Pasaron ${dias} días hasta que ${sacha.nombre} adelgazó 3kg`)
*/

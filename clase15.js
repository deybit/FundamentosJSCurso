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
do{
  //debugger
  i +=1
  var random = Math.random()
  if (random < 0.25){
    aumentarDePeso(jose,Math.random())
  }else if ( random < 0.50){
    bajarDePeso(jose,Math.random())
  }
}while(jose.peso > meta)

console.log(`${jose.nombre} logro la meta y llego al peso de ${jose.peso.toFixed(2)} kilogramos en ${i} dias`)


var contador = 0

const llueve = () => Math.random() < 0.25

do{
  contador++
}while(!llueve())

if (contador === 1){
  console.log(`Fui a ver si llovia ${contador} vez`)
}else console.log(`Fui a ver si llovia ${contador} veces`)

/* var contador = 0

const llueve = () => Math.random() < 0.25

do {
  contador++
} while (!llueve())

if (contador === 1) {
  console.log(`Fui a ver si llovía ${contador} vez`)
} else {
  console.log(`Fui a ver si llovía ${contador} veces`)
}
*/

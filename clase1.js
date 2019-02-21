console.log('Hola este es el primer texto')

var nombre = 'Deybit', apellido = 'Gutierrez'
var edad = 24
edad = '24 años'

console.log('Hola ' + nombre+ ' ' + apellido)
console.log('Tengo ' + edad + '')

var peso = 63

var nombreMayusculas = nombre.toUpperCase()
var apellidoMinusculas = apellido.toLowerCase()

console.log(nombreMayusculas.charAt(0))
console.log('Cantidad de letras de apellido ' + apellido.length)

var nombreCompleto = nombre +' '+ apellido

var nombreInterpolado = `${nombre} ${apellido}`

var caracterNombre = nombre.charAt(1) + nombre.charAt(2)
var caracterNombre2 = nombre.substr(1 , 4)

/* RETO: Pedir al usuario nombre y mostrar la ultima letra de su nombre */


var nLetras = nombre.length

console.log('La ultima letra de tu nombre es: ' + nombre.charAt(nLetras -1))

/* var nombre = 'Sacha', apellido = 'Lifszyc'
var edad = 28

edad = '28 años'

console.log('Hola ' + nombre + ' ' + apellido)
console.log('Tengo ' + edad)

var peso = 75
*/

function heredaDe(protoHijo, protoPadre){
  var fn = function () {} //Funcion dummy
  fn.protoype = protoPadre.prototype
  protoHijo.prototype = new fn //Creamos un objeto nuevo para no pisar a padre
  protoHijo.prototype.constructor = protoHijo
}

function Persona(nombre, apellido, estatura) {
  this.nombre = nombre
  this.apellido = apellido
  this.estatura = estatura
}

Persona.prototype.soyAlto = function(){
  if(this.estatura >= 180) console.log(`Mi nombre es ${this.nombre} y soy alt@`)
}

Persona.prototype.saludar = function(){
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

function Desarrollador(nombre, apellido){
  this.nombre = nombre
  this.apellido = apellido
}

var sacha = new Persona('Sacha', 'Diaz', 181)
var jose = new Persona('Jose', 'Arellano', 151)
var maria = new Persona('Maria', 'Hernandez', 191)
sacha.saludar() //Saluda al momento de ser creada
sacha.soyAlto()

heredaDe(Desarrollador, Persona)



/* function heredaDe(prototipoHijo, prototipoPadre) {
  var fn = function () {}
  fn.prototype = prototipoPadre.prototype
  prototipoHijo.prototype = new fn
  prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function () {
  return this.altura > 1.8
}

function Desarrollador(nombre, apellido) {
  this.nombre = nombre
  this.apellido = apellido
}

heredaDe(Desarrollador, Persona)

Desarrollador.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
}

*/
// var sacha = new Persona('Sacha', 'Lifszyc', 1.72)
// var erika = new Persona('Erika', 'Luna', 1.65)
// var arturo = new Persona('Arturo', 'Martinez', 1.89)

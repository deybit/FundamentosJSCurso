function Persona(nombre, apellido, estatura) {
  //console.log('Ejecucion en proceso')
  this.nombre = nombre
  this.apellido = apellido
  this.estatura = estatura
  //return this
}

Persona.prototype.soyAlto = function(){
  if(this.estatura >= 180) console.log(`Mi nombre es ${this.nombre} y soy alt@`)
}

Persona.prototype.saludar = function(){
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}



var sacha = new Persona('Sacha', 'Diaz', 181)
sacha.saludar() //Saluda al momento de ser creada
sacha.soyAlto()






/* function Persona(nombre, apellido) {
  this.nombre = nombre
  this.apellido = apellido
}

Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

var sacha = new Persona('Sacha', 'Lifszyc')
var erika = new Persona('Erika', 'Luna')
var arturo = new Persona('Arturo', 'Martinez')
*/

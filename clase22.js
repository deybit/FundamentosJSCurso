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



var sacha = new Persona('Sacha', 'Diaz', 181)
var jose = new Persona('Jose', 'Arellano', 151)
var maria = new Persona('Maria', 'Hernandez', 191)
sacha.saludar() //Saluda al momento de ser creada
sacha.soyAlto()









/* function Persona(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

Persona.prototype.saludar = () => {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = () => this.altura > 1.8

var sacha = new Persona('Sacha', 'Lifszyc', 1.72)
var erika = new Persona('Erika', 'Luna', 1.65)
var arturo = new Persona('Arturo', 'Martinez', 1.89)

sacha.soyAlto()
erika.soyAlto()
arturo.soyAlto()
*/

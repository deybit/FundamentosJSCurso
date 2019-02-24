class Persona {
  constructor(nombre, apellido, estatura){
    this.nombre = nombre
    this.apellido = apellido
    this.estatura = estatura
  }

  saludar(fn){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    if(fn){
      fn(this.nombre, this.apellido, false)
    }
  }

  soyAlto(){
      if(this.estatura >= 180) console.log(`Mi nombre es ${this.nombre} y soy alt@`)
  }

}

class Desarrollador extends Persona {
  constructor(nombre, apellido, estatura){
    super(nombre, apellido, estatura)
  }

  saludar(fn){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
    if(fn){
      fn(this.nombre, this.apellido, true)
    }
  }

}

function responderSaludo(nombre, apellido, esDev){
  console.log(`Buen dia ${nombre} ${apellido}`)
  if (esDev){
    console.log(`Que bueno es saberte desarrollador/a`)
  }
}

var sacha = new Persona('Sacha', 'Lifszyc', 1.72)
var erika = new Persona('Erika', 'Luna', 1.65)
var arturo = new Desarrollador('Arturo', 'Martinez', 1.89)

sacha.saludar(responderSaludo)
erika.saludar(responderSaludo)
arturo.saludar(responderSaludo)

/* class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }

  saludar(fn) {
    var { nombre, apellido } = this

    console.log(`Hola, me llamo ${nombre} ${apellido}`)
    if (fn) {
      fn(nombre, apellido)
    }
  }

  soyAlto() {
    return this.altura > 1.8
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura)
  }

  saludar(fn) {
    // var nombre = this.nombre
    // var apellido = this.apellido
    var { nombre, apellido } = this

    console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador/a`)
    if (fn) {
      fn(nombre, apellido, true)
    }
  }
}

function responderSaludo(nombre, apellido, esDev) {
  console.log(`Buen día ${nombre} ${apellido}`)
  if (esDev) {
    console.log(`Ah mirá, no sabía que eras desarrollador/a`)
  }
}

var sacha = new Persona('Sacha', 'Lifszyc', 1.72)
var erika = new Persona('Erika', 'Luna', 1.65)
var arturo = new Desarrollador('Arturo', 'Martinez', 1.89)

sacha.saludar()
erika.saludar(responderSaludo)
arturo.saludar(responderSaludo)
*/

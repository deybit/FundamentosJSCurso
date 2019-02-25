const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

//const lUrl = `${API_URL}${PEOPLE_URL.replace(':id','1')}`
const opts = { crossDomain: true }

/*const onResponse = function (persona){
  console.log(`Hola yo soy ${persona.name}`)
}
*/
function obtenerPersonaje(id, callback){
  const URL = `${API_URL}${PEOPLE_URL.replace(':id',id)}`

  $.get(URL, opts, callback).fail(function(){
    console.log(`Error: No se pudo buscar al personaje ${id}`)
  })


  /*$.get(URL, opts, function (persona){
    console.log(`Hola, yo soy ${persona.name}`)

    if (callback){
      callback()
    }*/


}

obtenerPersonaje(1, function(persona){
  console.log(`Hola, yo soy ${persona.name}`)

  obtenerPersonaje(2, function(persona){
    console.log(`Hola, yo soy ${persona.name}`)

    obtenerPersonaje(3, function(persona){
      console.log(`Hola, yo soy ${persona.name}`)

      obtenerPersonaje(4, function(persona){
        console.log(`Hola, yo soy ${persona.name}`)

        obtenerPersonaje(5, function(persona){
          console.log(`Hola, yo soy ${persona.name}`)
        })
      })
    })
  })
})


/* const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

function obtenerPersonaje(id, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

  $
    .get(url, opts, callback)
    .fail(() => {
      console.log(`Sucedió un error. No se pudo obtener el personaje ${id}`)
    })
}

obtenerPersonaje(1, function (personaje) {
  console.log(`Hola, yo soy ${personaje.name}`)

  obtenerPersonaje(2, function (personaje) {
    console.log(`Hola, yo soy ${personaje.name}`)

    obtenerPersonaje(3, function (personaje) {
      console.log(`Hola, yo soy ${personaje.name}`)

      obtenerPersonaje(4, function (personaje) {
        console.log(`Hola, yo soy ${personaje.name}`)

        obtenerPersonaje(5, function (personaje) {
          console.log(`Hola, yo soy ${personaje.name}`)

          obtenerPersonaje(6, function (personaje) {
            console.log(`Hola, yo soy ${personaje.name}`)

            obtenerPersonaje(7, function (personaje) {
              console.log(`Hola, yo soy ${personaje.name}`)
            })
          })
        })
      })
    })
  })
})
*/

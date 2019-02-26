const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

//const lUrl = `${API_URL}${PEOPLE_URL.replace(':id','1')}`
const opts = { crossDomain: true }

/*const onResponse = function (persona){
  console.log(`Hola yo soy ${persona.name}`)
}
*/
function obtenerPersonaje(id){
  return new Promise((resolve, reject) => {
    const URL = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $
    .get(URL, opts, function(data){
      resolve(data)
    })
    .fail(() => reject(id))

  })





  $
  .get(URL, opts, callback)
  .fail(function(){
        console.log(`Error: No se pudo buscar al personaje ${id}`)
    })


  /*$.get(URL, opts, function (persona){
    console.log(`Hola, yo soy ${persona.name}`)

    if (callback){
      callback()
    }*/



}

function onError(id){
  console.log(`Error obteniendo en el personaje ${id}`)
}

obtenerPersonaje(1)
  .then(function (persona){
    console.log(`El personaje 1 es ${persona.name}`)
  })
  .catch(onError)
//obtenerPersonaje(1, function(persona){
  //console.log(`Hola, yo soy ${persona.name}`)

  /*obtenerPersonaje(2, function(persona){
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
*/


/*const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

function obtenerPersonaje(id) {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $
      .get(url, opts, function (data) {
        resolve(data)
      })
      .fail(() => reject(id))
  })
}

function onError(id) {
  console.log(`Sucedió un error al obtener el personaje ${id}`)
}

obtenerPersonaje(1)
  .then(function (personaje) {
    console.log(`El personaje 1 es ${personaje.name}`)
  })
  .catch(onError)
*/

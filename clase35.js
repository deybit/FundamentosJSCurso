const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain: true }

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


}

function onError(id){
  console.log(`Error obteniendo en el personaje ${id}`)
}

async function obtenerPersonajes(){

  var ids = [1, 2, 3, 4, 5, 6, 7]
  var promesas = ids.map((id) => obtenerPersonaje(id))
  try {
    var personajes = await Promise.all(promesas)
    console.table(personajes)
  }catch (id){
    onError(id)
  }

  Promise
    .all(promesas)
    .then(persona => console.log(persona))
    .catch(onError)

}

obtenerPersonajes()

/* const API_URL = 'https://swapi.co/api/'
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

async function obtenerPersonajes() {
  var ids = [1, 2, 3, 4, 5, 6, 7]
  var promesas = ids.map(id => obtenerPersonaje(id))
  try {
    var personajes = await Promise.all(promesas)
    console.log(personajes)
  } catch (id) {
    onError(id)
  }
}

obtenerPersonajes()
*/

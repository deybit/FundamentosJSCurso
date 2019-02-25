const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

//const lUrl = `${API_URL}${PEOPLE_URL.replace(':id','1')}`
const opts = { crossDomain: true }

const onResponse = function (persona){
  console.log(`Hola yo soy ${persona.name}`)
}

function obtenerPersonaje(id){
  const URL = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
  $.get(URL, opts, onResponse)
}

obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)
obtenerPersonaje(4)
obtenerPersonaje(5)
obtenerPersonaje(6)
//$.get(lUrl, opts, onResponse)





/* const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

const onPeopleResponse = function (persona) {
  console.log(`Hola, yo soy ${persona.name}`)
}

function obtenerPersonaje(id) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
  $.get(url, opts, onPeopleResponse)
}

obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)
*/

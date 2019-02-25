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

  $.get(URL, opts, function (persona){
    console.log(`Hola yo soy ${persona.name}`)

    if (callback){
      callback()
    }
  })

}

obtenerPersonaje(1, function(){
  obtenerPersonaje(2, function(){
    obtenerPersonaje(3, function(){
      obtenerPersonaje(4, function(){
        obtenerPersonaje(6)
      })
    })
  })
})


/*obtenerPersonaje(2)
obtenerPersonaje(3)
obtenerPersonaje(4)
obtenerPersonaje(5)
obtenerPersonaje(6)
$.get(lUrl, opts, onResponse)*/




/* const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

function obtenerPersonaje(id, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

  $.get(url, opts, function (persona) {
    console.log(`Hola, yo soy ${persona.name}`)

    if (callback) {
      callback()
    }
  })
}

obtenerPersonaje(1, function () {
  obtenerPersonaje(2, function () {
    obtenerPersonaje(3, function () {
      obtenerPersonaje(4, function () {
        obtenerPersonaje(5, function () {
          obtenerPersonaje(6, function () {
            obtenerPersonaje(7)
          })
        })
      })
    })
  })
})
*/

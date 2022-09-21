const japflix = " https://japceibal.github.io/japflix_api/movies-data.json"
const boton = document.getElementById("btnBuscar")
const busqueda = document.getElementById("inputBuscar")


async function getData() {
    let data = await fetch(japflix)
    data = await data.json()
    arreglo = data
    //console.log(arreglo)
    boton.addEventListener('click', () => {
    })
}

function buscar(arr) {
    if (busqueda.value) {
        for (let peli of arr) {
            if (peli.title.include(busqueda.value) ||
                peli.tagline.include(busqueda.value) ||
                peli.overview.include(busqueda.value)){
                    
                }
  }
    }
}

///document.addEventListener("DOMContentLoaded",() =>{
//    getData()
//} 




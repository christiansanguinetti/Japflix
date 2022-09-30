const japflix = "https://japceibal.github.io/japflix_api/movies-data.json"
const boton = document.getElementById("btnBuscar")
const busqueda = document.getElementById("inputBuscar")
const contenedor = document.getElementById("lista")


function cargar(arr) {
    for (let peli of arr) {
        console.log(peli.title);
    }
}
//let peli_genero = {}
//let genresArray = movie.genres
//for (const genre of genresArray) {
//   peli_genero += JSON.stringify(genre.name);}


function buscar(arr) {
    contenedor.innerHTML = "";
    if (busqueda.value) {
        for (let peli of arr) {
            if (peli.title.toLowerCase().includes(busqueda.value.toLowerCase()) ||
                peli.tagline.toLowerCase().includes(busqueda.value.toLowerCase()) ||
                peli.overview.toLowerCase().includes(busqueda.value.toLowerCase())
                //peli_genero.toLowerCase().includes(busqueda.value.toLowerCase())
            ) {
                contenedor.innerHTML += `<br> <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop"><div style="color: white;" onClick ="id(peli)">${peli.title} ${showStars(peli.vote_average/2)} </h4> <p style="color: white;">${peli.tagline}</p></div></button>

                `;
                console.log(peli.title);
            }
        }
    }
}

const pongo_titulo = document.getElementById("offcanvasTopLabel") 
function id (peli){
    localStorage.setItem("peliid", peli.id);
}


fetch(japflix).then(function (response) {
    return response.json();
}).then(function (data) {
    cargar(data);
    boton.addEventListener('click', () => {
        buscar(data);
    })
})

function showStars(rate){
    if (rate == 1)
    return `
    <span style="color:yellow">★</span><span style="color:grey">☆☆☆☆</span>
    `
    if (rate ==2 )
    return `
    <span style="color:yellow">★★</span><span style="color:grey">☆☆☆</span>`
    if (rate ==3)
    return `
    <span style="color:yellow">★★★</span><span style="color:grey">☆☆</span>`
    if (rate == 4)
    return `
    <span style="color:yellow">★★★★</span><span style="color:grey">☆</span>`
    else
    return `
    <span style="color:yellow">★★★★★</span>`        
    }
  
  
  
  
  
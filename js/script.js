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
                contenedor.innerHTML += `<br> <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop"><div style="color: white;">${peli.title} ${showStars(peli.vote_average/2)} </h4> <p style="color: white;">${peli.tagline}</p></div></button>

                <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                  <div class="offcanvas-header">
                    <div> <h5 class="offcanvas-title" id="offcanvasTopLabel">${peli.title}</h5> </div> <br>
                    <div><p>${peli.overview}</p> </div>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div class="offcanvas-body">
                  </div>
                </div>
                `;
                console.log(peli.title);
            }
        }
    }
}
function menu(){
    contenedor.innerHTML += ` 
    <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Toggle top offcanvas</button>

<div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasTopLabel">Offcanvas top</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
  </div>
</div>
    `
    alert("funciono" )
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
  
  
  
  
  
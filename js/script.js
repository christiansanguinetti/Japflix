const japflix = "https://japceibal.github.io/japflix_api/movies-data.json"
const boton = document.getElementById("btnBuscar")
const busqueda = document.getElementById("inputBuscar")
const contenedor = document.getElementById("lista")


function cargar(arr) {
        for (let peli of arr) {
             console.log(peli.title);  
                }
}
  
function buscar(arr){
    contenedor.innerHTML = "";
    if (busqueda.value) {
        for (let peli of arr) {
      if ( peli.title.toLowerCase().includes(busqueda.value.toLowerCase()) ||
      peli.tagline.toLowerCase().includes(busqueda.value.toLowerCase()) ||
      peli.overview.toLowerCase().includes(busqueda.value.toLowerCase())
      ){
        contenedor.innerHTML += `<div><p style="color: white;">${peli.title}</p></div>`;
        console.log(peli.title);
        }}}}
       // busqueda.value.toLowerCase().includes(peli.title.toLowerCase()) 
    //    || 
    //   busqueda.value.toLowerCase().includes(peli.tagline.toLowerCase()) ||
    //   busqueda.value.toLowerCase().includes(peli. overview.toLowerCase())
     
    //              for (let genero of peli.genres) {
    //                 if(genero.name.toLowerCase() == busqueda.value.toLowerCase()){
    //                     console.log(peli.title);
    //                 }
                    
    //              }
    //         }
    //     }
    // }

    

   

    
fetch(japflix).then(function (response) {
    return response.json();
}).then(function (data) {
    cargar(data);
    boton.addEventListener('click', () => {
        buscar(data);
       })
});

// async function getData() {
//     let data = await fetch(japflix)
//     data = await data.json()
//     arreglo = data
//     //console.log(arreglo)

// }



function showData(){
   for (pelicula of arr)
    contenedor.innerHTML += `
    
   `
}





///document.addEventListener("DOMContentLoaded",() =>{
//    getData()
//} 




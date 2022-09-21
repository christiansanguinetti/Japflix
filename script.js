const japflix = " https://japceibal.github.io/japflix_api/movies-data.json"


async function getData() {
    const data = await fetch(japflix)
    data = data.json()
}

document.addEventListener("DOMContentLoaded", getData()
)

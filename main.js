  const imagesAsObjects = [
    {
      title: "Forest",
      img: "https://www.w3schools.com/css/img_forest.jpg"
    },
    {
      title: "5 terre",
      img: "https://www.w3schools.com/css/img_5terre.jpg"
    },
    {
      title: "Northern lights",
      img: "https://www.w3schools.com/css/img_lights.jpg"
    },
    {
      title: "Montains",
      img: "https://www.w3schools.com/css/img_mountains.jpg"
    }
  ]

const galeria = document.querySelector("#container")

  let nuevoHTML = " "
  for (let i = 0; i < imagesAsObjects.length; i++) {
      nuevoHTML = nuevoHTML + ` 
      <div class="card">
      <img src="${imagesAsObjects[i].img}">
    <div class="desc">${imagesAsObjects[i].title}</div>
  </div>`
      
  }

  galeria.innerHTML = nuevoHTML

const imagenes = document.getElementsByClassName("card")
const modal = document.getElementById("containerModal")

  for (let i = 0; i < imagenes.length; i++) {
      imagenes[i].onclick = () => {
          modal.innerHTML = `
          <div id ="myModal" class = "modal nomostrar">
          <h3 class = "titulo">${imagesAsObjects[i].title}</h3>
          <div class = "imagen"><img src="${imagesAsObjects[i].img}"></div>
          <button id = "cerrarModal">X</button>
          </div> 
          `
        const modalOpen = document.getElementById("myModal")
        modalOpen.classList.remove("nomostrar")

        const botonCerrarModal = document.getElementById("cerrarModal")
        botonCerrarModal.onclick = () => {
            modalOpen.classList.add("nomostrar")
        } 
      }
   
  }




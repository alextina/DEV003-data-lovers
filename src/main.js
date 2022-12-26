import { sortData } from './data.js'; //impotando funciones
import data from './data/ghibli/ghibli.js'; //importando data desde ghibli.js

//llamando a la data desde ghibli.js
const ghibliAnimations = data.films;

//función para mostrar las tarjetas de películas
function showAnimations() {
  let movies = "";
  ghibliAnimations.forEach((elements, i) => {
    movies +=
      `<div class="caja">
      <img class="poster" src=${data.films[i].poster} />
      <h3>${data.films[i].title}</h3>
      <p>Director: ${data.films[i].director}</p>
      <p>Producer: ${data.films[i].producer}</p>
      <p>Release date: ${data.films[i].release_date}</p>
      </div>`;
  });
  document.getElementById("animations").innerHTML = movies;
}
showAnimations(ghibliAnimations);

//función para mostrar el orden
document.getElementById("order").addEventListener("change", showOrder);

function showOrder() {
  const orderOption = document.getElementById("order").value;
  const orderResult = sortData(ghibliAnimations, orderOption);
  showAnimations(orderResult);
}

//botón totoro
document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp() {
  const currentScroll = document.documentElement.scrollTop;
  if (currentScroll > 0) {
    window.scrollTo(0, 0);
  }
}
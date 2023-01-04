import { filterDataByDirector, filterDataByProducer, sortData } from './data.js'; //impotando funciones
import data from './data/ghibli/ghibli.js'; //importando data desde ghibli.js

//llamando a la data desde ghibli.js
const ghibliAnimations = data.films;

//función para mostrar las tarjetas de películas
function showAnimations() {
  let movies = "";
  ghibliAnimations.forEach((elements, i) => {
    movies +=
      `<div class="box">
      <img class="poster" src=${data.films[i].poster} />
      <h3>${data.films[i].title}</h3>
      <p>Director: ${data.films[i].director}</p>
      <p>Producer: ${data.films[i].producer}</p>
      <p>Release date: ${data.films[i].release_date}</p>
      <button id="${data.films[i].id}" class="buttonSecondPage">See more</button>
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

//función para filtrar por directores (funciona con el change y muestra en la consola)
document.getElementById("director").addEventListener("change", showFilterByDirector);

function showFilterByDirector() {
  const filterOption = document.getElementById("director").value;
  const filterResult = filterDataByDirector(ghibliAnimations, filterOption);
  //showAnimations(filterResult);
  showAnimations(filterResult);
}

//función para filtrar por productores (funciona con el change y muestra en la consola)
document.getElementById("producer").addEventListener("change", showFilterByProducer);

function showFilterByProducer() {
  const filterOption = document.getElementById("producer").value;
  const filterResult = filterDataByProducer(ghibliAnimations, filterOption);
  showAnimations(filterResult);
}

//mostrando y ocultando segunda página (por película)
//mostrando 
const buttonSecondPage = document.querySelectorAll(".buttonSecondPage");
buttonSecondPage.forEach((el)=> el.addEventListener("click", () => {
  document.getElementById("secondPage").style.display = "block";
  document.getElementById("firstPage").style.display = "none";
}));

//ocultando
document.getElementById("buttonGoBack").addEventListener("click", () => {
  document.getElementById("secondPage").style.display = "none";
  document.getElementById("firstPage").style.display = "block";
  //window.location.reload(true);
});

//botón totoro
document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp() {
  const currentScroll = document.documentElement.scrollTop;
  if (currentScroll > 0) {
    window.scrollTo(0, 0);
  }
}
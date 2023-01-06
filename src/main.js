import { computeStats, filterDataByDirector, filterDataByProducer, getData, sortData } from './data.js';
import { cleanDirector, cleanProducer, cleanSort } from './clean.js';

const resultData = getData();

//función para mostrar las tarjetas de películas
function showAnimations(dataSet) {
  let movies = "";
  dataSet.forEach((element) => {
    movies +=
      `<div class="box">
      <img class="poster" src=${element.poster} />
      <h3>${element.title}</h3>
      <p>Director: ${element.director}</p>
      <p>Producer: ${element.producer}</p>
      <p>Release date: ${element.release_date}</p>
      <button id="${element.id}" class="buttonSecondPage">See more</button>
      </div>`;
  });
  document.getElementById("animations").innerHTML = movies;
}
showAnimations(resultData);

//función para mostrar el orden
document.getElementById("order").addEventListener("change", showOrder);

function showOrder() {
  const orderOption = document.getElementById("order").value;
  const orderResult = sortData(resultData, orderOption);
  showAnimations(orderResult);
  document.getElementById("stats").style.display = "none"
  cleanSort();
}

//función para filtrar por directores
document.getElementById("director").addEventListener("change", showFilterByDirector);

function showFilterByDirector() {
  const filterOption = document.getElementById("director").value;
  const filterResult = filterDataByDirector(resultData, filterOption);
  const percentage = computeStats(resultData, filterResult);
  showAnimations(filterResult);
  showStats(percentage, filterOption);
  document.getElementById("stats").style.display = "block"
  cleanDirector();
}

//función para filtrar por productores
document.getElementById("producer").addEventListener("change", showFilterByProducer);

function showFilterByProducer() {
  const filterOption = document.getElementById("producer").value;
  const filterResult = filterDataByProducer(resultData, filterOption);
  const percentage = computeStats(resultData, filterResult);
  showAnimations(filterResult);
  showStats(percentage, filterOption);
  document.getElementById("stats").style.display = "block";
  cleanProducer();
}

//función para mostrar estadísticas
function showStats(percentage, name) {
  const stats = (`${name} has participated in ${percentage}% of the Studio Ghibli films.`);
  const showStats = document.getElementById("stats").innerHTML = stats;
  return showStats;
}

//mostrando segunda página (por película)
const buttonSecondPage = document.querySelectorAll(".buttonSecondPage");
buttonSecondPage.forEach((el) => el.addEventListener("click", () => {
  document.getElementById("secondPage").style.display = "block";
  document.getElementById("firstPage").style.display = "none";
}));

//ocultando segunda página (por película)
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
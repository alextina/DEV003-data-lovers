import { computeStats, filterDataByDirector, filterDataByProducer, getData, sortData } from './data.js'; //impotando funciones

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
}

//función para filtrar por directores (funciona con el change y muestra en la consola)
document.getElementById("director").addEventListener("change", showFilterByDirector);

function showFilterByDirector() {
  const filterOption = document.getElementById("director").value;
  const filterResult = filterDataByDirector(resultData, filterOption);
  const percentage = computeStats(resultData, filterResult);
  showAnimations(filterResult);
  showStats(percentage);
}

//función para filtrar por productores (funciona con el change y muestra en la consola)
document.getElementById("producer").addEventListener("change", showFilterByProducer);

function showFilterByProducer() {
  const filterOption = document.getElementById("producer").value;
  const filterResult = filterDataByProducer(resultData, filterOption);
  const percentage = computeStats(resultData, filterResult);
  showAnimations(filterResult);
  showStats(percentage);
}

function showStats(percentage) {
  const stats = (`He has participated in ${percentage}% of the Studio Ghibli films.`);
  const showStats = document.getElementById("stats").innerHTML = stats;
  return showStats;
}

//mostrando y ocultando segunda página (por película)
//mostrando 
const buttonSecondPage = document.querySelectorAll(".buttonSecondPage");
buttonSecondPage.forEach((el) => el.addEventListener("click", () => {
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
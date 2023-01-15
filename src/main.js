import { computeStats, filterById, filterDataByDirector, filterDataByProducer, getData, sortData } from './data.js';
import { cleanDirector, cleanProducer, cleanSort } from './clean.js';

const resultData = getData();

//función para mostrar las tarjetas de películas
function showAnimations(dataSet) {
  let movies = "";
  dataSet.forEach((element) => {
    movies +=
      `<div class="box">
      <img src=${element.poster} />
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
  const director = document.getElementById("director").name;
  showAnimations(filterResult);
  showStats(percentage, filterOption, director);
  document.getElementById("stats").style.display = "block"
  cleanDirector();
}

//función para filtrar por productores
document.getElementById("producer").addEventListener("change", showFilterByProducer);

function showFilterByProducer() {
  const filterOption = document.getElementById("producer").value;
  const filterResult = filterDataByProducer(resultData, filterOption);
  const percentage = computeStats(resultData, filterResult);
  const producer = document.getElementById("producer").name;
  showAnimations(filterResult);
  showStats(percentage, filterOption, producer);
  document.getElementById("stats").style.display = "block";
  cleanProducer();
}

//función para mostrar estadísticas
function showStats(percentage, name, job) {
  const stats = (`${name} has participated in ${percentage} % of the Studio Ghibli films as a ${job}.`);
  const showStats = document.getElementById("stats").innerHTML = stats;
  return showStats;
}

//mostrando segunda página (por película)
const buttonSecondPage = document.querySelectorAll(".buttonSecondPage");
buttonSecondPage.forEach((el) => el.addEventListener("click", e => {
  const id = e.target.getAttribute("id");
  //console.log("Se ha clickeado el id " + id);
  show(id);
  document.getElementById("secondPage").style.display = "block";
  document.getElementById("firstPage").style.display = "none";
}));

function show(id) {
  //console.log(id + " << probando id")
  const filterData = filterById(resultData, id);
  const generalInfo = `
<div id="generalInfo" class="generalInfo">
  <div class="column">
    <img src="${filterData[0].poster}">
    <p> Rate Score: ${filterData[0].rt_score}</p>
  </div>
  <div id="info" class="info">
   <h1>${filterData[0].title}</h1>
   <p> <strong> Director: </strong> ${filterData[0].director}</p>
   <p> <strong> Producer: </strong> ${filterData[0].producer}</p>
   <p> <strong> Release Date: </strong> ${filterData[0].release_date}</p>
    <p>
    ${filterData[0].description}
    </p>
  </div>
</div>

  <div>
    <img id="buttonGoBack" class="buttonGoBack" src="button-totoro-go-back.png" />
  </div>
  `
  document.getElementById("secondPage").innerHTML = generalInfo;
  
  //ocultando segunda página (por película)
  document.getElementById("buttonGoBack").addEventListener("click", () => {
    //document.getElementById("secondPage").style.display = "none";
    //document.getElementById("firstPage").style.display = "block";
    window.location.reload(true);
  });
}

//botón totoro
const buttonUp = document.getElementById("button-up");
buttonUp.addEventListener("click", scrollUp);

function scrollUp() {
  const currentScroll = document.documentElement.scrollTop;
  if (currentScroll > 0) {
    window.requestAnimationFrame(scrollUp);
    window.scrollTo(0, currentScroll - (currentScroll / 10));
  }
}

window.onscroll = function() {
  const scroll = document.documentElement.scrollTop;
  if (scroll > 800) {
    buttonUp.style.transform = "scale(1)";
  } else if (scroll < 800) {
    buttonUp.style.transform = "scale(0)";
  }
};

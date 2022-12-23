import { example } from './data.js';

import data from './data/ghibli/ghibli.js';

console.log(example, data);

document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp(){
  const currentScroll = document.documentElement.scrollTop;
  if (currentScroll > 0){
    window.scrollTo (0,0);
  }
}
const movie = data.films
// console.log(movie);

// const movieOne = movie[0];
// console.log(movieOne);

// const tittle = movieOne.title;
// console.log(tittle);

// const director1 = data.films[0].director
// console.log(director1);

// const director5 = data.films[4].director
// console.log(director5);

// const poster = data.films[0].poster;
// const title = data.films[0].title;
// const director = data.films[0].director; 
// const producer = data.films[0].producer; 
// const year = data.films[0].release_date; 

// console.log(poster, title, director, producer, year);

//ejecutar una función por cada elemento que tenga mi arreglo
// movie.forEach((element, i) => {
//    console.log(`
//    Title: ${data.films[i].title}
//    Poster: ${data.films[i].poster}
//    `)
// });

// movie.forEach((element, i) => {
//     console.log(`
//     <img src=${data.films[i].poster}>
//     <h1> Title: ${data.films[i].title}</h1>
//     <p>Director: ${data.films[i].director}</p>
//     <p>Producer: ${data.films[i].producer}</p>
//     <p>Year: ${data.films[i].release_date}</p>
//     `);
//  });


const ghibliMovies = document.getElementById("movies");

let movies = "";
movie.forEach((element, i) => {
  movies+=
    `<div class="caja">
      <img class="poster" src=${data.films[i].poster} />
      <h3>${data.films[i].title}</h3>
      <p>Director: ${data.films[i].director}</p>
      <p>Producer: ${data.films[i].producer}</p>
      <p>Release date: ${data.films[i].release_date}</p>
      </div>`;
});
ghibliMovies.innerHTML = movies;

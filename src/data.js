//función para ordenar datos
import data from './data/ghibli/ghibli.js'; //importando data desde ghibli.js

export function getData(){
  const finalData = data.films;
  return finalData;
}

export const sortData = (data, condition) => {
  let sortMovies = "";
  if (condition === "firstMovies") {
    sortMovies = data.sort((a, b) => {
      if (a.release_date < b.release_date) {
        return -1;
      } if (a.release_date > b.release_date) {
        return 1;
      } if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      } if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      }
      return 0;
    })
  } else if (condition === "lastMovies") {
    sortMovies = data.sort((a, b) => {
      if (a.release_date > b.release_date) {
        return -1;
      } if (a.release_date < b.release_date) {
        return 1;
      } if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      } if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      }
      return 0;
    })
  } else if (condition === "az") {
    sortMovies = data.sort((a, b) => {
      const firstParameter = a.title.toLowerCase();
      const secondParameter = b.title.toLowerCase();
      return (firstParameter < secondParameter) ? -1 : (firstParameter > secondParameter) ? 1 : 0;
    })
  } else {
    sortMovies = data.sort((a, b) => {
      const firstParameter = a.title.toLowerCase();
      const secondParameter = b.title.toLowerCase();
      return (firstParameter > secondParameter) ? -1 : (firstParameter < secondParameter) ? 1 : 0;
    })
  } return sortMovies;
};

export const filterDataByDirector = (data, condition) => {
  const filterBy = data.filter((data) => {
    if (condition === data.director) {
      return true;
    } else {
      return false;
    }
  });
  return filterBy;
};

export const filterDataByProducer = (data, condition) => {
  const filterBy = data.filter((data) => {
    if (condition === data.producer) {
      return true;
    } else {
      return false;
    }
  });
  return filterBy;
};
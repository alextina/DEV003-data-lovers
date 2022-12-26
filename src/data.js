//función para ordenar datos
export const sortData = (data, condition) => {
  let dataOrdenada = "";
  if (condition === "firstMovies") {
    dataOrdenada = data.sort((a, b) => {
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
    dataOrdenada = data.sort((a, b) => {
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
    dataOrdenada = data.sort((a, b) => {
      const firstParameter = a.title.toLowerCase();
      const secondParameter = b.title.toLowerCase();
      return (firstParameter < secondParameter) ? -1 : (firstParameter > secondParameter) ? 1 : 0;
    })
  } else {
    dataOrdenada = data.sort((a, b) => {
      const firstParameter = a.title.toLowerCase();
      const secondParameter = b.title.toLowerCase();
      return (firstParameter > secondParameter) ? -1 : (firstParameter < secondParameter) ? 1 : 0;
    })
  } return dataOrdenada;
};
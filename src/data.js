//función de orden por año de estreno
export const sortDataRelease = (data, condition) => {
  let dataOrdenadaA = "";
  if (condition === "firstMovies") {
    dataOrdenadaA = data.sort((a, b) => {
      const firstParameter = a.release_date;
      const secondParameter = b.release_date;
      return (firstParameter < secondParameter) ? -1 : (firstParameter > secondParameter) ? 1 : 0;
    })
  } else {
    dataOrdenadaA = data.sort((a, b) => {
      const firstParameter = a.release_date;
      const secondParameter = b.release_date;
      return (firstParameter > secondParameter) ? -1 : (firstParameter < secondParameter) ? 1 : 0;
    })
  } return dataOrdenadaA;
};

//función de orden alfabético
export const sortDataAlph = (data, condition) => {
  let dataOrdenadaB = "";
  if (condition === "az") {
    dataOrdenadaB = data.sort((a, b) => {
      const firstParameter = a.title.toLowerCase();
      const secondParameter = b.title.toLowerCase();
      return (firstParameter < secondParameter) ? -1 : (firstParameter > secondParameter) ? 1 : 0;
    })
  } else {
    dataOrdenadaB = data.sort((a, b) => {
      const firstParameter = a.title.toLowerCase();
      const secondParameter = b.title.toLowerCase();
      return (firstParameter > secondParameter) ? -1 : (firstParameter < secondParameter) ? 1 : 0;
    })
  } return dataOrdenadaB;
};

// export const sortData = (sortData, ghibliAnimations) => {
//     if (sortData === "firstMovies") {
//       ghibliAnimations.sort((a, b) => {
//         let firstParameter = a.release_date;
//         let secondParameter = b.release_date;
//         return (firstParameter < secondParameter) ? -1 : (firstParameter > secondParameter) ? 1 : 0;
//       })
//     }
//     if (sortData === "lastMovies") {
//       ghibliAnimations.sort((a, b) => {
//         let firstParameter = a.release_date;
//         let secondParameter = b.release_date;
//         return (firstParameter > secondParameter) ? -1 : (firstParameter < secondParameter) ? 1 : 0;
//       })
//     }
//     return ghibliAnimations;
//   };

//   //se ve la página pero no corre
//    export const sortData = (sortData, ghibliAnimations) => {
//        if (sortData === "firstMovies") {
//          ghibliAnimations.sort((a, b) => {
//            if (a.release_date < b.release_date) {
//              return 1;
//            } if (a.release_date > b.release_date) {
//              return -1;
//            } if (a.title.toLowerCase() < b.title.toLowerCase()) {
//              return 1;
//            } if (a.title.toLowerCase() > b.title.toLowerCase()) {
//              return -1;
//            }
//            return 0;
//          })
//        } else if (sortData === "lastMovies") {
//          ghibliAnimations.sort((a, b) => {
//            if (a.release_date > b.release_date) {
//              return 1;
//            } if (a.release_date < b.release_date) {
//              return -1;
//            } if (a.title.toLowerCase() > b.title.toLowerCase()) {
//              return 1;
//            } if (a.title.toLowerCase() < b.title.toLowerCase()) {
//              return -1;
//            }
//            return 0;
//          })
//        }
//      };

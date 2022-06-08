import { photographerFactory } from '../factories/photographer.js';
import { getPhotographers } from '../utils/api.js';

// Fonction permet de récuperer la valeur ds le query string de l'URL
function getParameterId(parameterName) {
  const parameters = new URLSearchParams(window.location.search);
  return parseInt(parameters.get(parameterName), 10);
}

const photographerId = getParameterId('id'); // Stock la valeur de ‘id’
console.log(photographerId);

/// ////////// test //////////////

// Récupère les données du fichier json et les retourne dans le bon format
// async function getPhotographers() {
//   const res = await fetch('data/photographers.json');
//   const data = await res.json();
//   const photographers = data;
//   console.log(photographers);
//   return photographers;
// }

//
// async function displayData(photographers) {
//   const photographHeader = document.querySelector('.photograph-header');

//   photographers.forEach((photographer) => {
//     const photographerModel = photographerFactory(photographer);
//     const userHeaderDOM = photographerModel.getUserHeaderDOM();
//     photographHeader.innerHTML = userHeaderDOM;
//     console.log(photographerModel);
//   });
// }

async function displayData(photographers) {
  const photographHeader = document.querySelector('.photograph-header');

  const photographerModel = photographerFactory(photographers);
  const userHeaderDOM = photographerModel.getUserHeaderDOM();
  photographHeader.innerHTML = userHeaderDOM;
  console.log(photographerModel);
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  const onePhotographer = photographers.find((o) => o.id === photographerId);
  displayData(onePhotographer);
}

init();

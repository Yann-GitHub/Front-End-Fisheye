// Récupère les données du fichier json et les retourne dans le bon format
// async function getPhotographers() {
//   const res = await fetch('data/photographers.json');
//   const data = await res.json();
//   const photographers = data;
//   console.log(photographers);
//   return photographers;
// }

import { photographerFactory } from '../factories/photographer.js';
import { getPhotographers } from '../utils/api.js';

//
async function displayData(photographers) {
  const photographersSection = document.querySelector('.photographer_section');

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
    console.log(photographerModel);
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();

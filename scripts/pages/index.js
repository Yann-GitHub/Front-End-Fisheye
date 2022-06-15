// Import des fichiers Javascript via les modules natifs de JS
import { photographerFactory } from '../factories/photographer.js';
import { getPhotographers } from '../utils/api.js';

// Fonction qui prend en paramètre les datas récupérées via api.js sous forme d'objet
// via la factory on génère un template (methode getUserCardDOM) pour chq photographe et on l'injecte dans la div qui a la classe .photographer_section
async function displayData(photographers) {
  const photographersSection = document.querySelector('.photographer_section');

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
    // console.log(photographerModel);
  });
}

// Fonction appelée au chargement de la page
// Elle est en charge d'executer les 2 functions précédentes (récupération de data et génère template pour chq photographe)
async function init() {
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();

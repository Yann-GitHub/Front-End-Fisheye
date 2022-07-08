// Import des fichiers Javascript via les modules natifs de JS
import { photographerFactory } from '../factories/photographer.js';
import { getPhotographers } from '../utils/api.js';

// Fonction qui prend en paramètre les datas récupérées via api.js
// Via la factory (photographer.js) on génère un template (methode getUserCardDOM) et on l'injecte dans la div qui a la classe '.photographer_section'
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
// Elle récupère ds 1 premier temps les datas du fichier json via un Fetch
// Elle appelle la fonction précédente (displayData) pour générer les templates correspondant et les injecter dans la page Html
async function init() {
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();

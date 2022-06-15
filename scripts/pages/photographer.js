// Import des fichiers Javascript via les modules natifs de JS
import { photographerFactory } from '../factories/photographer.js';
import { getPhotographers } from '../utils/api.js';
import { mediaFactory } from '../factories/media.js';

// Fonction permet de récuperer la valeur ds le query string de l'URL
function getParameterId(parameterName) {
  const parameters = new URLSearchParams(window.location.search);
  return parseInt(parameters.get(parameterName), 10);
}

// Stock la valeur de ‘id’ dans l'url(ex: ?id=243)
const photographerID = getParameterId('id');
// console.log(photographerId);

// Fonction identique à celle sur index.js
// Elle prend en paramètre les datas du photographe dont l'id est précisée dans l'url
// via la factory on génère un template(methode getUserHeaderDOM) et on l'injecte dans la div qui a la classe .photographer-header
async function displayData(photographers) {
  const photographHeader = document.querySelector('.photograph-header');

  const photographerModel = photographerFactory(photographers);
  const userHeaderDOM = photographerModel.getUserHeaderDOM();
  photographHeader.innerHTML = userHeaderDOM;
  console.log(photographerModel);
}

/// / testttttt  ///
async function displayMedia(media) {
  const photographerGrid = document.getElementById('photographer-grid');

  media.forEach((elt) => {
    if (elt.hasOwnProperty('video')) {
      const mediaModel = mediaFactory(elt);
      const userVideoCardDom = mediaModel.getUserVideoCardDOM();
      photographerGrid.innerHTML += userVideoCardDom;
      // console.log(mediaModel);
    } else {
      const mediaModel = mediaFactory(elt);
      const userImageCardDom = mediaModel.getUserImageCardDOM();
      photographerGrid.innerHTML += userImageCardDom;
      // console.log(mediaModel);
    }
  });
}

// Fonction appelée au chargement de la page
// Elle est en charge d'executer les 2 functions précédentes (récupération de data et génère template pour chq photographe)
// Avant de générer le template on utilise la methode find chargée de selectionner le photographe en fonction de son id
async function init() {
  const { photographers, media } = await getPhotographers();

  const photographerById = photographers.find((o) => o.id === photographerID);
  displayData(photographerById);

  // const mediaById = media.find((o) => o.photographerId === photographerID);
  const mediaById = media.filter((el) => el.photographerId === photographerID);
  displayMedia(mediaById);
}

init();

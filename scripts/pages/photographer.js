// Import des fichiers Javascript via les modules natifs de JS
import { getPhotographers } from '../utils/api.js';
import { photographerFactory } from '../factories/photographer.js';
import { mediaFactory } from '../factories/media.js';
import { likeManagement } from '../utils/likeCounter.js';
import { modal } from '../utils/contactForm.js';
import { sortMedias } from '../utils/sortMedias.js';
import { lightbox } from '../utils/lightbox.js';

// Fonction permet de récuperer la valeur ds le query string de l'URL
// Puis on stocke la valeur de l'id ds une variable (ex: ?id=243)
function getParameterId(parameterName) {
  const parameters = new URLSearchParams(window.location.search);
  return parseInt(parameters.get(parameterName), 10);
}

const photographerUrlId = getParameterId('id');
// console.log(photographerId);

// La fonction prend en paramètre les datas du photographe dont l'id est précisée dans l'url, et la somme de tous ses likes
// via la factory (photographer.js) on génère un template (methode getUserHeaderDOM) et on l'injecte dans la div qui a la classe '.photographer-header'
// via la factory (photographer.js) on génère un template (methode getUserLikesPrice) et on l'injecte dans la div qui a la classe '.counter-wrapper'
async function displayData(photographers, sum) {
  const photographHeader = document.querySelector('.photograph-header');

  const photographerModel = photographerFactory(photographers);
  const userHeaderDOM = photographerModel.getUserHeaderDOM();
  photographHeader.innerHTML = userHeaderDOM;
  // console.log(photographerModel);

  const counterWrapper = document.querySelector('.counter-wrapper');
  const UserLikesPrice = photographerModel.getUserLikesPrice();
  counterWrapper.innerHTML = UserLikesPrice;

  const counter = document.querySelector('.counter');
  counter.innerHTML = sum;
}

// La fonction prend en paramètre les medias (photos et videos) du photographe dont l'id est précisée dans l'url.
// via la factory (media.js) on génère un template en fonction du type de media.
// Si il s'agit d'une image on génère un template via la methode 'getUserImageCardDOM' et on l'injecte dans la div qui a l'id '#photographer-grid'
// Si il s'agit d'une video on génère un template via la methode 'getUserVideoCardDOM' et on l'injecte dans la div qui a l'id '#photographer-grid'
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
// Elle récupère ds 1 premier temps les datas du fichier json via un Fetch
// Elle selectionne les datas correspondant à l'id du photographe contenue dans l'url de la page
// Elle appelle les 2 fonctions précédentes pour générer les templates correspondant et les injecter dans la page Html

// find() renvoie la valeur du premier élément trouvé dans le tableau qui respecte la condition donnée (photographerById)
// filter() crée et retourne un nouveau tableau contenant tous les éléments du tableau d'origine qui remplissent une condition déterminée (mediaById)
// map() crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant.
// reduce() applique une fonction qui est un « accumulateur » et qui traite chaque valeur d'une liste (de la gauche vers la droite) afin de la réduire à une seule valeur.
async function init() {
  const { photographers, media } = await getPhotographers();

  const photographerById = photographers.find(
    (el) => el.id === photographerUrlId
  );
  // console.log(photographerById);

  const mediaById = media.filter(
    (el) => el.photographerId === photographerUrlId
  );
  console.log(mediaById);

  const arrayLikes = mediaById.map((el) => el.likes);
  // console.log(arrayLikes);
  const sumLikes = arrayLikes.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  // console.log(sumLikes);

  displayData(photographerById, sumLikes);
  displayMedia(mediaById);

  likeManagement();

  sortMedias();

  const photographerName = photographerById.name;
  modal(photographerName);

  lightbox(mediaById);
}

init();

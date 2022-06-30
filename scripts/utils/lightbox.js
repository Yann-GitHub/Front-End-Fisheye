// Fonction qui prend en paramètre tous les medias d'un photographe selectionnés via son id (photographer.js)
// Via une boucle forEach() on ajoute sur chq card un event listener et une fonction displayLightbox() qui rprend en parametre tous les medias et l'id du media cliqué via attribut data-id
// La fonction displayLightbox() se charge d'afficher le media en fonction de son id et en fonction de son type (image, video).
// Elle gére également le comportement des btn prev, next et close.

export function lightbox(data) {
  const lightbox = document.getElementById('lightbox-section');
  const btnPrev = document.getElementById('lightbox-prev');
  const btnNext = document.getElementById('lightbox-next');
  const btnClose = document.getElementById('close-lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  const lightboxvideo = document.getElementById('lightbox-video');
  const lightboxTitle = document.getElementById('lightbox-title');
  let previouslyFocusElement = null;

  const photographerMedias = document.querySelectorAll(
    '#photographer-grid > article > img, #photographer-grid > article > video'
  );

  photographerMedias.forEach((photographerMedia) => {
    photographerMedia.addEventListener('click', (media) => {
      lightbox.style.display = 'flex';
      lightbox.setAttribute('aria-hidden', 'false');
      previouslyFocusElement = document.querySelector(':focus');
      const imageDatasetId = media.target.dataset.id;
      // console.log(imageDatasetId);
      displayLightbox(data, imageDatasetId);
    });
    photographerMedia.addEventListener('keydown', (media) => {
      if (media.key === 'Enter') {
        lightbox.style.display = 'flex';
        lightbox.setAttribute('aria-hidden', 'false');
        previouslyFocusElement = document.querySelector(':focus');
        const imageDatasetId = media.target.dataset.id;
        // console.log(imageDatasetId);
        displayLightbox(data, imageDatasetId);
      }
    });
  });

  const displayLightbox = (data, idImage) => {
    let mediaIndex = data.findIndex((elt) => elt.id === Number(idImage));

    if (data[mediaIndex].image) {
      lightboxImage.setAttribute(
        'src',
        `./assets/images/${data[mediaIndex].photographerId}/${data[mediaIndex].image}`
      );
      lightboxTitle.innerText = `${data[mediaIndex].title}`;
      lightboxImage.style.display = 'flex';
      lightboxvideo.style.display = 'none';
      btnPrev.focus();
    } else {
      lightboxvideo.setAttribute(
        'src',
        `./assets/images/${data[mediaIndex].photographerId}/${data[mediaIndex].video}`
      );
      lightboxvideo.style.display = 'flex';
      lightboxImage.style.display = 'none';
      btnPrev.focus();
      lightboxTitle.innerText = `${data[mediaIndex].title}`;
    }

    const nextAction = (e) => {
      mediaIndex =
        mediaIndex < data.length - 1 ? (mediaIndex += 1) : (mediaIndex = 0);
      if (data[mediaIndex].image) {
        lightboxImage.setAttribute(
          'src',
          `./assets/images/${data[mediaIndex].photographerId}/${data[mediaIndex].image}`
        );
        lightboxTitle.innerText = `${data[mediaIndex].title}`;
        lightboxImage.style.display = 'flex';
        lightboxvideo.style.display = 'none';
      } else {
        lightboxvideo.setAttribute(
          'src',
          `./assets/images/${data[mediaIndex].photographerId}/${data[mediaIndex].video}`
        );
        lightboxvideo.style.display = 'flex';
        lightboxImage.style.display = 'none';
        lightboxTitle.innerText = `${data[mediaIndex].title}`;
      }
    };

    btnNext.addEventListener('click', nextAction);
    btnNext.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        nextAction();
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') {
        nextAction();
      }
    });

    const previousAction = (e) => {
      mediaIndex =
        mediaIndex > 0 ? (mediaIndex -= 1) : (mediaIndex = data.length - 1);
      if (data[mediaIndex].image) {
        lightboxImage.setAttribute(
          'src',
          `./assets/images/${data[mediaIndex].photographerId}/${data[mediaIndex].image}`
        );
        lightboxTitle.innerText = `${data[mediaIndex].title}`;
        lightboxImage.style.display = 'flex';
        lightboxvideo.style.display = 'none';
      } else {
        lightboxvideo.setAttribute(
          'src',
          `./assets/images/${data[mediaIndex].photographerId}/${data[mediaIndex].video}`
        );
        lightboxvideo.style.display = 'flex';
        lightboxImage.style.display = 'none';
        lightboxTitle.innerText = `${data[mediaIndex].title}`;
      }
    };

    btnPrev.addEventListener('click', previousAction);
    btnPrev.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        previousAction();
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        previousAction();
      }
    });

    const closeAction = (e) => {
      if (previouslyFocusElement !== null) {
        previouslyFocusElement.focus();
      }
      lightbox.style.display = 'none';
      lightbox.setAttribute('aria-hidden', 'true');
    };

    btnClose.addEventListener('click', closeAction);
    btnClose.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        closeAction();
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Esc' || e.key === 'Escape') {
        closeAction();
      }
    });
  };
}

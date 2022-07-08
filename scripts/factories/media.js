// Fonction factory en charge de générer un template (avec les datas spécifiées en paramètre) qui sera par la suite injecter dans le html via la fonction displayMedia()
// Les datas sont d'abord assignées à des variables
// Les différentes méthodes correspondent aux différents templates dédiés aux différent types de medias (images, videos)
export function mediaFactory(data) {
  const { date, id, image, likes, photographerId, price, title, video } = data;

  const photographerImage = `assets/images/${photographerId}/${image}`;
  const photographerVideo = `assets/images/${photographerId}/${video}`;

  function getUserImageCardDOM() {
    const templatePhotographerImage = `
    <article class='card' data-id="${id}" data-date="${date}" data-photographerId="${photographerId}" data-price="${price}" data-likes="${likes}" data-title="${title}">
      <img src="${photographerImage}" alt="${title}, closeup view" class="card-image" role="link" tabindex="0" data-id="${id}" data-date="${date}" data-photographerId="${photographerId}" data-price="${price}" data-likes="${likes}" data-title="${title}" />
      <div class="card-content">
        <h3>${title}</h3>
        <div class="heart-wrapper">
          <p>${likes}</p>
          <i class="far fa-heart heart"></i>
          <i class="fas fa-heart heart heart-plain hidden" role="button" aria-label="like" tabindex="0"></i>
        </div>
      </div>
    </article>
    `;

    return templatePhotographerImage;
  }

  function getUserVideoCardDOM() {
    const templatePhotographerVideo = `
    <article class='card' data-id="${id}" data-date="${date}" data-photographerId="${photographerId}" data-price="${price}" data-likes="${likes}" data-title="${title}">
      <video class="card-video" tabindex="0" role= "link" aria-label="${title}, closeup view" data-id="${id}" data-date="${date}" data-photographerId="${photographerId}" data-price="${price}" data-likes="${likes}" data-title="${title}">
        <source src="${photographerVideo}" type="video/mp4" data-id="${id}" data-date="${date}" data-photographerId="${photographerId}" data-price="${price}" data-likes="${likes}" data-title="${title}" />
      </video>
      <div class="card-content">
        <h3>${title}</h3>
        <div class="heart-wrapper">
          <p>${likes}</p>
          <i class="far fa-heart heart"></i>
          <i class="fas fa-heart heart heart-plain hidden" role="button" aria-label="like" tabindex="0"></i>
        </div>
      </div>
    </article>
    `;

    return templatePhotographerVideo;
  }

  return {
    photographerId,
    video,
    image,
    getUserVideoCardDOM,
    getUserImageCardDOM,
  };
}

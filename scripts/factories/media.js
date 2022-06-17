export function mediaFactory(data) {
  const { date, id, image, likes, photographerId, price, title, video } = data;

  const photographerImage = `assets/images/${photographerId}/${image}`;
  const photographerVideo = `assets/images/${photographerId}/${video}`;

  function getUserImageCardDOM() {
    const templatePhotographerImage = `
    <article class='card' data-id="${id}" data-date="${date}" data-photographerId="${photographerId}" data-price="${price}">
      <img src="${photographerImage}" class="card-image" />
      <div class="card-content">
        <h3>${title}</h3>
        <div class="heart-wrapper">
          <p>${likes}</p>
          <i class="far fa-heart heart"></i>
          <i class="fas fa-heart heart heart-plain hidden"></i>
        </div>
      </div>
    </article>
    `;

    return templatePhotographerImage;
  }

  function getUserVideoCardDOM() {
    const templatePhotographerVideo = `
    <article class='card' data-id="${id}" data-date="${date}" data-photographerId="${photographerId}" data-price="${price}">
      <video class="card-video">
        <source src="${photographerVideo}" type="video/mp4" />
      </video>
      <div class="card-content">
        <h3>${title}</h3>
        <div class="heart-wrapper">
          <p>${likes}</p>
          <i class="far fa-heart heart"></i>
          <i class="fas fa-heart heart heart-plain hidden"></i>
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

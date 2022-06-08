export function photographerFactory(data) {
  const { name, portrait, city, country, tagline, price, id } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement('article');
    const link = document.createElement('a');
    link.setAttribute('href', `photographer.html?id=${id}`);
    const img = document.createElement('img');
    img.setAttribute('src', picture);
    const h2 = document.createElement('h2');
    h2.textContent = name;
    const div = document.createElement('div');
    div.textContent = `${city}, ${country}`;
    const p = document.createElement('p');
    p.textContent = tagline;
    const span = document.createElement('span');
    span.textContent = `${price}€/jour`;
    link.appendChild(img);
    link.appendChild(h2);
    article.appendChild(link);
    article.appendChild(div);
    article.appendChild(p);
    article.appendChild(span);
    return article;
  }

  function getUserHeaderDOM() {
    const templatePhotographHeader = `
    <div class='photographer-infos'>
      <h2 tabindex="0">${name}</h2>
      <div tabindex="0">
        <p class="photographer-city">${city}, ${country}</p>
        <p class="photographer-tagline">${tagline}</p>
      </div>
    </div>
    <button id="photographer-contact" class="contact_button" title='Contact Me' aria-label="Contact Me">Contactez-moi</button>
    <a href='#' title='${name}'><img src="${picture}" aria-label="${name}" title="${name}" alt=""></a>
    `;

    return templatePhotographHeader;
  }

  return { name, picture, getUserCardDOM, getUserHeaderDOM };
}

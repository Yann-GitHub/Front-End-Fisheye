// Fonction en charge du tri des medias selon 3 critères (titre, popularité, date)
// sort() trie les éléments d'un tableau, dans ce même tableau, et renvoie le tableau.
export function sortMedias() {
  const gridMedia = document.querySelector('#photographer-grid');
  const sortMediaList = document.getElementById('sort-media-list');
  const btnSortMedia = document.getElementById('sort-media-button');
  const btnSortMediaText = document.getElementById('sort-media-button-text');

  const popularite = document.getElementById('popularite');
  const date = document.getElementById('date');
  const titre = document.getElementById('titre');

  const toggleSortMenu = (e) => {
    if (sortMediaList.style.display === 'block') {
      btnSortMedia.setAttribute('aria-expanded', 'false');
      sortMediaList.style.display = 'none';
    } else {
      btnSortMedia.setAttribute('aria-expanded', 'true');
      sortMediaList.style.display = 'block';
    }
  };

  btnSortMedia.addEventListener('click', toggleSortMenu);

  const closeSortMenu = () => {
    sortMediaList.style.display = 'none';
  };

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sortMediaList.style.display === 'block') {
      btnSortMedia.setAttribute('aria-expanded', 'false');
      closeSortMenu();
    }
  });

  const sortBy = (e) => {
    const sortSection = [...gridMedia.children];
    // console.log(sortSection);

    if (e.target.id === 'titre') {
      sortSection.sort((a, b) => {
        if (a.dataset.title < b.dataset.title) {
          return -1;
        } else {
          return 1;
          // https://www.youtube.com/watch?v=nq0DC5M3Kc8
        }
      });
      btnSortMediaText.textContent = 'Titre';
      // console.log('titre');
    } else if (e.target.id === 'date') {
      sortSection.sort((a, b) => {
        return Date.parse(b.dataset.date) - Date.parse(a.dataset.date);
      });
      btnSortMediaText.textContent = 'Date';
      // console.log('date');
    } else if (e.target.id === 'popularite') {
      sortSection.sort((a, b) => {
        return b.dataset.likes - a.dataset.likes;
      });
      btnSortMediaText.textContent = 'Popularité';
      // console.log('popularité');
    }
    closeSortMenu();
    sortSection.forEach((nodeElement) => gridMedia.appendChild(nodeElement));
  };

  popularite.addEventListener('click', sortBy);
  popularite.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      console.log('jfjf');
      sortBy(e);
    }
  });
  date.addEventListener('click', sortBy);
  date.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      console.log('jfjf');
      sortBy(e);
    }
  });
  titre.addEventListener('click', sortBy);
  titre.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      console.log('jfjf');
      sortBy(e);
    }
  });
}

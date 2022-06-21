// Fonction en charge du tri des medias selon 3 critères (titre, popularité, date)
// sort() trie les éléments d'un tableau, dans ce même tableau, et renvoie le tableau.
export function sortMedias() {
  const gridMedia = document.querySelector('#photographer-grid');
  const selector = document.getElementById('selectorType');

  selector.addEventListener('change', sortBy);

  function sortBy() {
    const sortSection = [...gridMedia.children];
    // console.log(sortSection);

    if (selector.value === 'titre') {
      sortSection.sort((a, b) => {
        if (a.dataset.title < b.dataset.title) {
          return -1;
        } else {
          return 1;
          // https://www.youtube.com/watch?v=nq0DC5M3Kc8
        }
      });
      // console.log('titre');
    } else if (selector.value === 'date') {
      sortSection.sort((a, b) => {
        return Date.parse(b.dataset.date) - Date.parse(a.dataset.date);
      });
      // console.log('date');
    } else if (selector.value === 'popularité') {
      sortSection.sort((a, b) => {
        return b.dataset.likes - a.dataset.likes;
      });
      // console.log('popularité');
    }

    sortSection.forEach((nodeElement) => gridMedia.appendChild(nodeElement));
  }
}

// Fonction en charge de la gestion des likes
// Injection d'une classe sur le coeur cliqué (opacité), coeur plein - coeur vide
// Incrément et décrément du compteur de likes global au clic
// Incrément et décrément du compteur de likes propre a une photo en particulier au clic
// forEach() permet d'exécuter une fonction donnée sur chaque élément du tableau.
export function likeManagement() {
  const hearts = document.querySelectorAll('.heart-plain');
  const globalLikesCounter = document.querySelector('.counter');
  let globalLikesCounterNumber = Number(globalLikesCounter.textContent);

  hearts.forEach((heart, index) => {
    const likesPerImage =
      document.querySelectorAll('.heart-wrapper > p')[index];
    let likesPerImageNumber = Number(likesPerImage.textContent);

    heart.addEventListener('click', () => {
      if (heart.classList.contains('hidden')) {
        heart.classList.remove('hidden');
        globalLikesCounterNumber++;
        likesPerImageNumber++;
      } else {
        heart.classList.add('hidden');
        globalLikesCounterNumber--;
        likesPerImageNumber--;
      }
      globalLikesCounter.textContent = globalLikesCounterNumber;
      likesPerImage.textContent = likesPerImageNumber;
    });
    heart.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        if (heart.classList.contains('hidden')) {
          heart.classList.remove('hidden');
          globalLikesCounterNumber++;
          likesPerImageNumber++;
        } else {
          heart.classList.add('hidden');
          globalLikesCounterNumber--;
          likesPerImageNumber--;
        }
        globalLikesCounter.textContent = globalLikesCounterNumber;
        likesPerImage.textContent = likesPerImageNumber;
      }
    });
  });
}

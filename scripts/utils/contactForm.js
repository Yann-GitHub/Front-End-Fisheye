// Fonction en charge de la gestion de la modal de contact, elle prend en parametre le nom du photographe
// Le nom du photographe est ajouté dans l'entête de la modal
// Des eventlisteners sont ajoutés sur le btn contact et btn close, et permettent de changer le display de la modal (none / block)
// Un eventlistener est ajouté sur le btn send avec une fonction en charge de console.log les datas entrées par le user puis de fermer la modal
// Gestion attributs ARIA et eventlistener clavier

export function modal(name) {
  const modal = document.querySelector('#contact_modal');
  const form = document.getElementById('form');
  const btnContact = document.getElementById('photographer-contact');
  const btnClose = document.getElementById('btnClose');

  const modalTitle = document.getElementById('modal-title');

  const firstName = document.getElementById('firstName');
  const lastName = document.getElementById('lastName');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  const body = document.querySelector('body');
  let previouslyFocusElement = null;

  modalTitle.innerHTML = `Contactez-moi <br /> ${name}`;

  const closeModal = (e) => {
    if (previouslyFocusElement !== null) {
      previouslyFocusElement.focus();
    }
    form.reset();
    modal.setAttribute('aria-hidden', 'true');
    body.classList.remove('no-scroll');
    modal.style.display = 'none';
  };

  const openModal = (e) => {
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
    previouslyFocusElement = document.querySelector(':focus');
    firstName.focus();
    body.classList.add('no-scroll');
  };

  btnContact.addEventListener('click', openModal);

  btnClose.addEventListener('click', closeModal);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.key === 'Esc') {
      closeModal(e);
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log(`First Name: ${firstName.value}`);
    console.log(`Last Name: ${lastName.value}`);
    console.log(`Email: ${email.value}`);
    console.log(`Message: ${message.value}`);

    closeModal();
  });
}

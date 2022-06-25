// Fonction en charge de la gestion de la modal de contact, elle prend en parametre le nom du photographe
// Le nom du photographe est ajouté dans l'entête de la modal
// Des eventlisteners sont ajoutés sur le btn contact et btn close, et permettent de changer le display de la modal (none / block)
// Un eventlistenr est ajouté sur le btn send avec une fonction en charge de console.log les datas entrées par le user puis de fermer la modal

export function modal(name) {
  const modal = document.querySelector('#contact_modal');
  const btnContact = document.getElementById('photographer-contact');
  const btnClose = document.getElementById('btnClose');
  const btnSend = document.getElementById('btnSend');

  const modalTitle = document.getElementById('modal-title');

  const firstName = document.getElementById('firstName');
  const lastName = document.getElementById('lastName');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  modalTitle.innerHTML = `Contactez-moi <br /> ${name}`;

  btnContact.addEventListener('click', () => {
    modal.style.display = 'block';
  });

  btnClose.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  btnSend.addEventListener('click', send);

  function send(event) {
    event.preventDefault();
    console.log(`First Name: ${firstName.value}`);
    console.log(`Last Name: ${lastName.value}`);
    console.log(`Email: ${email.value}`);
    console.log(`Message: ${message.value}`);

    firstName.value = '';
    lastName.value = '';
    email.value = '';
    message.value = '';

    modal.style.display = 'none';
  }
}

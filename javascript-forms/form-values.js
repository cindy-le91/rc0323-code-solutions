const formInput = document.querySelector('#contact-form');

function submit(event) {
  event.preventDefault();
  const email = formInput.elements.email.value;
  const name = formInput.elements.name.value;
  const message = formInput.elements.message.value;
  const messageObject = {
    name,
    email,
    message
  };
  console.log('messageObject:', messageObject);
  formInput.reset();
}

formInput.addEventListener('submit', submit);

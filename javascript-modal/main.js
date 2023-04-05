const modal = document.getElementById('modal');
const button = document.querySelector('.main-button');

button.addEventListener('click', function () {
  modal.style.visibility = 'visible';
});

const modalbutton = document.querySelector('.modal-button');
modalbutton.addEventListener('click', function () {
  modal.style.visibility = 'hidden';
});

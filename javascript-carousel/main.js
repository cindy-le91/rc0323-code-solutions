const carousel = {
  active: 1,
  min: 1,
  max: 5
};

function showNextImage() {
  const images = [...document.querySelectorAll('.carousel-image')];
  carousel.active++;
  if (carousel.active === 6) {
    carousel.active = carousel.min;
  }

  images.forEach(image => {
    image.classList.add('hidden');
    if (parseInt(image.id) === parseInt(carousel.active)) {
      image.classList.remove('hidden');
    }
  });
}

function showPeviousImage() {
  const images = [...document.querySelectorAll('.carousel-image')];
  carousel.active--;

  if (carousel.active === 0) {
    carousel.active = carousel.max;
  }

  images.forEach(image => {
    image.classList.add('hidden');
    if (parseInt(image.id) === parseInt(carousel.active)) {
      image.classList.remove('hidden');
    }
  });
}

function addEventListenerShowNextImageToRightArrow() {
  const arrowButton = document.getElementById('next-button');
  arrowButton.addEventListener('click', showNextImage.bind(null, carousel));
}

function addEventListenerShowNextImageToLeftArrow() {
  const arrowButton = document.getElementById('previous-button');
  arrowButton.addEventListener('click', showPeviousImage.bind(null, carousel));
}

addEventListenerShowNextImageToRightArrow();
addEventListenerShowNextImageToLeftArrow();

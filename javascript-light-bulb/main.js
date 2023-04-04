console.log(document.querySelector('.circle'));
const newCircle = document.querySelector('.circle');

function toggle(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);

  const newCircle = document.querySelector('.circle');
  if (newCircle.className === 'circle toggle-on-button') {
    newCircle.className = 'circle toggle-off-button';
  } else if (newCircle.className === 'circle toggle-off-button') {
    newCircle.className = 'circle toggle-on-button';
  }

  const newContainer = document.querySelector('.container');
  if (newContainer.className === 'container toggle-on-container') {
    newContainer.className = 'container toggle-off-container';
  } else if (newContainer.className === 'container toggle-off-container') {
    newContainer.className = 'container toggle-on-container';
  }
  console.log(newContainer);
}

newCircle.addEventListener('click', toggle);

let numberClicked = 0;
const hotButton = document.querySelector('.hot-button');

function click(event) {
  numberClicked += 1;
  console.log(numberClicked);
  const clickCount = document.querySelector('.click-count');
  clickCount.textContent = numberClicked;

  const hotButton = document.querySelector('.hot-button');
  console.log(hotButton);
  if (numberClicked < 4) {
    hotButton.className = 'hot-button cold';
  } if (numberClicked >= 4 && numberClicked < 7) {
    hotButton.className = 'hot-button cool';
  } if (numberClicked >= 7 && numberClicked < 10) {
    hotButton.className = 'hot-button tepid';
  } if (numberClicked >= 10 && numberClicked < 13) {
    hotButton.className = 'hot-button warm';
  } if (numberClicked >= 13 && numberClicked < 16) {
    hotButton.className = 'hot-button hot';
  } if (numberClicked >= 16) {
    hotButton.className = 'hot-button tepid';
  }

}
hotButton.addEventListener('click', click);

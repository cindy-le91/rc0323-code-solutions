const tabs = document.querySelector('.tab-container');
const tabElements = document.querySelectorAll('.tab');
const viewElements = document.querySelectorAll('.view');

tabs.addEventListener('click', function (event) {
  console.log(tabElements);
  event.target.className = 'tab';
  for (let i = 0; i < tabElements.length; i++) {
    tabElements[i].className = 'tab';
  }
  const attrib = event.target.getAttribute('data-view');

  for (let a = 0; a < viewElements.length; a++) {
    if (viewElements[a].getAttribute('data-view') !== attrib) {
      viewElements[a].className = 'view hidden';
    } else {
      viewElements[a].className = 'view';
    }
  }

  if (event.target && event.target.matches('.tab')) {
    event.target.className = 'tab active';
  }
});

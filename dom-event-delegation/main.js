const taskList = document.querySelector('.container');

taskList.addEventListener('click', function (event) {
  console.log('event.target: ', event.target);
  console.log('event.target.tagName: ', event.target.tagName);
  const button = event.target;
  if (event.target && event.target.matches('button')) {
    console.log('closest .task-list-item: ', button.closest('.task-list-item'));
  }
});

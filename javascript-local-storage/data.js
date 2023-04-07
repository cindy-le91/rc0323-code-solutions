/* exported todos */

let todos = [];

const previousTodosJSON = localStorage.getItem('javascript-local-storage');
todos = JSON.parse(previousTodosJSON);

window.addEventListener('beforeunload', function (event) {
  console.log('test');
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJSON);
}
);

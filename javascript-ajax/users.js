
function getUserData(name) {
  const users = document.querySelector('#user-list');
  console.log(users);
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log(xhr.status);
    console.log(xhr.response);
    for (let i = 0; i < xhr.response.length; i++) {
      const li = document.createElement('li');
      const text = document.createTextNode(xhr.response[i].name);
      li.appendChild(text);
      users.appendChild(li);
    }
  });
  xhr.send();
}

getUserData();

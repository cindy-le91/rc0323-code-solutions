function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name', event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name', event.target.name);
}

function handleInput(event) {
  console.log('value of ' + event.target.name + ':', event.target.value);
}

const focusUserName = document.querySelector('#user-name');
const blurUserName = document.querySelector('#user-name');
const inputUserName = document.querySelector('#user-name');

focusUserName.addEventListener('focus', handleFocus);
blurUserName.addEventListener('blur', handleBlur);
inputUserName.addEventListener('input', handleInput);

const focusUserEmail = document.querySelector('#user-email');
const blurUserEmail = document.querySelector('#user-email');
const inputUserEmail = document.querySelector('#user-email');

focusUserEmail.addEventListener('focus', handleFocus);
blurUserEmail.addEventListener('blur', handleBlur);
inputUserEmail.addEventListener('input', handleInput);

const focusUserMessage = document.querySelector('#user-message');
const blurUserMessage = document.querySelector('#user-message');
const inputUserMessage = document.querySelector('#user-message');

focusUserMessage.addEventListener('focus', handleFocus);
blurUserMessage.addEventListener('blur', handleBlur);
inputUserMessage.addEventListener('input', handleInput);

/***************    Store username *****************/
let username = document.getElementById('username');
let usernameButton = document.getElementById('form');
usernameButton.addEventListener('submit', writeUsernameToStorage);


function writeUsernameToStorage(event) {
  event.preventDefault();
  let stringifiedThing = event.target.username.value;
  localStorage.setItem('username', stringifiedThing);
  console.log('Working');
}
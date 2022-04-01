/***************    Store username *****************/
let username = document.getElementById('username');
let usernameButton = document.getElementById('form');
usernameButton.addEventListener('submit', writeUsernameToStorage);

function writeUsernameToStorage(event) {
  event.preventDefault();
  let thingBeingString = event.target.username.value;
  let stringifiedThing = JSON.stringify(thingBeingString);
  localStorage.setItem('username', stringifiedThing);
  console.log('Working');
}

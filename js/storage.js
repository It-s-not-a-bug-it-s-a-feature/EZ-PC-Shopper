'use strict';

let configuredComputer = Object();

function writeToStorage(computerCategory) {
  let stringifiedThing = JSON.stringify(configuredComputer);
  localStorage.setItem(computerCategory, stringifiedThing);
}

// Remove this variable assignment when it's no longer needed ****
let computerCategory = 'productivity';

// *** Put this into an event handler and set computerCategory!! *****
writeToStorage(computerCategory);

function readFromStorage(computerCategory) {
  let retrievedThing = localStorage.getItem(computerCategory);
  let parsedThing = JSON.parse(retrievedThing);
  return parsedThing;
}

// **** here's an EXAMPLE of how to write + read from storage for coders ****

// configuredComputer = {
//   test: 'i am a test'
// };

// writeToStorage('testing');

// let thingFromStorage = readFromStorage('testing');
// console.log(thingFromStorage);

/************     Username local storage     ************/
let username = document.getElementById('username');
let usernameButton = document.getElementById('submit');
usernameButton.addEventListener('click', writeUsernameToStorage);

function writeUsernameToStorage(event) {
  event.preventDefault();
  let stringifiedThing = JSON.stringify(username.value);
  console.log(username.value);
  localStorage.setItem('username', stringifiedThing);  
  alert('Thanks! Now click a category');
}




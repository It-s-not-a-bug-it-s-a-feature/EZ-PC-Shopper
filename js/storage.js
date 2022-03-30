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

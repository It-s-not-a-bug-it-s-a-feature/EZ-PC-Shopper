'use strict';

let configuredComputer = Object();

function writeToStorage(computerCategory) {
  let stringifiedThing = JSON.strifigy(configuredComputer);
  localStorage.setItem(computerCategory, stringifiedThing);

}
let computerCategory = 'productivity';

writeToStorage(computerCategory);

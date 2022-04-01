/* eslint-disable no-undef */
'use strict';

/* the following objects are already created with defaults 
selectedComputer
midLevelComputer
highEndComputer

The code that calls this page (ie user clicks-in from index.html) should use the
selectedComputer, midLevelComputer, or highEndComputer examples in components.js and
just create an object accordinly.
*/

// This represents the user's selected computer type from home screen, used here for testing.
let selectedComputer = basicComputer;

/*  GLOBAL VARIABLES */
let memoryImgTag = document.getElementById('memoryImg');
let processorImgTag = document.getElementById('processorImg');
let storageImgTag = document.getElementById('storageImg');
let chassisImgTag = document.getElementById('chassisImg');
let videocardImgTag = document.getElementById('videocardImg');
let motherboardImgTag = document.getElementById('motherboardImg');
let tableBody = document.getElementById('tableBody');

//Globals for image slideshow event handlers
//Todo: This represents the basic computer initial settings. Change the settings here if not using initial computer.
let memoryImageIdx = 0;
let processorImgIdx = 0;
let storageImgIdx = 0;
let chassisImgIdx = 0;
let videocardImgIdx = 0;
let motherBoardImgIdx = 0;
// End Globals for slideshow

//  display the default computer component images in 'slideshow' format
function renderInitialImages() {
  //  post images for memory
  memoryImgTag.src = selectedComputer.memory.url;
  console.log(`selectedComputer.memory.model is: ${selectedComputer.memory.model}`);
  memoryImgTag.alt = selectedComputer.memory.model;
  console.log(`memoryImgTag.alt is: ${memoryImgTag.alt}`);

  //  post images for processor
  processorImgTag.src = selectedComputer.processor.url;
  processorImgTag.alt = selectedComputer.processor.model;

  //  post images for storage
  storageImgTag.src = selectedComputer.storage.url;
  storageImgTag.alt = selectedComputer.storage.model;

  //  post images for chassis
  chassisImgTag.src = selectedComputer.chassis.url;
  chassisImgTag.alt = selectedComputer.chassis.model;

  //  post images for videocard
  videocardImgTag.src = selectedComputer.videocard.url;
  videocardImgTag.alt = selectedComputer.videocard.model;

  //  post images for motherboard
  motherboardImgTag.src = selectedComputer.motherboard.url;
  motherboardImgTag.alt = selectedComputer.motherboard.model;
}

//RowKill function
function rowKill() {
  console.log('Killing rows!');
  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.firstChild);
  }
}

// Function takes computer object and renders TABLE at bottom of page with components, prices.
function renderItemsList(selectedComputer){
  console.log('Entered render items list fx');
  let rowElem = document.createElement('tr');

  rowKill();
  
  let modelName = selectedComputer.chassis.model;
  let itemData = document.createElement('td');
  itemData.textContent = modelName;

  let itemPrice = selectedComputer.chassis.price;
  let totalData = document.createElement('td');
  totalData.textContent = `$${itemPrice}.00`;

  let compType = selectedComputer.chassis.componentType;
  let typeData = document.createElement('td');
  typeData.textContent = compType;

  rowElem.appendChild(typeData);
  rowElem.appendChild(itemData);
  rowElem.appendChild(totalData);
  tableBody.appendChild(rowElem);

  //************************
  let row1 = document.createElement('tr');

  let motherBoard = selectedComputer.motherboard.model;
  itemData = document.createElement('td');
  itemData.textContent = motherBoard;

  itemPrice = selectedComputer.motherboard.price;
  totalData = document.createElement('td');
  totalData.textContent = `$${itemPrice}.00`;

  compType = selectedComputer.motherboard.componentType;
  typeData = document.createElement('td');
  typeData.textContent = compType;

  row1.appendChild(typeData);
  row1.appendChild(itemData);
  row1.appendChild(totalData);
  tableBody.appendChild(row1);

  //************************
  let row2 = document.createElement('tr');

  let processor = selectedComputer.processor.model;
  itemData = document.createElement('td');
  itemData.textContent = processor;

  itemPrice = selectedComputer.processor.price;
  totalData = document.createElement('td');
  totalData.textContent = `$${itemPrice}.00`;

  compType = selectedComputer.processor.componentType;
  typeData = document.createElement('td');
  typeData.textContent = compType;

  row2.appendChild(typeData);
  row2.appendChild(itemData);
  row2.appendChild(totalData);
  tableBody.appendChild(row2);

  //************************
  let row3 = document.createElement('tr');

  let memory = selectedComputer.memory.model;
  itemData = document.createElement('td');
  itemData.textContent = memory;

  itemPrice = selectedComputer.memory.price;
  totalData = document.createElement('td');
  totalData.textContent = `$${itemPrice}.00`;

  compType = selectedComputer.memory.componentType;
  typeData = document.createElement('td');
  typeData.textContent = compType;

  row3.appendChild(typeData);
  row3.appendChild(itemData);
  row3.appendChild(totalData);
  tableBody.appendChild(row3);

  //************************
  let row4 = document.createElement('tr');

  let storage = selectedComputer.storage.model;
  itemData = document.createElement('td');
  itemData.textContent = storage;

  itemPrice = selectedComputer.storage.price;
  totalData = document.createElement('td');
  totalData.textContent = `$${itemPrice}.00`;

  compType = selectedComputer.storage.componentType;
  typeData = document.createElement('td');
  typeData.textContent = compType;

  row4.appendChild(typeData);
  row4.appendChild(itemData);
  row4.appendChild(totalData);
  tableBody.appendChild(row4);

  //************************
  let row5 = document.createElement('tr');

  let videocard = selectedComputer.videocard.model;
  itemData = document.createElement('td');
  itemData.textContent = videocard;

  itemPrice = selectedComputer.videocard.price;
  totalData = document.createElement('td');
  totalData.textContent = `$${itemPrice}.00`;

  compType = selectedComputer.videocard.componentType;
  typeData = document.createElement('td');
  typeData.textContent = compType;

  row5.appendChild(typeData);
  row5.appendChild(itemData);
  row5.appendChild(totalData);
  tableBody.appendChild(row5);
}

renderItemsList(selectedComputer);
//  END TABE RENDERING SECTION

/* event handling methods follow */

//  MEMORY COMPONENT EVENTS
function moveNext(event) {

  // for (let idx = 0; idx < memoryObjects.length; idx++) {
  //   console.log(`searching for match staring with index ${idx}`);
  //   if (memoryObjects[idx].model === memoryImgTag.alt) {
  //     console.log(`Found memoryobject at index ${idx}`);
  //     memoryIndex = idx;
  //     break;
  //   }
  // }
  // if (memoryIndex < 0) {
  //   console.log('BREAK: memoryIndex is < 0');
  //   return;
  if (memoryImageIdx === memoryObjects.length - 1) {
    console.log('memoryIndex was at end, reset to 0');
    memoryImageIdx = 0;
  } else {
    memoryImageIdx++;
    console.log(`memoryIndex incremented to: ${memoryImageIdx}`);
  }

  memoryImgTag.src = memoryObjects[memoryImageIdx].url;
  memoryImgTag.alt = memoryObjects[memoryImageIdx].model;
}

function movePrev(event) {

  // for (let idx = 0; idx < memoryObjects.length; idx++) {
  //   console.log(`searching for match staring with index ${idx}`);
  //   if (memoryObjects[idx].model === memoryImgTag.alt) {
  //     console.log(`Found memoryobject at index ${idx}`);
  //     memoryImageIdx = idx;
  //     break; //  we found the index in the component definition array
  //   }
  // }
  // if (memoryImageIdx < 0) {
  //   console.log(`BREAK: memoryImageIdx is < 0`);
  //   return;
  if (memoryImageIdx < 1) {
    // index is at zero and must be reset to end
    memoryImageIdx = memoryObjects.length - 1;
  } else {
    // index is somewhere within the valid range so decrement it
    memoryImageIdx--;
    console.log(`memoryImageIdx decremented to: ${memoryImageIdx}`);
  }

  console.log(`setting memoryImgTag src and alt at memoryImageIdx ${memoryImageIdx}`);
  memoryImgTag.src = memoryObjects[memoryImageIdx].url;
  memoryImgTag.alt = memoryObjects[memoryImageIdx].model;
}

function imgClicked(event) {

  for (let idx = 0; idx < memoryObjects.length; idx++) {

    if (memoryObjects[idx].model === memoryImgTag.alt) {
      memoryImageIdx = idx;
      break;
    }
  }
  //  get current alt attribute on the current image
  // if (memoryImageIdx < 0) {
  //   console.log(`BREAK: memoryImageIdx is < 0`);
  //   return;
  // } else {
  //  store that attribute's value to the computer object's memory property (componentType, model, price, description)
  selectedComputer.memory.url = memoryObjects[memoryImageIdx].url;
  selectedComputer.memory.alt = memoryObjects[memoryImageIdx].model;
  selectedComputer.memory.model = memoryObjects[memoryImageIdx].model;
  selectedComputer.memory.description = memoryObjects[memoryImageIdx].description;
  selectedComputer.memory.price = memoryObjects[memoryImageIdx].price;

  renderItemsList(selectedComputer);

  //  ask the methods in storage.js to store the computer object into local storage
  console.log(`writing computer object to local storage: ${selectedComputer.componentType}`);
  writeToStorage(selectedComputer.userName, selectedComputer);
  // }
}

function memoryClickedHandler(event){
  console.log('entered memoryClickedHandler function');

  if (event.target.className === 'memoryImg') {
    console.log('event.target.classname is memoryImg');
    imgClicked(event);
  }

  if(event.target.className === 'prev'){
    movePrev(event);
  }

  if(event.target.className === 'next'){
    moveNext(event);
  }
}

let ramComponentEl = document.getElementById('memory');
// END MEMORY COMPONENT EVENTS
// ************************************************************************************************************
// CPU COMPONENT EVENTS
function cpuMoveNext(event) {
  // let processorImgIdx = -1;

  // for (let idx = 0; idx < processorObjects.length; idx++) {
  //   console.log(`searching for match staring with index ${idx}`);
  //   if (processorObjects[idx].model === processorImgTag.alt) {
  //     console.log(`Found processorObject at index ${idx}`);
  //     processorImgIdx = idx;
  //     break;
  //   }
  // }
  // if (processorImgIdx < 0) {
  //   console.log('BREAK: processorImgIdx is < 0');
  //   return;
  if (processorImgIdx === processorObjects.length - 1) {
    console.log('processorImgIdx was at end, reset to 0');
    processorImgIdx = 0;
  } else {
    processorImgIdx++;
    console.log(`processorImgIdx incremented to: ${processorImgIdx}`);
  }

  processorImgTag.src = processorObjects[processorImgIdx].url;
  processorImgTag.alt = processorObjects[processorImgIdx].model;
}

function cpuMovePrev(event) {
  // let processorImgIdx = -1;

  // for (let idx = 0; idx < processorObjects.length; idx++) {
  //   console.log(`searching for match staring with index ${idx}`);
  //   if (processorObjects[idx].model === processorImgTag.alt) {
  //     console.log(`Found processorObject at index ${idx}`);
  //     processorImgIdx = idx;
  //     break; //  we found the index in the component definition array
  //   }
  // }
  // if (processorImgIdx < 0) {
  //   console.log(`BREAK: processorImgIdx is < 0`);
  //   return;
  // } else
  if (processorImgIdx < 1) {
    // index is at zero and must be reset to end
    processorImgIdx = processorObjects.length - 1;
  } else {
    // index is somewhere within the valid range so decrement it
    processorImgIdx--;
    console.log(`processorImgIdx decremented to: ${processorImgIdx}`);
  }

  console.log(`setting processorImgTag src and alt at processorImgIdx ${processorImgIdx}`);
  processorImgTag.src = processorObjects[processorImgIdx].url;
  processorImgTag.alt = processorObjects[processorImgIdx].model;
}

function cpuImgClicked(event) {

  for (let idx = 0; idx < processorObjects.length; idx++) {

    if (processorObjects[idx].model === processorImgTag.alt) {
      processorImgIdx = idx;
      break;
    }
  }
  //  get current alt attribute on the current image
  if (processorImgIdx < 0) {
    console.log(`BREAK: processorImgIdx is < 0`);
    return;
  } else {
    //  store that attribute's value to the computer object's memory property (componentType, model, price, description)
    selectedComputer.processor.url = processorObjects[processorImgIdx].url;
    selectedComputer.processor.alt = processorObjects[processorImgIdx].model;
    selectedComputer.processor.model = processorObjects[processorImgIdx].model;
    selectedComputer.processor.description = processorObjects[processorImgIdx].description;
    selectedComputer.processor.price = processorObjects[processorImgIdx].price;

    renderItemsList(selectedComputer);

    //  ask the methods in storage.js to store the computer object into local storage
    console.log(`writing computer object to local storage: ${selectedComputer.userName}`);
    writeToStorage(selectedComputer.userName, selectedComputer);
  }
}

function cpuClickedHandler(event){
  console.log('entered cpuClickedHandler function');

  if (event.target.className === 'processorImg') {
    console.log('event.target.classname is processorImg');
    cpuImgClicked(event);
  }

  if(event.target.className === 'prev'){
    cpuMovePrev(event);
  }

  if(event.target.className === 'next'){
    cpuMoveNext(event);
  }
}

let cpuComponentEl = document.getElementById('processor');
// END CPU COMPONENT EVENTS
// ************************************************************************************************************
// CHASSIS COMPONENT EVENTS
function chassisMoveNext(event) {

  // for (let idx = 0; idx < chassisObjects.length; idx++) {
  //   console.log(`searching for match staring with index ${idx}`);
  //   if (chassisObjects[idx].model === chassisImgTag.alt) {
  //     console.log(`Found processorObject at index ${idx}`);
  //     chassisImgIdx = idx;
  //     break;
  //   }
  // }
  // if (chassisImgIdx < 0) {
  //   console.log('BREAK: chassisImgIdx is < 0');
  //   return;
  // } else 
  if (chassisImgIdx === chassisObjects.length - 1) {
    console.log('chassisImgIdx was at end, reset to 0');
    chassisImgIdx = 0;
  } else {
    chassisImgIdx++;
    console.log(`chassisImgIdx incremented to: ${chassisImgIdx}`);
  }

  chassisImgTag.src = chassisObjects[chassisImgIdx].url;
  chassisImgTag.alt = chassisObjects[chassisImgIdx].model;
}

function chassisMovePrev(event) {

  // for (let idx = 0; idx < chassisObjects.length; idx++) {
  //   console.log(`searching for match staring with index ${idx}`);
  //   if (chassisObjects[idx].model === chassisImgTag.alt) {
  //     console.log(`Found chassisObject at index ${idx}`);
  //     chassisImgIdx = idx;
  //     break; //  we found the index in the component definition array
  //   }
  // }
  // if (chassisImgIdx < 0) {
  //   console.log(`BREAK: chassisImgIdx is < 0`);
  //   return;
  // } else
  if (chassisImgIdx < 1) {
    // index is at zero and must be reset to end
    chassisImgIdx = chassisObjects.length - 1;
  } else {
    // index is somewhere within the valid range so decrement it
    chassisImgIdx--;
    console.log(`chassisImgIdx decremented to: ${chassisImgIdx}`);
  }

  console.log(`setting chassisImgTag src and alt at chassisImgIdx ${chassisImgIdx}`);
  chassisImgTag.src = chassisObjects[chassisImgIdx].url;
  chassisImgTag.alt = chassisObjects[chassisImgIdx].model;
}

function chassisImgClicked(event) {

  for (let idx = 0; idx < chassisObjects.length; idx++) {

    if (chassisObjects[idx].model === chassisImgTag.alt) {
      chassisImgIdx = idx;
      break;
    }
  }
  //  get current alt attribute on the current image
  // if (chassisImgIdx < 0) {
  //   console.log(`BREAK: chassisImgIdx is < 0`);
  //   return;
  // } else {
    //  store that attribute's value to the computer object's memory property (componentType, model, price, description)
  selectedComputer.chassis.url = chassisObjects[chassisImgIdx].url;
  selectedComputer.chassis.alt = chassisObjects[chassisImgIdx].model;
  selectedComputer.chassis.model = chassisObjects[chassisImgIdx].model;
  selectedComputer.chassis.description = chassisObjects[chassisImgIdx].description;
  selectedComputer.chassis.price = chassisObjects[chassisImgIdx].price;

  renderItemsList(selectedComputer);

  //  ask the methods in storage.js to store the computer object into local storage
  console.log(`writing computer object to local storage: ${selectedComputer.userName}`);
  writeToStorage(selectedComputer.userName, selectedComputer);
  // }
}

function chassisClickedHandler(event){
  console.log('entered chassisClickedHandler function');

  if (event.target.className === 'chassisImg') {
    console.log('event.target.classname is chassisImg');
    chassisImgClicked(event);
  }

  if(event.target.className === 'prev'){
    chassisMovePrev(event);
  }

  if(event.target.className === 'next'){
    chassisMoveNext(event);
  }
}

let chassisComponentEl = document.getElementById('chassis');
// END CHASSIS COMPONENT EVENTS
// ************************************************************************************************************
// VIDEOCARD COMPONENT EVENTS
function videocardMoveNext(event) {
  let videocardIndex = -1;

  for (let idx = 0; idx < videocardObjects.length; idx++) {
    console.log(`searching for match staring with index ${idx}`);
    if (videocardObjects[idx].model === videocardImgTag.alt) {
      console.log(`Found videocardObject at index ${idx}`);
      videocardIndex = idx;
      break;
    }
  }
  if (videocardIndex < 0) {
    console.log('BREAK: videocardIndex is < 0');
    return;
  } else if (videocardIndex === videocardObjects.length - 1) {
    console.log('videocardIndex was at end, reset to 0');
    videocardIndex = 0;
  } else {
    videocardIndex++;
    console.log(`videocardIndex incremented to: ${videocardIndex}`);
  }

  videocardImgTag.src = videocardObjects[videocardIndex].url;
  videocardImgTag.alt = videocardObjects[videocardIndex].model;
}

function videocardMovePrev(event) {
  let videocardIndex = -1;

  for (let idx = 0; idx < videocardObjects.length; idx++) {
    console.log(`searching for match staring with index ${idx}`);
    if (videocardObjects[idx].model === videocardImgTag.alt) {
      console.log(`Found videocardObject at index ${idx}`);
      videocardIndex = idx;
      break; //  we found the index in the component definition array
    }
  }
  if (videocardIndex < 0) {
    console.log(`BREAK: videocardIndex is < 0`);
    return;
  } else if (videocardIndex < 1) {
    // index is at zero and must be reset to end
    videocardIndex = videocardObjects.length - 1;
  } else {
    // index is somewhere within the valid range so decrement it
    videocardIndex--;
    console.log(`videocardIndex decremented to: ${videocardIndex}`);
  }

  console.log(`setting videocardImgTag src and alt at videocardIndex ${videocardIndex}`);
  videocardImgTag.src = videocardObjects[videocardIndex].url;
  videocardImgTag.alt = videocardObjects[videocardIndex].model;
}

function videocardImgClicked(event) {
  let videocardIndex = -1;

  for (let idx = 0; idx < videocardObjects.length; idx++) {

    if (videocardObjects[idx].model === videocardImgTag.alt) {
      videocardIndex = idx;
      break;
    }
  }
  //  get current alt attribute on the current image
  if (videocardIndex < 0) {
    console.log(`BREAK: videocardIndex is < 0`);
    return;
  } else {
    //  store that attribute's value to the computer object's memory property (componentType, model, price, description)
    selectedComputer.videocard.url = videocardObjects[videocardIndex].url;
    selectedComputer.videocard.alt = videocardObjects[videocardIndex].model;
    selectedComputer.videocard.model = videocardObjects[videocardIndex].model;
    selectedComputer.videocard.description = videocardObjects[videocardIndex].description;
    selectedComputer.videocard.price = videocardObjects[videocardIndex].price;

    renderItemsList(selectedComputer);

    //  ask the methods in storage.js to store the computer object into local storage
    console.log(`writing computer object to local storage: ${selectedComputer.userName}`);
    writeToStorage(selectedComputer.userName, selectedComputer);
  }
}

function videocardClickedHandler(event){
  console.log('entered videocardClickedHandler function');

  if (event.target.className === 'videocardImg') {
    console.log('event.target.classname is videocardImg');
    videocardImgClicked(event);
  }

  if(event.target.className === 'prev'){
    videocardMovePrev(event);
  }

  if(event.target.className === 'next'){
    videocardMoveNext(event);
  }
}

let videocardComponentEl = document.getElementById('videocard');
// END VIDEOCARD COMPONENT EVENTS
// ************************************************************************************************************
// MOTHERBOARD COMPONENT EVENTS
function motherboardMoveNext(event) {
  let motherboardIndex = -1;

  for (let idx = 0; idx < motherboardObjects.length; idx++) {
    console.log(`searching for match staring with index ${idx}`);
    if (motherboardObjects[idx].model === motherboardImgTag.alt) {
      console.log(`Found processorObject at index ${idx}`);
      motherboardIndex = idx;
      break;
    }
  }
  if (motherboardIndex < 0) {
    console.log('BREAK: motherboardIndex is < 0');
    return;
  } else if (motherboardIndex === motherboardObjects.length - 1) {
    console.log('motherboardIndex was at end, reset to 0');
    motherboardIndex = 0;
  } else {
    motherboardIndex++;
    console.log(`motherboardIndex incremented to: ${motherboardIndex}`);
  }

  motherboardImgTag.src = motherboardObjects[motherboardIndex].url;
  motherboardImgTag.alt = motherboardObjects[motherboardIndex].model;
}

function motherboardMovePrev(event) {
  let motherboardIndex = -1;

  for (let idx = 0; idx < motherboardObjects.length; idx++) {
    console.log(`searching for match staring with index ${idx}`);
    if (motherboardObjects[idx].model === motherboardImgTag.alt) {
      console.log(`Found motherboardObject at index ${idx}`);
      motherboardIndex = idx;
      break; //  we found the index in the component definition array
    }
  }
  if (motherboardIndex < 0) {
    console.log(`BREAK: motherboardIndex is < 0`);
    return;
  } else if (motherboardIndex < 1) {
    // index is at zero and must be reset to end
    motherboardIndex = motherboardObjects.length - 1;
  } else {
    // index is somewhere within the valid range so decrement it
    motherboardIndex--;
    console.log(`motherboardIndex decremented to: ${motherboardIndex}`);
  }

  console.log(`setting motherboardImgTag src and alt at motherboardIndex ${motherboardIndex}`);
  motherboardImgTag.src = motherboardObjects[motherboardIndex].url;
  motherboardImgTag.alt = motherboardObjects[motherboardIndex].model;
}

function motherboardImgClicked(event) {
  let motherboardIndex = -1;
  console.log('entered MB img clicked method');
  for (let idx = 0; idx < motherboardObjects.length; idx++) {

    if (motherboardObjects[idx].model === motherboardImgTag.alt) {
      motherboardIndex = idx;
      break;
    }
  }
  //  get current alt attribute on the current image
  if (motherboardIndex < 0) {
    console.log(`BREAK: motherboardIndex is < 0`);
    return;
  } else {
    //  store that attribute's value to the computer object's memory property (componentType, model, price, description)
    selectedComputer.motherboard.url = motherboardObjects[motherboardIndex].url;
    selectedComputer.motherboard.alt = motherboardObjects[motherboardIndex].model;
    selectedComputer.motherboard.model = motherboardObjects[motherboardIndex].model;
    selectedComputer.motherboard.description = motherboardObjects[motherboardIndex].description;
    selectedComputer.motherboard.price = motherboardObjects[motherboardIndex].price;

    renderItemsList(selectedComputer);

    //  ask the methods in storage.js to store the computer object into local storage
    console.log(`writing computer object to local storage: ${selectedComputer.userName}`);
    writeToStorage(selectedComputer.userName, selectedComputer);
  }
}

function motherBoardClickedHandler(event){
  console.log('entered motherBoardClickedHandler function');

  if (event.target.className === 'motherboardImg') {
    console.log('event.target.classname is motherboardImg');
    motherboardImgClicked(event);
  }

  if(event.target.className === 'prev'){
    motherboardMovePrev(event);
  }

  if(event.target.className === 'next'){
    motherboardMoveNext(event);
  }
}

let motherBoardComponentEl = document.getElementById('motherboard');

// END MOTHERBOARD COMPONENT EVENTS
// ************************************************************************************************************
// STORAGE COMPONENT EVENTS
function storageMoveNext(event) {
  let storageIndex = -1;

  for (let idx = 0; idx < storageObjects.length; idx++) {
    console.log(`searching for match staring with index ${idx}`);
    if (storageObjects[idx].model === storageImgTag.alt) {
      console.log(`Found processorObject at index ${idx}`);
      storageIndex = idx;
      break;
    }
  }
  if (storageIndex < 0) {
    console.log('BREAK: storageIndex is < 0');
    return;
  } else if (storageIndex === storageObjects.length - 1) {
    console.log('storageIndex was at end, reset to 0');
    storageIndex = 0;
  } else {
    storageIndex++;
    console.log(`storageIndex incremented to: ${storageIndex}`);
  }

  storageImgTag.src = storageObjects[storageIndex].url;
  storageImgTag.alt = storageObjects[storageIndex].model;
}

function storageMovePrev(event) {
  let storageIndex = -1;

  for (let idx = 0; idx < storageObjects.length; idx++) {
    console.log(`searching for match staring with index ${idx}`);
    if (storageObjects[idx].model === storageImgTag.alt) {
      console.log(`Found storageObject at index ${idx}`);
      storageIndex = idx;
      break; //  we found the index in the component definition array
    }
  }
  if (storageIndex < 0) {
    console.log(`BREAK: storageIndex is < 0`);
    return;
  } else if (storageIndex < 1) {
    // index is at zero and must be reset to end
    storageIndex = storageObjects.length - 1;
  } else {
    // index is somewhere within the valid range so decrement it
    storageIndex--;
    console.log(`storageIndex decremented to: ${storageIndex}`);
  }

  console.log(`setting storageImgTag src and alt at storageIndex ${storageIndex}`);
  storageImgTag.src = storageObjects[storageIndex].url;
  storageImgTag.alt = storageObjects[storageIndex].model;
}

function storageImgClicked(event) {
  let storageIndex = -1;
  console.log('entered MB img clicked method');
  for (let idx = 0; idx < storageObjects.length; idx++) {

    if (storageObjects[idx].model === storageImgTag.alt) {
      storageIndex = idx;
      break;
    }
  }
  //  get current alt attribute on the current image
  if (storageIndex < 0) {
    console.log(`BREAK: storageIndex is < 0`);
    return;
  } else {
    //  store that attribute's value to the computer object's memory property (componentType, model, price, description)
    selectedComputer.storage.url = storageObjects[storageIndex].url;
    selectedComputer.storage.alt = storageObjects[storageIndex].model;
    selectedComputer.storage.model = storageObjects[storageIndex].model;
    selectedComputer.storage.description = storageObjects[storageIndex].description;
    selectedComputer.storage.price = storageObjects[storageIndex].price;

    renderItemsList(selectedComputer);

    //  ask the methods in storage.js to store the computer object into local storage
    console.log(`writing computer object to local storage: ${selectedComputer.userName}`);
    writeToStorage(selectedComputer.userName, selectedComputer);
  }
}

function storageClickedHandler(event){
  console.log('entered storageClickedHandler function');

  if (event.target.className === 'storageImg') {
    console.log('event.target.classname is storageImg');
    storageImgClicked(event);
  }

  if(event.target.className === 'prev'){
    storageMovePrev(event);
  }

  if(event.target.className === 'next'){
    storageMoveNext(event);
  }
}

let storageComponentEl = document.getElementById('storage');
// END STORAGE COMPONENT EVENTS



/* REGISTER EVENT LISTENERS */
ramComponentEl.addEventListener('click', memoryClickedHandler);
cpuComponentEl.addEventListener('click', cpuClickedHandler);
chassisComponentEl.addEventListener('click', chassisClickedHandler);

videocardComponentEl.addEventListener('click', videocardClickedHandler);
// motherBoardComponentEl.addEventListener('click', motherBoardClickedHandler);
// storageComponentEl.addEventListener('click', storageClickedHandler);
// videoCardComponentEl.addEventListener('click', videoCardClickedHandler);
motherBoardComponentEl.addEventListener('click', motherBoardClickedHandler);
storageComponentEl.addEventListener('click', storageClickedHandler);
// end handling methods***********

renderInitialImages();


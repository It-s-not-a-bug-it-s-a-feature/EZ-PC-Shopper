'use strict';

/* the following objects are already created with defaults 
basicComputer
midLevelComputer
highEndComputer

The code that calls this page (ie user clicks-in from index.html) should use the
basicComputer, midLevelComputer, or highEndComputer examples in components.js and
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

//  display the default computer component images in 'slideshow' format
function renderInitialImages() {
  //  post images for memory
  memoryImgTag.src = basicComputer.memory.url;
  console.log(`basicComputer.memory.model is: ${basicComputer.memory.model}`);
  memoryImgTag.alt = basicComputer.memory.model;
  console.log(`memoryImgTag.alt is: ${memoryImgTag.alt}`);

  //  post images for processor
  processorImgTag.src = basicComputer.processor.url;
  processorImgTag.alt = basicComputer.processor.model;

  //  post images for storage
  storageImgTag.src = basicComputer.storage.url;
  storageImgTag.alt = basicComputer.storage.model;

  //  post images for chassis
  chassisImgTag.src = basicComputer.chassis.url;
  chassisImgTag.alt = basicComputer.chassis.model;

  //  post images for videocard
  videocardImgTag.src = basicComputer.videocard.url;
  videocardImgTag.alt = basicComputer.videocard.model;

  //  post images for motherboard
  motherboardImgTag.src = basicComputer.motherboard.url;
  motherboardImgTag.alt = basicComputer.motherboard.model;
}

// Function takes computer object and renders TABLE at bottom of page with components, prices.
function renderItemsList(selectedComputer){
  let tableBody = document.getElementById('tableBody');
  let rowElem = document.createElement('tr');

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
  console.log(event.target);
  let memoryIndex = -1;
  console.log(`memoryImgTag.alt: ${memoryImgTag.alt}`);
  console.log(`memoryImgTag.src: ${memoryImgTag.src}`);

  for (let idx = 0; idx < memoryObjects.length; idx++) {
    console.log(`memoryObjects[idx].url is: ${memoryObjects[idx].model}`);
    if (memoryObjects[idx].model === memoryImgTag.alt) {
      memoryIndex = idx;
      break;
    }
  }
 
  if (memoryIndex < 0) {
    console.log('BREAK: memoryIndex is < 0');
    return;
    
  } else if (memoryIndex === memoryObjects.length - 1) {
    console.log('memoryIndex was at end, reset to 0');
    memoryIndex = 0;
  } else {
    memoryIndex++;
    console.log(`memoryIndex incremented to: ${memoryIndex}`);
  }
  memoryImgTag.src = memoryObjects[memoryIndex].url;
  memoryImgTag.alt = memoryObjects[memoryIndex].model;

}

function movePrev(event) {
  console.log('entered memory component movePrev function');
  let clickedItem = event.target;
  console.log(clickedItem);
}

function imgClicked(event){
  let clickedItem = event.target;
  console.log(clickedItem);
}

function memoryClickedHandler(event){
  console.log('entered memoryClickedHandler function');

  // if (event.target.className === 'memoryImg') {
  //   console.log('event.target.classname is memoryImg');
  //   imgClicked(event);
  // } else {
  //   console.log('memoryClickedHandler(event) first "else" called');
  //   //  this code is SUSPECT needs to be tested
  // }

  if(event.target.className === 'prev'){
    movePrev(event);
  }

  if(event.target.className === 'next'){
    moveNext(event);
  }
}

let componentEl = document.getElementById('memory');
// END MEMORY COMPONENT EVENTS

/* REGISTER EVENT LISTENERS */
componentEl.addEventListener('click', memoryClickedHandler);

// end handling methods***********

renderInitialImages();

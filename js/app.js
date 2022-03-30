'use strict';


function renderItemsList(){
  let tableBody = document.getElementById('tableBody');

  let rowElem = document.createElement('tr');
  
  let modelName = basicComputer.chassis.model;
  let itemData = document.createElement('td');
  itemData.textContent = modelName;

  let itemPrice = basicComputer.chassis.price;
  let totalData = document.createElement('td');
  totalData.textContent = itemPrice;

  rowElem.appendChild(itemData);
  rowElem.appendChild(totalData);

  tableBody.appendChild(rowElem);



  let motherBoard = basicComputer.motherboard.model;
  let itemData = document.createElement('td');
  itemData.textContent = motherBoard;

  let itemPrice = basicComputer.motherBoard.price;






}
renderItemsList();

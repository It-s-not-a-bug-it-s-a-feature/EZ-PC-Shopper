let computer = basicComputer;

let checkOutElem = document.getElementById('shopping-cart-total');
let shopShip = document.getElementById('shopShipping');
// let username = readFromStorage('username');
const div = document.getElementById('chekForm');
div.addEventListener('click', doAlert);

function readFromBuildStorage() {
  let retrievedThing = localStorage.getItem('username');
  let parsedThing = JSON.parse(retrievedThing);
  return parsedThing;
}

function doAlert() {
  let cartTotal = 0;
  let readUsername = readFromBuildStorage();
  // event.preventDefault();
  console.log('entered check out handle clicked');
  cartTotal+= computer.chassis.price;
  cartTotal+= computer.motherboard.price;
  cartTotal+= computer.videocard.price;
  cartTotal+= computer.memory.price;
  cartTotal+= computer.processor.price;
  cartTotal+= computer.storage.price;
  let congrats = `${readUsername}, the total of your order is $${cartTotal}.00`;
  checkOutElem.textContent = congrats;
  let shopShips = 'Your order is now being built. You can expect shipment to arrive in 7 - 10 business days.';
  shopShip.textContent = shopShips;
}
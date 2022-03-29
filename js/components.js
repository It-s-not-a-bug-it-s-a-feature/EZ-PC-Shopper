'use strict';

let chassisObjects = [];
let motherboardObjects = [];
let videocardObjects = [];
let processorObjects = [];
let storageObjects = [];
let cpuObjects = [];

/*  set up chassis object */
function Component(compType, makeModel, itemPrice, itemDescription, imageUrl) {
  this.componentType = compType;
  this.model = makeModel;
  this.price = itemPrice;
  this.description = itemDescription;
  this.url = imageUrl;
  if (this.compType.toLowercase() === 'case') {
    chassisObjects.push(this);
  }
  else if (this.componentType.toLowerCase() === 'motherboard') {
    motherboardObjects.push(this);
  }
  else if (this.componentType.toLowerCase() === 'videocard') {
    videocardObjects.push(this);
  }
  else if (this.compType.toLowerCase() === 'processor') {
    processorObjects.push(this);
  }
  else if (this.compType.toLowerCase() === 'storage') {
    storageObjects.push(this);
  }
}

/* set up object arrays of components */
//  chassis item full name, price, description, image path
new Component('chassis','Deepcool Matrix', 50, '', '');
new Component('chassis','Dell WeezleWomper', 25, '', '');
new Component('chassis','In Win Chopin', 125, '', '');
new Component('chassis','Lian Li O11', 120, '', '');
new Component('chassis','Rosewill D100', 100, '', '');
new Component('chassis','Cooler Master MB320L', 75, '', '');

//  motherboard item full name, price, description, image path
new Component('motherboard', 'ASRock B660M Pro', 75, '', '');
new Component('motherboard', 'ASRock Chimibonga', 25, '', '');
new Component('motherboard', 'Gigabyte GA-AB350N', 125, '', '');
new Component('motherboard', 'MSI B250 M3', 90, '', '');
new Component('motherboard', 'MSI B450M', 90, '', '');
new Component('motherboard', 'ASRock B550', 140, '', '');

new Component('processor', 'Intel Core i3', 350, '', '');
new Component('processor', 'i3 10105 AIDS', 50, '', '');
new Component('processor', 'AMD Ryzen 5', 485, '', '');
new Component('processor', 'Intel i5-7500', 120, '', '');
new Component('processor', 'AMD Ryzen 5 2600', 120, '', '');
new Component('processor', 'Ryzen 5 5600X', 230, '', '');


/* setup categorical configurations */
function Computer(name) {
  this.userName = name;
  this.chassis = chassisObjects[0];
  this.motherboard = motherboardObjects[0];
  this.cpu = cpuObjects[0];
}

/* test system using template constructor */
let basicComputer = new Computer('Basic User');
let midLevelComputer = new Computer('Office Worker');
let highEndComputer = new Computer('Gamer Creator');

/* test a system setup in an array */
//let testSetup = [chassis["Cooler Master MB320L"], motherboards["MSI B250 M3"], cpus["AMD Ryzen 5 2600"]];

console.log(basicComputer);
console.log(midLevelComputer);
console.log(highEndComputer);

'use strict';

let chassisObjects = [];
let motherboardObjects = [];
let videocardObjects = [];
let processorObjects = [];
let storageObjects = [];
let memoryObjects = [];


/*  set up chassis object */
function Component(compType, makeModel, itemPrice, itemDescription, imageUrl) {
  this.componentType = compType;
  this.model = makeModel;
  this.price = itemPrice;
  this.description = itemDescription;
  this.url = imageUrl;
  if (this.componentType.toLowerCase() === 'chassis') {
    chassisObjects.push(this);
  }
  else if (this.componentType.toLowerCase() === 'motherboard') {
    motherboardObjects.push(this);
  }
  else if (this.componentType.toLowerCase() === 'videocard') {
    videocardObjects.push(this);
  }
  else if (this.componentType.toLowerCase() === 'processor') {
    processorObjects.push(this);
  }
  else if (this.componentType.toLowerCase() === 'storage') {
    storageObjects.push(this);
  }
  else if (this.componentType.toLowerCase() === 'memory') {
    memoryObjects.push(this);
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
new Component('processor', 'i3 10105 VIZZ', 50, '', '');
new Component('processor', 'AMD Ryzen 5', 485, '', '');
new Component('processor', 'Intel i5-7500', 120, '', '');
new Component('processor', 'AMD Ryzen 5 2600', 120, '', '');
new Component('processor', 'Ryzen 5 5600X', 230, '', '');

new Component('memory', 'GSkill RipJaws V', 60, '', '');
new Component('memory', '8GB DootJigglers', 50, '', '');
new Component('memory', 'Corsair Vengence LPX 8GB', 50, '', '');
new Component('memory', 'Elite+ 16GB', 60, '', '');
new Component('memory', 'T-Force Vulcan', 65, '', '');
new Component('memory', 'Team T-Force 16GB', 75, '', '');

new Component('storage', 'Western Digital Blue SN550', 60, '', '');
new Component('storage', '1TB Solid Strong Man Hard Drive', 200, '', '');
new Component('storage', 'Samsung EVO 250GB', 45, '', '');
new Component('storage', 'Crucial P2 1TB', 95, '', '');
new Component('storage', 'SeaGate FireCoulda', 45, '', '');
new Component('storage', 'Team MP33 1TB', 80, '', '');

new Component('videocard', 'GE-Force GT1030', 140, '', '');
new Component('videocard', 'Intel UHD 630', 150, '', '');
new Component('videocard', 'MSI GE-Force GTX 660 TI 2GB', 125, '', '');
new Component('videocard', 'MSI GE-Force GTX 960 4GB', 160, '', '');
new Component('videocard', 'GE-Force GTX 1660 6GB', 220, '', '');

/* setup categorical configurations */
function Computer(name) {
  this.userName = name;
  this.chassis = chassisObjects[0];
  this.motherboard = motherboardObjects[0];
  this.videocard = videocardObjects [0];
  this.processor = processorObjects [0];
  this.memory = memoryObjects [0];
  this.storage = storageObjects [1];
}

/* test system using template constructor */
let basicComputer = new Computer('Basic User');
let midLevelComputer = new Computer('Productivity User');
let highEndComputer = new Computer('Gamer User');

/* test a system setup in an array */
//let testSetup = [chassis["Cooler Master MB320L"], motherboards["MSI B250 M3"], cpus["AMD Ryzen 5 2600"]];

console.log(basicComputer);
console.log(midLevelComputer);
console.log(highEndComputer);

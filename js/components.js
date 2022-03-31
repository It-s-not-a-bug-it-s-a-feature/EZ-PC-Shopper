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
new Component('Chassis','Deepcool Matrix', 50, '', 'imgs/tower.jpg');
new Component('Chassis','Dell WeezleWomper', 25, '', '');
new Component('Chassis','In Win Chopin', 125, '', '');
new Component('Chassis','Lian Li O11', 120, '', '');
new Component('Chassis','Rosewill D100', 100, '', '');
new Component('Chassis','Cooler Master MB320L', 75, '', '');

//  motherboard item full name, price, description, image path
new Component('Motherboard', 'ASRock B660M Pro', 75, '', 'imgs/motherboard0.jpg');
new Component('Motherboard', 'ASRock Chimibonga', 25, '', '');
new Component('Motherboard', 'Gigabyte GA-AB350N', 125, '', '');
new Component('Motherboard', 'MSI B250 M3', 90, '', '');
new Component('Motherboard', 'MSI B450M', 90, '', '');
new Component('Motherboard', 'ASRock B550', 140, '', '');

new Component('Processor', 'Intel Core i3', 350, '', 'imgs/cpu-green.jpg');
new Component('Processor', 'i3 10105 VIZZ', 50, '', '');
new Component('Processor', 'AMD Ryzen 5', 485, '', '');
new Component('Processor', 'Intel i5-7500', 120, '', '');
new Component('Processor', 'AMD Ryzen 5 2600', 120, '', '');
new Component('Processor', 'Ryzen 5 5600X', 230, '', '');

new Component('Memory', 'GSkill RipJaws V', 60, '', 'imgs/ram1.jpg');
new Component('Memory', '8GB DootJigglers', 50, '', '');
new Component('Memory', 'Corsair Vengence LPX 8GB', 50, '', '');
new Component('Memory', 'Elite+ 16GB', 60, '', '');
new Component('Memory', 'T-Force Vulcan', 65, '', '');
new Component('Memory', 'Team T-Force 16GB', 75, '', '');

new Component('Storage', 'Western Digital Blue SN550', 60, '', 'imgs/storage1.jpg');
new Component('Storage', '1TB Solid Strong Man Hard Drive', 200, '', '');
new Component('Storage', 'Samsung EVO 250GB', 45, '', '');
new Component('Storage', 'Crucial P2 1TB', 95, '', '');
new Component('Storage', 'SeaGate FireCoulda', 45, '', '');
new Component('Storage', 'Team MP33 1TB', 80, '', '');

new Component('Videocard', 'GE-Force GT1030', 140, '', 'imgs/gpu.jpg');
new Component('Videocard', 'Intel UHD 630', 150, '', '');
new Component('Videocard', 'MSI GE-Force GTX 660 TI 2GB', 125, '', '');
new Component('Videocard', 'MSI GE-Force GTX 960 4GB', 160, '', '');
new Component('Videocard', 'GE-Force GTX 1660 6GB', 220, '', '');

/* setup categorical configurations */
function Computer(name, chassisID, motherboardID, videocardID, processorID, memoryID, storageID) {
  this.userName = name;
  this.chassis = chassisObjects[chassisID];
  this.motherboard = motherboardObjects[motherboardID];
  this.videocard = videocardObjects [videocardID];
  this.processor = processorObjects [processorID];
  this.memory = memoryObjects [memoryID];
  this.storage = storageObjects [storageID];
}

/* test system using template constructor */
let basicComputer = new Computer('Basic User', 0, 0, 0, 0, 0, 0);
let midLevelComputer = new Computer('Productivity User', 3, 3, 3, 3, 3, 3);
let highEndComputer = new Computer('Gamer User', 6, 6, 6, 6, 6, 5);

/* test a system setup in an array */
//let testSetup = [chassis["Cooler Master MB320L"], motherboards["MSI B250 M3"], cpus["AMD Ryzen 5 2600"]];

console.log(`basicComputer: ${basicComputer}`);
console.log(`midLevelComputer: ${midLevelComputer}`);
console.log(`highEndComputer: ${highEndComputer}`);

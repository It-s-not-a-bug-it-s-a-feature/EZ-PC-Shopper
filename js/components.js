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
new Component('Chassis','Deepcool Matrix', 50, 'Basic', '../img/tower.jpg');
new Component('Chassis','Dell WeezleWomper', 25, 'Basic', '../img/tower.jpg');
new Component('Chassis','In Win Chopin', 125, 'Advanced', '../img/tower1.jpg');
new Component('Chassis','Lian Li O11', 120, 'Advanced', '../img/tower1.jpg');
new Component('Chassis','Rosewill D100', 100, 'Middle', '../img/tower0.jpg');
new Component('Chassis','Cooler Master MB320L', 75, 'Middle', '../img/tower0.jpg');

//  motherboard item full name, price, description, image path
new Component('Motherboard', 'ASRock B660M Pro', 75, 'Basic', '../img/motherboard0.jpg');
new Component('Motherboard', 'ASRock Chimibonga', 25, 'Basic', '../img/motherboard0.jpg');
new Component('Motherboard', 'Gigabyte GA-AB350N', 125, 'Advanced', '../img/motherboard0.jpg');
new Component('Motherboard', 'MSI B250 M3', 90, 'Middle', '../img/motherboard0.jpg');
new Component('Motherboard', 'MSI B450M', 90, 'Middle', '../img/motherboard0.jpg');
new Component('Motherboard', 'ASRock B550', 140, 'Advanced', '../img/motherboard0.jpg');

new Component('Processor', 'Intel Core i3', 350, 'Advanced', '../img/cpu3.jpg');
new Component('Processor', 'i3 10105 VIZZ', 50, 'Basic', '../img/cpu-green.jpg');
new Component('Processor', 'AMD Ryzen 5', 485, 'Advanced', '../img/cpu3.jpg');
new Component('Processor', 'Intel i5-7500', 120, 'Basic', '../img/cpu-green.jpg');
new Component('Processor', 'AMD Ryzen 5 2600', 120, 'Middle', '../img/cpu2.jpg');
new Component('Processor', 'Ryzen 5 5600X', 230, 'Middle', '../img/cpu2.jpg');

new Component('Memory', 'GSkill RipJaws V', 60, 'Middle', '../img/ram2.jpg');
new Component('Memory', '8GB DootJigglers', 50, 'Basic', '../img/ram1.jpg');
new Component('Memory', 'Corsair Vengence LPX 8GB', 50, 'Basic', '../img/ram1.jpg');
new Component('Memory', 'Elite+ 16GB', 60, 'Middle', '../img/ram2.jpg');
new Component('Memory', 'T-Force Vulcan', 65, 'Advanced', '../img/ram3.jpg');
new Component('Memory', 'Team T-Force 16GB', 75, 'Advanced', '../img/ram3.jpg');

new Component('Storage', 'Western Digital Blue SN550', 60, 'Middle', '../img/storage2.jpg');
new Component('Storage', '1TB Solid Strong Man Hard Drive', 200, 'Advanced', '../img/storage3.jpg');
new Component('Storage', 'Samsung EVO 250GB', 45, 'Basic', '../img/storage1.jpg');
new Component('Storage', 'Crucial P2 1TB', 95, 'Advanced', '../img/storage3.jpg');
new Component('Storage', 'SeaGate FireCoulda', 45, 'Basic', '../img/storage1.jpg');
new Component('Storage', 'Team MP33 1TB', 80, 'Middle', '../img/storage2.jpg');

new Component('Videocard', 'GE-Force GT1030', 140, 'Basic', '../img/gpu1.jpg');
new Component('Videocard', 'Intel UHD 630', 150, 'Middle', '../img/gpu2.jpg');
new Component('Videocard', 'MSI GE-Force GTX 660 TI 2GB', 125, 'Basic', '../img/gpu1.jpg');
new Component('Videocard', 'MSI GE-Force GTX 960 4GB', 160, 'Middle', '../img/gpu2.jpg');
new Component('Videocard', 'GE-Force GTX 1660 6GB', 220, 'Advanced', '../img/gpu3.jpg');

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

console.log(`basicComputer: ${basicComputer}`);
console.log(midLevelComputer);
console.log(highEndComputer);

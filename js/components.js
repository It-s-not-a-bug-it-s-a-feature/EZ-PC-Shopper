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
new Component('Chassis','Deepcool Matrix', 50, 'This is the housing that protects and organizes all the components in your computer. A higher-end chassis will provide better cooling and run quieter.', 'imgs/tower.jpg');
new Component('Chassis','Dell WeezleWomper', 25, 'This is the housing that protects and organizes all the components in your computer. A higher-end chassis will provide better cooling and run quieter.', 'imgs/tower0.jpg');
new Component('Chassis','In Win Chopin', 125, 'Advanced', 'imgs/tower1.jpg');
new Component('Chassis','Lian Li O11', 120, 'Advanced', 'imgs/tower2.jpg');
new Component('Chassis','Rosewill D100', 100, 'Middle', 'imgs/tower3.jpg');
new Component('Chassis','Cooler Master MB320L', 75, 'Middle', 'imgs/tower4.jpg');


//  motherboard item full name, price, description, image path
new Component('Motherboard', 'ASRock B660M Pro', 75, 'This is the backbone of the computer; it allows all of the other components to plug into it and communicate. If you plan to reconfigure other components down the road, opt for a motherboard with more slots.', 'imgs/motherboard1.jpg');
new Component('Motherboard', 'ASRock Chimibonga', 25, 'This is the backbone of the computer; it allows all of the other components to plug into it and communicate. If you plan to reconfigure other components down the road, opt for a motherboard with more slots.', 'imgs/motherboard2.jpg');
new Component('Motherboard', 'Gigabyte GA-AB350N', 125, 'Advanced', 'imgs/motherboard3.jpg');
new Component('Motherboard', 'MSI B250 M3', 90, 'Middle', 'imgs/motherboard4.jpg');
new Component('Motherboard', 'MSI B450M', 90, 'Middle', 'imgs/motherboard5.jpg');
new Component('Motherboard', 'ASRock B550', 140, 'Advanced', 'imgs/motherboard6.jpeg');


new Component('Processor', 'Intel Core i3', 350, 'Advanced', 'imgs/cpu1.jpg');
new Component('Processor', 'i3 10105 VIZZ', 50, 'Also referred to as CPU, this is the brains of your computer. An entry-level chip will be sufficient for basic tasks like browsing the web and watching videos. But if you\'ll be doing many basic tasks at once, opt to step up a model.', 'imgs/cpu3.jpg');
new Component('Processor', 'AMD Ryzen 5', 485, 'Advanced', 'imgs/cpu4.jpg');
new Component('Processor', 'Intel i5-7500', 120, 'Also referred to as CPU, this is the brains of your computer. An entry-level chip will be sufficient for basic tasks like browsing the web and watching videos. But if you\'ll be doing many basic tasks at once, opt to step up a model.', 'imgs/cpu6.jpg');
new Component('Processor', 'AMD Ryzen 5 2600', 120, 'Middle', 'imgs/cpu5.jpeg');
new Component('Processor', 'Ryzen 5 5600X', 230, 'Middle', 'imgs/cpu2.jpg');


new Component('Memory', 'GSkill RipJaws V', 60, 'Middle', 'imgs/ram1.jpg');
new Component('Memory', '8GB DootJigglers', 50, 'Memory, or RAM, stores information that your computer is actively using so that it can be accessed quickly. The more programs you run, the more RAM you\'ll need.', 'imgs/ram2.jpg');
new Component('Memory', 'Corsair Vengence LPX 8GB', 50, 'Memory, or RAM, stores information that your computer is actively using so that it can be accessed quickly. The more programs you run, the more RAM you\'ll need.', 'imgs/ram3.jpg');
new Component('Memory', 'Elite+ 16GB', 60, 'Middle', 'imgs/ram4.jpg');
new Component('Memory', 'T-Force Vulcan', 65, 'Advanced', 'imgs/ram5.jpg');
new Component('Memory', 'Team T-Force 16GB', 75, 'Advanced', 'imgs/ram6.jpg');


new Component('Storage', 'Western Digital Blue SN550', 60, 'Middle', 'imgs/storage3.jpg');
new Component('Storage', '1TB Solid Strong Man Hard Drive', 200, 'Advanced', 'imgs/storage2.jpg');
new Component('Storage', 'Samsung EVO 250GB', 45, 'This is the long-term, permanent data storage.', 'imgs/storage1.jpg');
new Component('Storage', 'Crucial P2 1TB', 95, 'Advanced', 'imgs/storage4.jpg');
new Component('Storage', 'SeaGate FireCoulda', 45, 'This is the long-term, permanent data storage.', 'imgs/storage5.jpg');
new Component('Storage', 'Team MP33 1TB', 80, 'Middle', 'imgs/storage6.jpg');

new Component('Videocard', 'GE-Force GT1030', 140, 'Also called GPU, this is an important feature for gamers. It translates data into images. With a more powerful video card, more information can displayed in a shorter time.', 'imgs/gpu3.jpg');
new Component('Videocard', 'Intel UHD 630', 150, 'Middle', 'imgs/gpu1.jpg');
new Component('Videocard', 'MSI GE-Force GTX 660 TI 2GB', 125, 'Also called GPU, this is an important feature for gamers. It translates data into images. With a more powerful video card, more information can displayed in a shorter time.', 'imgs/gpu2.jpg');
new Component('Videocard', 'MSI GE-Force GTX 960 4GB', 160, 'Middle', 'imgs/gpu4.jpg');
new Component('Videocard', 'GE-Force GTX 1660 6GB', 220, 'Advanced', 'imgs/gpu5.jpg');


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
let basicComputer = new Computer('BasicUser', 0, 0, 0, 0, 0, 0);
let midLevelComputer = new Computer('ProductivityUser', 3, 3, 3, 3, 3, 3);
let highEndComputer = new Computer('HighPerfUser', 6, 6, 6, 6, 6, 5);

/* test a system setup in an array */
//let testSetup = [chassis["Cooler Master MB320L"], motherboards["MSI B250 M3"], cpus["AMD Ryzen 5 2600"]];

console.log(`basicComputer: ${basicComputer.chassis.url}, ${basicComputer.motherboard.url}, ${basicComputer.videocard.url}, ${basicComputer.processor.url}, ${basicComputer.memory.url}, ${basicComputer.storage.url}`);
console.log(`midLevelComputer: ${midLevelComputer}`);
console.log(`highEndComputer: ${highEndComputer}`);

'use strict';

/* set up object arrays of components */
//  item full name, price
let chassisObjects = [
  { 'Deepcool Matrix': 50 },
  { 'Dell WeezleWomper': 25 },
  { 'In Win Chopin': 125 },
  { 'Lian Li O11': 120 },
  { 'Rosewill D100': 100 },
  { 'Cooler Master MB320L': 75 },
];


let motherboardObjects = [
  { 'ASRock B660M Pro': 75 },
  { 'ASRock Chimibonga': 25 },
  { 'Gigabyte GA-AB350N': 125 },
  { 'MSI B250 M3': 90 },
  { 'MSI B450M': 90 },
  { 'ASRock B550': 140 },
];

let cpuObjects = [
  { 'Intel Core i3': 350 },
  { 'i3 10105 AIDS': 50 },
  { 'AMD Ryzen 5': 485 },
  { 'Intel i5-7500': 120 },
  { 'AMD Ryzen 5 2600': 120 },
  { 'Ryzen 5 5600X': 230 },
];

/* setup categorical configurations */
function Computer(name) {
  this.userName = name;
  this.chassis = chassisObjects[0];
  this.motherboard = motherboardObjects[0];
  this.cpu = cpuObjects[0];
}

/* test system using template constructor */
let basicComputer = new Computer('Basic User');
let midLevelComputer = new Computer("Office Worker");
let highEndComputer = new Computer("Gamer Creator");

/* test a system setup in an array */
//let testSetup = [chassis["Cooler Master MB320L"], motherboards["MSI B250 M3"], cpus["AMD Ryzen 5 2600"]];

console.log(basicComputer);
console.log(midLevelComputer);
console.log(highEndComputer);
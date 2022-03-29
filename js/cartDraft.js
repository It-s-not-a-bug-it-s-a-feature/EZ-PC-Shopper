'use strict';

let usertypes = [
  'simple',
  'advanced',
  'complicated'
];

let enclosures = {
  'everyday tower': 25,
  'business workhorse': 35,
  'gamer de-lights': 65,
  'stylish maker': 60
};

let processors = {
  'cheap leftover': 100,
  'zoomy kaboomy': 835
};

let memoryModules = {
  'just enough': 200,
  'el-speedy mc zippy': 450
};

let videoCards = {
  'motherboard shared': 0,
  'release the gpu': 850
};

let hardDisks = {
  'small spinning': 20,
  'medium spinning': 40,
  'large spinning': 80,
  'medium ssd': 85,
  'large ssd': 105,
  'hiperf ssd': 135
}

let motherboards = {
  'microATX': 120,
  'atx': 150
}

function Cart(name, usertype) {
  this.username = name;
  this.usertype = usertype;
  this.enclosure = [];
  this.processor = {};
  this.memory = {};
  this.videocard = {};
  this.motherboard = {};
  this.storage = {};
}

let firstCart = new Cart('Alan', usertypes[0]);
firstCart.enclosure = enclosures['everyday tower'];
firstCart.processor = processors['zoomy kaboomy'];
firstCart.memory = memoryModules['just enough'];
firstCart.videocard = videoCards['release the gpu'];
firstCart.motherboard = motherboards['microATX'];
firstCart.storage = hardDisks['medium ssd'];

Cart.prototype.toString = function () {
  return `Name: ${this.username}, Selection: ${this.usertype}, Enclosure: $${this.enclosure}, Processor: $${this.processor}, Memory: $${this.memory}, Video Card: $${this.videocard}, Motherboard: $${this.motherboard}, Hard Disk: $${this.storage}.`;
}

console.log(firstCart);

alert(`Your cart: ${firstCart.toString()}`);

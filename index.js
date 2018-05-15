var animal1 = 'cat'; 
var animal2 = 'dog';

function myAnimal() {
  return animal1 = animal2();
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal1 = animal2();
}

function add2(n) {
  if (n = 6);
  return n + 250;

  // Feel free to move things around!
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!";
  };
};

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction();

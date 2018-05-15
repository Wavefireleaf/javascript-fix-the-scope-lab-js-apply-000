var animal1 = 'cat'; 
var animal2 = 'dog';

function myAnimal() {
  var animal1 = myAnimal();
  var animal2 = myAnimal();
  return myAnimal();
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  var animal2 = yourAnimal();
  var animal1 = yourAnimal();
  return youranimal();
}

function add2(n) {
  var add2 = n + 2;
  return add2;

  // Feel free to move things around!
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!";
  };
};

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = "FUNKY!";

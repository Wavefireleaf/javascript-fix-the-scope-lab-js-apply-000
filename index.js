var animal = 'cat'; 
var animal = 'dog';

function myAnimal() {
  return yourAnimal();
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return myAnimal();
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

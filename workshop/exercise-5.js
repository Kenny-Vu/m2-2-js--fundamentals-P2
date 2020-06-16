// Q5
// Write a function that takes an array and a value as arguments and
// returns true if the value is in the array else it returns false.

function itemIsPresent(array, item) {
  let isItemThere = array.indexOf(item);
  if (isItemThere === -1) {
    return false;
  } else {
    return true;
  }
}

// Test case
const myArray = [
  'bacon',
  'purple',
  'door',
  'window',
  'exist',
  'code',
  'program',
  'funky',
];

console.log(itemIsPresent(myArray, 'funky')); // true
console.log(itemIsPresent(myArray, 'elephant')); // false

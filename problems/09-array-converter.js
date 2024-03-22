/***********************************************************************
Write a function `arrayConverter(array)` that will intake an
array as an argument and returns an object representing the count of each
value in the array. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}
***********************************************************************/

function arrayConverter(array) {

  //create an empty object
  let obj = {};

  //loop through array
  for (let i = 0; i < array.length; i++) {

  //store value in variable
  let keyVal = array[i];

  //ask if object contains value as key
     if(obj[keyVal] !== undefined ) {

  //if yes increment count on value as key
        obj[keyVal]++

      }

     //if object is missing value as key
     else {

  //add value to object with 1 being the count
     obj[keyVal] = 1;

     }

 }

  //return object
  return obj;

};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = arrayConverter;

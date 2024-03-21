/***********************************************************************
Write a function called `valuesInObject(obj)` that takes in an object and returns
an array of all the values within that Object.


Do this once using using a `for...in` loop and once using `Object.values`.


Examples:

let animals = {dog: "Wolfie", cat: "Jet", bison: "Bilbo"}
let foods = {apple: "tart", lemon: "sour", mango: "sweet"}
valuesInObject(animals); // => ["Wolfie", "Jet", "Bilbo"]
valuesInObject(foods); // => ["tart", "sour", "sweet"]
***********************************************************************/

/*function valuesInObject(obj) {

  //create empty array
  let ansArr = [];

  //start for in loop
  for (let key in obj) {

  //store value in variable
  let val = obj[key];

  //send to array
  ansArr.push(val);

  }
  //return array
  return ansArr;

} */

let valuesInObject = (obj) => {

  return Object.values(obj);
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuesInObject;

/***********************************************************************
Write a function `appleCounter(appleObj)` that takes in an object containing a
number of keys that have the word 'apple' contained within them. The `appleCounter`
function will be in charge of returning the number of keys that contain the word
"apple".

**Hint**: you may want to take all the keys and lower case them for easier
searching.


Example:
let obj = { banana: "yay!" };
appleCounter(obj); // => 0

let obj1 = { crabapple: "yum!" };
appleCounter(obj1); // => 1

let obj2 = { crabapple: "yum!", honeyapple: "super yum", banana: "yay" };
appleCounter(obj2); // => 2


let obj3 = {
  crabApple: "yum!",
  honeyApple: "super yum",
  banana: "yay",
  bigapple: "NYC"
};
appleCounter(obj3); // => 3
***********************************************************************/

function appleCounter(appleObj) {

  //get the keys from object and put in array
  let keysArr = Object.keys(appleObj); //lower case the keys

  //create a counter starting at zero
  let count = 0;

  //loop through the array
  for (let i = 0; i < keysArr.length; i++) {

  //store index value in variable
  let val = keysArr[i].toLowerCase();

  //ask if value string contains apple
    if(val.includes("apple")) {

  //if yes increment counter
  count++;

    }

  }
  //return count
  return count;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = appleCounter;

/***********************************************************************
Write a function `stringConverter(string)` that will intake a
string as an argument and returns an object representing the count of each
character in the string. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(stringConverter("apple")); // => {a: 1, p: 2, l: 1, e: 1}
console.log(stringConverter("banana")); // => {b: 1, a: 3, n: 2}
console.log(stringConverter("raccoon")); // => {r: 1, a: 1, c: 2, o: 2, n: 1}
***********************************************************************/

function stringConverter(string) {

  //change string into array
  let strArr = string.split("");

  //create object
  let obj = {};

  //loop through array
  for (let i = 0; i < strArr.length; i++) {

  //set variable for value at index
  let currChar = strArr[i];

  //ask if curr char is in obj
     if(obj[currChar] !== undefined) {

  //if yes increment curr char count in obj
  obj[currChar]++;

  }

  //otherwise add charcter to object with count as 1
     else {

      obj[currChar] = 1;

     }

    }

  //return object
  return obj;

};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = stringConverter;

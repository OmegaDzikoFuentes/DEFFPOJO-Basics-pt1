/***********************************************************************
Write a function `getFullName(person)` that takes in an person object
and returns a string containing their full name.


Examples:
let p1 = {firstName: 'John', lastName: 'Doe'};
getFullName(p1); // => 'John Doe'
let p2 = {firstName: 'Charlie', lastName: 'Brown', age: 9};
getFullName(p2); // => 'Charlie Brown'
***********************************************************************/

function getFullName(person) {

  //create empty array
  let ansArr = [];

  //itwerate through object
  for (let key in person) {

    //store values in variable
    let val = person[key];

    //set condition to catch name
    if(key === "firstName" || key === "lastName") {

      //send variable to array
  ansArr.push(val);

    }

  }

  //return array changed to string
  return ansArr.join(" ");
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = getFullName;

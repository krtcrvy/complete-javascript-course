/* function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;

      // Creating NEW variable with same name as outer scope's variable
      const firstName = "Steven";

      // Reassigning outer scope's variable
      const output = "NEW OUTPUT!";

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = "Jonas";
calcAge(1991);
// console.log(age);
// printAge();
*/

/* console.log(me);
// console.log(job);
// console.log(year);

var me = "Jonas";
let job = "teacher";
const year = 1991;

console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

// Functions
function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b; */

// Example

/* console.log(undefined);

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log("All products deleted!");
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAge(1991);

// const calcAgeArrow = (birthYear) => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAgeArrow(1980);
 */

/* const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
  // this keyword does not work with arrow functions, it will point to the global object
  calcAgeArrow: () => {
    console.log(this);
    console.log(2037 - this.year);
  },
};

jonas.calcAge();
jonas.calcAgeArrow();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f(); */

// var firstName = "Matilda";

/* const jonas = {
  firstName: "Jonas",
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },
  greet: function () {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

jonas.greet();
jonas.calcAge();

// Note: Do NOT use arrow functions as methods
// Arrow functions do not get their own this keyword, they simply use the this keyword of their parent scope

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(2, 5);
*/

// Primitives vs Objects
// let age = 30;
// let oldage = age;
//
// age = 31;
//
// console.log(age);
// console.log(oldage);
//
// const me = {
//   name: 'Jonas',
//   age: 30,
// };
//
// const friend = me;
// friend.age = 27;
//
// console.log('Friend:', friend);
// console.log('Me:', me);

// Primitive types
let lastName = "Williams";
const oldLastName = lastName;
lastName = "Davis";
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};

// Copying objects
const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
console.log("Before marriage:", jessica);
console.log("After marriage:", marriedJessica);

// marriedJessica = {};

// Copying objects
const jessica2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["Alice", "Bob"],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davis";

jessicaCopy.family.push("Mary");
jessicaCopy.family.push("John");

console.log("Before marriage:", jessica2);
console.log("After marriage:", jessicaCopy);

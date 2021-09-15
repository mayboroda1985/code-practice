// //Solve a task with logical operators in such a way as on example:

// //Example:
// let chocolate = true;
// let strawberry = false;
// let apple = true;
// let caramel = true;

// // case 1: I want ((strawberry and chocolate) or apple) or no caramel
// let icecream = ((strawberry && chocolate) || apple) || !caramel;
// console.log("case 1: " + icecream);

// // case 2: I want (strawberry and (chocolate or apple)) or without caramel
// icecream = (strawberry && (chocolate || apple)) || !caramel;
// console.log("case 2: " + icecream);

//TASKS:

// let pizza = true;
// let pasta = false;
// let capers = true;
// let tomatos = true;

// //1. case 1: I want pizza and pasta and (no capers or no tomatos); => the result is false

// let lunch = pizza && pasta && (!capers || !tomatos);
// console.log(" case 1: " + lunch);

// //  case 2: I want ((pizza and tomatos) or (pasta and  capers and no tomatos)); => the result is true

// lunch = ((pizza && tomatos) ||(pasta && capers && !tomatos));
// console.log("case 2: " + lunch);

/* 2.
case 1: (Number a is bigger than number b) and b is not equal to 0
or a is not negative number; console.log(" case 1: " + res);  => the result is true */
let a = 5;
let b = 7;
let res = (a > b) && b != 0 || a >= 0;
console.log(" case 1: " + res);
or
console.log(" case 1: " + ((a > b) && b != 0 || a >= 0));
How this was resolved step by step including order of precedence:

1) (a > b)               ------> false (result of comparison);
2) ' case 1: ' + false   ------>  "case 1: false" result of concatination , becase string and sign of addition give concatination
3) true && true          ------> true   true && true || a >= 0
4)  a >= 0                ------> true
5) true && true           ------> true

/* case 2: (Number a is a positive number or number b is a positive number)
or b is not equal to 0 and a is equal to 7; => the result is true */

let res1 = ((a >= 0 || b >= 0) || (b !== 0 && a == 7));
console.log("case 2: " + res1);

//3. case 1: (Data type of 'one' is a string and (data type of 'two' is a boolean or number)) and data type of three is not a boolean => the result is false
// case 2: (Data type of 'one' is a number and data type of 'two' is boolean) or (data type of 'three'
// is not a boolean or data type of one is not a string) => the result is true

let one = 0;
let two = 'Hello';
let three = true;
//3. case 1: (Data type of 'one' is a string and (data type of 'two' is a boolean or number))
// and data type of three is not a boolean => the result is false

let res = (typeof one == 'string' && ( typeof two == 'boolean' || typeof two == 'number') && typeof three !== 'boolean');
console.log("case 1: " + res);
let res2 =(typeof one == 'number' && typeof two == 'boolean') || (typeof three !=='boolean'  || typeof one !=='string');
console.log("case 2: " + res2);


//4. case 1: (The new building has 9 windows or a door) and the guest name is John or the address has a data type of a boolean => the result is true
//   case 2: The new building has 8 windows or (no door and the guest name is John) or the address has a data type of a number => the result is true

let windows = 8;
let door = true;
let guest = 'John';
let address = 5;

let building = (window == 9 || door === true) && guest == "John" || typeof address == 'boolean';
console.log("case 1: " + building);
let building1 = window == 8 ||( !door && guest == "John") || typeof address == 'number';
console.log("case 2: " + building);

//8. Transfer 7 to boolean
// let a = 7;
// console.log(!!a);


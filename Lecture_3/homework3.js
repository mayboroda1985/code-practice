// LESSON 3 HOMEWORK

/* #1
fix the code so that the console displays: "undefined" */

let a;
let b = 3;
 console.log("" + a); // in console will be "undefined"


/* #2
Create the variable with the name name, and declare the value -
any name of your choice; */
// Create the variable with the name age, and declare the any value from the range [1; 80];
// Create the variables with the names: isChild; isTeenager; isAdult.
// These variables should contain boolean values, the age must be taken
// into account: child: [1; 10] ,  teenager: [11; 18] ,  adult: 19 and over.

// print 3 phrases to the console, whether the person is a child,
// or a teenager, or an adult, according this form: "Is Anna a child? false"

let name = "Anna";
let age = 36;
let isChild = (age >= 1) && (age <= 10);
let isTeenager = (age >= 11) && (age <= 18);
let isAdult = (age >= 18);
console.log(`Is ${name} a child ? ${isChild}`);
//or
console.log("Is Anna a child ? "  + isChild);
console.log("Is Anna a teenager ? "  + isTeenager);
console.log("Is Anna an adult ? "  + isAdult);

// #3
// Задайте переменную х;
// Назначьте переменную typeX, равную типу данных х;
// Выведите в консоль тип переменной typeX.
let x;
let typeX = typeof x;
console.log(typeof typeX); //in console will be string

// #4 Склад магазина получил 20 утюгов, 15 микроволновок, 12 кофварок и кастрюли.
// Создайте переменные с подходящими названиями и переменную для общего
// количества предметов, запишите в них соответствующие значения;
// Выведите в консоль общее количество предметов.
// Будьте осторожны с пропущенными в документах данными! :)

let ironQuantity = 20;
let microwaveQuantity = 15;
let coffeeMachineQuantity = 12;
let panQuantity;
let totalQuantity = ironQuantity + microwaveQuantity + coffeeMachineQuantity + panQuantity;
console.log(totalQuantity); //in console NaN , because numbers + undefined will be NaN


// #5
// Создайте переменные со значениями: null; undefined; "word"; ''; NaN;
// (NaN + ''); ('a' - 7) .
// Проверьте, являются ли они «не числом»  ->  isNaN();
// Проверьте те же данные, равны ли они NaN ?

let  a = null;
let b = undefined;
let c = "word";
let d = "";
let e = NaN;
let f = (NaN + '');
let g = ('a' - 7);
console.log(isNaN(a));  //isNan perevodit v chislo i proveryaet true or false
console.log(isNaN(b));
console.log(isNaN(c));
console.log(isNaN(d));
console.log(isNaN(e));
console.log(isNaN(f));
console.log(isNaN(g));

console.log(Number.isNaN(a)); // //isNan ne perevodit v chislo no sray daet true or false
console.log(Number.isNaN(b));
console.log(Number.isNaN(c));
console.log(Number.isNaN(d));
console.log(Number.isNaN(e));
console.log(Number.isNaN(f));
console.log(Number.isNaN(g));

// #6
// fix the code using parentheses, expected result: false
// console.log(true || undefined === null && 0 > 1 );

console.log((true || undefined === null)) && 0 > 1 );

// #7
// fix the code using ! (NOT); expected result: null
// console.log(undefined && null && true );
console.log(!undefined && null && true );
console.log(!!null); // in console is false
// #8
// Given three numbers: d = 1.1; e = -1.1; f = 0.
// Use comparison operators to print to the console
// if these numbers are not positive?

let d = 1.1;
let e = -1.1;
let f = 0;
console.log(" d is not positive = " + !(d >= 0));
console.log(" e is not positive = " + !(e >= 0));
console.log(" f is not positive = " + !(f >= 0));

//
console.log(" d is not positive = " + (d<= 0));
console.log(" e is not positive = " + (e <= 0));
console.log(" f is not positive = " + (f <= 0));



// #9
// let num1 = "5";
// let num2 = " 3.4";
// let num3 = " ";
// let num4 = true;
// найдите сумму переменных
// Переведите переменные в number и снова найдите сумму

let num1 = "5";
let num2 = " 3.4";
let num3 = " ";
let num4 = true;
let sum = num1 + num2 + num3 + num4;
let sum1 = +num1 + +num2 + +num3 + +num4;
//or
let sum2 = Number(num1) + Number(num2) + Number(num3) + Number(num4);
console.log(sum);
console.log(sum1);
console.log(sum2);

// #10
// --- baNaNa ---
// используя только эти переменные, вывести в консоль слово "baNaNa"
// let a = 'a';
// let b = 'b';

let a = 'a';
let b = 'b';

console.log( b + a + a * b + a);

//https://www.codewars.com/kata/560f8d41cf6e1fe5c900002e/train/javascript
//https://www.codewars.com/kata/56c24c58e0c0f741d4001aef/train/javascript
//https://www.codewars.com/kata/55a4f9afeffe4231090000d6/train/javascript
//https://www.codewars.com/kata/56dec885c54a926dcd001095/train/javascript



//
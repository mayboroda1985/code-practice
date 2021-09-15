https://jsbin.com/sejiqawusu/edit?js,console

//  LESSON 2:

/* #1
You were paid 5000 in January, and in February you were paid 20% more.
Count your total payment, print in console the type of the total payment,
and print in console concatenation of string "I have " and the total
payment.
You want to buy a new car. Create a variable with the car cost
20000. Then create a string with the name “question” and value
"Can I buy Nissan for ". Create a variable of Boolean data type with
value where you compare your total pay and the car cost. Print in console
the sentence using concatenation of your variables  in order to have
output in console you will see “Can I buy Nissan for my payment for
two months ?”). The last step – print in console your comparison variable. */

let january = 5000;
let february = january + january * 0.2;
let totalPay = january + february;
console.log(`I have ${totalPay}`);
let carCost = 20000;
let question = "Can I buy Nissan for ";
let comparison = totalPay >= carCost;
console.log(`${question} my payment for two months ? `);
or
console.log(question + "my payment for two months ?");
console.log(comparison);


/* #2
A warehouse has 1500 boxes with size 24 x 24 x 12” and 2000 boxes
with size 24 x 18 x 12”. It needs to pack some goods with a volume
of 15 000 cubic feet. Print in console true if the warehouse has enough
boxes to pack all the goods, or false if it doesn’t have enough boxes. */
let qtySize1 = 1500;
let size1 = 24 * 24 * 12 ;
let qtySize2 = 2000;
let size2 = 24 * 18 * 12;
let total = size1 * qtySize1 + qtySize2 * size2;
let totalRequire = 15000;
let  cubInch = 12 ** 3;
console.log(cubInch);
console.log(total / cubInch > totalRequire );

/* #3
Определить вес символа под индексом 2  в строке “I love JavaScript”.
 В консоли вывести букву индекса который будет равно весу символа
 ( пример результата “ n = 120”)
 comment: когда вы определили вес символа под индеком два, сделайте так что бы
в консоли распечаталась буква под индесом 2 которая равно весу X
 ( вес X вы должнны были узнать) */

let string = "I love JavaScript";
let letter = string[2];
console.log(letter.charCodeAt(0));
console.log(string.charCodeAt(2)); //console letter l
console.log(`${letter} = ${string.charCodeAt(2)}`);


// #4
// Using the charCodeAt method, finds out which codes have English
//uppercase and lowercase letters. Print in the console:
// "English capital letters have a code starting with "firstLetterUp"
//and end with "lastLetterUp"." and "English lowercase letters have
//a code starting with "firstLetterDown" and end with "lastLetterDown ".".

// #5
// Приведите строки в числа, а затем преобразуйте в boolean type,
// при a = '23', b = '43';

// #6
// Есть два слова: «Welcome» и «Вэлкам», каждая четвертая буква которых
// имеет свой вес. Определите, какая из них весит больше, во сколько раз
// (и удивитесь, насколько отличается вес английских и русских букв :).
// А затем проверьте бо́льшую букву на чётность/нечётность.

// #7
// In the string "QA For Everyone" find the code values of the first
// letters in each word of the string, then comparing these values,
// find the biggest one. After that, comparing the code values of the
// last letters of each word, find the smallest one.

// #8
// First you have to assign  two numbers (any numbers of your choice) and implement:
// If one of the numbers is even and the other is odd you need to print out - true,
// Otherwise you need to print out - false

// #9
// Create 2 vars. Assign the same float number to both of them : 0.2.
// Multiply these 2 values. Check if the result of multiplying which we get
// in the js equals to the real value (in this case equals to the 0.04).

/* #10
 Four friends are going to the cinema, if everybody agrees (true).
 Create vars: Olya - using boolean, Natalya - using number, Jane - using space
and Marina - using string.  => answer - True */


let olya = true;
let natalya = 10;
let jane = " ";
let marina = "Marina";
console.log( olya && !!natalya && !!jane && !!marina);

// #11
// Declare variables named: apple, banana and kiwi with prices 5, 10 and 7.
// Declare var sum which is the amount for three fruits one of each type.
// Declare new variable result - which is equal to your actual amount spent, then check:
// If result less than sum - “You forget to buy smth, check once again”;
// If result is greater than sum - “You going to pay more for
// ( subtraction sum from result) dollars, check again“;
// If the result is equal to the sum- “Your shopping is done.”


// #12
// Длина диагонали ТВ = 86 inches. Длина коробки = 2 метра. ТВ влезет в коробку?
// True or False ?

//  #13
// //  Colleges are collecting money for the trip. Natalya gave 5147$,
// Jane gave 0$, Marina gave 2358$, Olya gave 1249$.
// //  The trip costs 9800$. Will they go?(=> false).

// #14
// Compare two wishes: "I want to be a QA Engineer" and "I don't want to do my homework".
// The wish that has a higher value of the string will come true. Will I become
// a QA Engineer?

// #15
// In the variable named day is assigned some number between 1 to 31. Determine
// in which decade of the month this number belongs  (to the first, second or third).

// #16
// let color= 'blue';
// let price=10000;
// let make='Toyota';
// let used = true ;
// Case1 I want new  Mercedes car which is blue and price >15000        => false
//     Mercedes && blue && price >15000
//   let case1 = !make && color && !price;
// console.log(case1);

// Case2 I want used car with price 5000 or blue Toyota                 => true
//      price 5000 || blue && Toyota
// let case2 = 5000 < price || color && make;
// console.log(case2);

// #17
// Two friends shopped at the store. Olya bought 25 eggs, and Yulya bought
// five times less eggs than Olya. Find if it is true or false that Olya bought
// more eggs than Yulya.


// #18
//     Bob and Bill have planned their trip to Hawaii. They are really busy
// with work and need to find  the best way to plan their trip.
//      They have 4 options to fly, but only 1 can be good for both of them:
// Calendar hours to fly:
// 1. Monday - 10am;
// 2. Tuesday - 12pm;
// 3. Friday - 6pm;
// 4. Sunday - 1pm;
//    Case 1: Bob can fly Monday any time, and Tuesday after 3pm. And Friday
// till 5pm, and Sunday till 12.30pm.
// Bill can fly Monday after 4pm, and Tuesday anytime. And Friday after 9am,
// and Sunday after 11am.
//    Case 2: Bob can fly only Friday after 3pm, and Sunday any time;
// Bill can fly Monday after 10:01am, or Tuesday after 11:55pm.
// Or Friday till afternoon, and Sunday he is free all day.
//      Find out which case is true or false, to know when they both can plan
//their trip together.

// #19
// Create variables for the names with age: Tom, Sam, Jack, Ted.
// Tom is 16, each friend is 2 years older, starting from Tom in order.
// a)Count the age of each person;
// b) Insert the names with the age to the string, using concatenation and ${}:
// “Tom is - 16 years old, Sam is - …. years old, Jack is … years old,
// Ted is … years old. And the total of our age is ….years old”.
// c) Find out what is the Unicode Value of the 1sr letter of the name,
// and add the total to the string: “The total of the Unicode values of
// the 1st letter of the all names is ….!”.

// #20
// We have string let str = '124, 45, 8';
// Show in Console if numbers in string are even: true/false.
// Expected to see:
// `Number 1: [show number] is even: true;
//  number 2: [show number] is even: false;
// number 3: [show number] is  even: true’

// #21
// Одним из приемов тестирования черного ящика является метод “Эквивалентное разбиение”.
// Суть метода - выделяются множества значений, для которых система применяет
// одинаковую логику.
// Пример:
// В поле можно ввести значения от 0 до 10 включительно, и от 40 до 60 включительно.
// Вопрос: Сколько классов эквивалентности и что тестируем?
// Ответ: 5.
// Тестируемые диапазоны: три зоны некорректных значений (<0, (10;40), >60);
//  и две зоны корректных значений: [0;10)   и (40 ;60) не включительно.

// Необходимо составить и решить задачу для следующих чисел, выбранных для
// тестирования, причем, если число из диапазона некорректных значений ,
// то заменяем его на false, а если из диапазона корректных , то заменяем его
// на true, если числа выбраны из одного диапазона , то между ними ставится знак ||  ,
// а если из разных диапазонов, то знак &&.

// Пример: (-1,19,61,1,56);
// Решение: (false && false && false && true && true);

// (0, 1, 75, 91, 45);
// (-6, 0, 9, 39, 61).

// #22

// Выведите в консоле значение true при следующих переменных:
// red = true;
// green = false;
// black = true;
// grey = true;

// Раскрасьте стены дома в ( red and green or black and grey and green or
// grey and red and green). Порядок расставления скобок за Вами.

// #23
// Вывести в консоле числовое значение (математический вес) индекса 5 во
// фразе «We are the champions”.















//==================
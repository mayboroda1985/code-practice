
// STUDENTS HOMEWORK LESSON 1

//1. Write a code where you will find a perimeter of a square, where side a = 10, side b = 12;

let a = 10, b =12;
let perimeter = 2 * (a + b);
console.log(perimeter);

 /*2.  Create a string with a name userAge and a value “21” and change
the data type from a string to a number and add 10 to that number.  */

 let userAge = "21"; //my solving
     userAge = 21;
   userAge += 10;
 console.log(userAge);
///////////
userAge = userAge * 1;
userAge = userAge +10;
console.log(userAge);

/*3. Create 5 variables, initialize them with integers and find the
 average of variables. Print the result to console*/
  let a = 4,
      b = 3,
     c = 6,
    d = 7,
     e = 8;
 let average =(a + b + c + d + e)/5;
 console.log(average);

 /*4. Create a variable, initialize it with a positive integer.
 Make it negative and print the result to console */

 let a = 10; //my solving
 let b = -1;
  let c = a * b;
console.log(c);

let a = 5; //student solving
a = -a;
console.log(a);


 /*5. Create two variables with values(5, 7). The first with data type Integer
 and the second with a String data type .
 Raise the number 5 to the power of 2, save as a result.
Print in the console the sum of the result and the second variable.*/

 let a = 5; //my solving
 let b = "7";
 let res = a ** 2;
 let sum = res + b;
 console.log(sum);

let a = 5; //student solving
let b = "7";
let res = a * +b;
console.log(res);


 //6. Create the alert “I wanna be the best Software Engineer”.
 let text =  "I wanna be the best Software Engineer";
 alert(text);
 or alert("I wanna be the best Software Engineer");

 /*7. Create two variables of data type String with values:“So what?”
 and “Work hard for that !!!”.
 Concatenate two Strings and print in the console.*/
  let a = "So what?";
  let b = "Work hard for that !!!"
 let c = a + " " + b;
  console.log(c);

/*8. Write a code that calculates your BMI (Body Mass Index),
 where weight=<your_weight_in_kg> and height=<your_height_in_m>.
 Print the result to the console. */

 let weight = 55;
 let height = 5.7;
 let bmi= weight / (height ** 2);
 console.log(bmi);

//8. Transfer 7 to boolean
// let a = 7;
// console.log(!!a);

 /*9. Create two strings with your first name and last name.
Print in console lengths of these strings.*/

 let firstName = "Anna";
 let lastName = "Mayboroda";
 let name = firstName + " " + lastName;
 console.log(name.length);
 console.log(name);

/*10 Create a variable (integer) which is a radius of a circle.
Then write a code and calculate a length of circumference
 (длина окружности) of this circle. */
 let rad = 10;
 const p = 3.14;
 const int = 2;
 let code = rad * int * p;
 console.log(code);


/* 11 Create two integer variables, one of which is a base and another is a height of a triangle,
 initialize them with any values. Then calculate a square footage of a triangle. */
let base = 5;
let hight = 10;
let areaTriangle = (base * hight)/2;
console.log(areaTriangle);

*/ 12 Refer to the last element of a string using a math operation where str = “Never give up”; */

let str = "Never give up";
let lastElement = str[str.length-1];
console.log(lastElement);
console.log(str[str.length-1]);

lecture 3.1 min 40;17
// //13 Determine the remainder of the division of the next variables: a = 11; b = 4. What is the remainder of variable a?
//
// //14. Declare empty variables a that equals true and b equals to 5.Declare variable result and make it equals to sum of a and b. Print the result
//
// //15. Declare variables: x = “8”; y = 2. Create a variable that takes the result of x divided by y. Print result.
//
// //16. Declare a string name and assign it a value of “Tom”, re-assign to a number and show in the console type of the name.
//
// //17. Создайте пустую строку  и определите её длину.
// //18. Создайте переменную name и присвойте ей любое имя. Создайте переменную sign присвойте ей значение первой буквы имени, после которой поставьте ! знак.
//
// //19. If the car travels 600 km in 3 hours, what is it’s speed?
// // Create variables, declare them and console the result.
//
// //20. Create one variable with name firstName, second variable with lastName. And console result as the email: firstName.lastName@gmail.com
//
// //21. Three boys have three boxes. Each boy has 120lbs of weight. Each box has 2 lbs of apples inside. One boy ate half of the box of apples in his box.
// // Question: What is the total lbs boys and apples together? Create the variables and count the amount.
//
// //22. Please concatenate “I”, “ and my friends”, “ love QA_FOR_EVERYONE”, to have only one full string line. And count the length of the string.
//
//
// /* 23. First kid uses 5 diapers a day, the second kid uses 8 diapers a day.
// How many diapers mom should buy to have enough for the next 2 weeks? */
//
// // let firstKid = 5;
// // let secondKid = 8;
// // let totalDiapers = 14 * (firstKid + secondKid);
// // console.log(totalDiapers);
// // console.log(` Mother should buy ${totalDiapers} to be enough for 2 weeks`);
//
// /* 24. Elon Mask building Falcon 9 rockets. The cost of 1 Falcon 9 equal 57 Tesla x model cars.
// Trip to the moon requires 13 rockets.
// Can you help Elon to figure out how many cars he needs to sell in order to achieve his goal? */
//
//
//
// /*25. Create a variable with a name “word”, assign it with value “VOLUME”. By using modulus
// find the remainder of  2 divisions between 90 and 8;
// 11 and 2. Print string that consists of an index of variable “word” equals first division,
//   then second division, next - first char of the string and the last index.
//   Divide indexes with new lines (\n). */
//
// let word = "VOLUME";
// let c = 90;
// let firstDivision = c % 8;
// // console.log(firstDivision);
// let b = 11;
// let secondDivision = b % 2;
// //  console.log(secondDivision);
// //  console.log(word[word.length-2]);
// //  console.log(word[word.length - 1]);
// // console.log(word[0]);
// // console.log(word[word.length-1]);
// console.log(`${firstDivision} \n ${secondDivision} \n ${word[0]} \n ${word[word.length-1]} `);
//
// // console.log(word[word.length-${firstDivision}]);
//
//
// // console.log(str.length);
// // console.log(str[0]);
// // console.log(str.length - 1);
// // console.log(str[str.length - 1]);
//
//
// //26. Create two numbers and assign them random values. Print the result of raising the first number to the power of the second one and add 1 to the result by using increment.
//
// let number1 = 10;
// let number2 = 12;
//
// //27. The biggest word in the world is "pneumonoultramicroscopicsilicovolcanoconiosis". Count and print the number of letters. Print the 10th letter of this word.
//
// //28. Jane paid $4.16 for a sandwich. She paid $0.95 for a piece of fruit. What is the total amount Jane paid for the sandwich and fruit?
// //Print: "Jane paid for her lunch 'total amount' "
//
// //29. Here is the data set: 9, 10, 12, 13, 13, 13, 15, 15, 16, 16, 18.
// // Find and print:
// // Mean = 13
// // Median =
// // Mode
//
// //30. The radius of a cone is 11 inches. Count and print the volume of this cone. The answer has to be a string. Think about the correct format for your answer.
//
// //31. Create variables "a"  with value 15 and "b" with value 18.  Assign the value of the doubled sum of the variables "a" and "b" to the variable "x"  and print the result to console.
// //32. Дана сторона куба  5 см. Найти объем куба. Вывести ответ в виде строки: Объем куба составляет {вложить полученный результат} см.
// //33. Дана строка: "Children can have different hobbies", вычислить длину этой строки, найти элемент под первым и последним индексом, вывести результаты в консоль.
//
// //34. Cторона квадрата равна 10. По середине квадрата проведена линия, разделяющая квадрат на 2 прямоугольника. Найдите и выведите периметр и площадь одного из получившихся прямоугольников.
//
// //35. Create 3 variables: one String type, one boolean and last one number. Check the type of each variable.
// //36. You need  to receive Infinity in the console (using Math) and check what type it will be.
//
// //37. Let’s create a program that will convert our age into days. Create a variable age with your age and create a variable sum to multiply 365, Print console. Note ignore leap years, expect only positive integers.
//
// //38. Elon Musk has created a Tesla bot. We should greet it. Create a variable greeting and declare "Welcome to the earth!" and print it out.
//
// //39. Write a code where you will find distance, where speed = 70, time = 12;
//
// //40. Создайте переменную str и присвойте ей значение 'abcde'. Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'b', символ 'e’.
//
// //41. Напишите скрипт, который считает количество секунд в часе, в сутках, в месяце. Выведите результат в консоль.
//
// //42. Студент решил взять курс. Курс начинается с 1 Сентября по 31 Декабря. Каждый день студент занимается по 3 часа. Напишите, сколько всего времени студент потратит на весь курс. Выведете результат в консоль.
//
// //43. To burn calories for 1 chocolate Marusya needs to run 2km,and to burn calories for 1 ice cream 5km. How far she has to run if she breaks her diet by eating 2,5 chocolates and 3 ice creams.Print the distance in the console.
//
// //44. Print in the console “x” from the word “supercalifragilisticexpialidocious” through enrichment to the index in this word and what is the length of this word.
//
// //45. Create the variable with the name => sentence  and declare the value "Have a nice day". Count the number of letters in a string. Console the result. What is the last letter in the line? Console the number of letters and the last letter. Console the last letter.
//
// //46. Write a code that  calculates Volume of the cube with length of side = 7  and calculate length of all sides. Return statement “The volume of the cube = ...    with length of 1 side = … and length of all sides …” -> using ` ${}`.
// //47. Write a code that picks up the height and base of the triangle and calculate its areas. The area of a triangle is: (base * height) / 2. Don't forget to print the result.
//
// //48. Create a String with a value "208". Convert String to number. Find the remainder after division by "5".Output the result to the console.
//
// //49. The runner's jogging time is 30 minutes, distance 5,2 km. Find the runner’s speed in m/s and display the result on the console.
//
// //50. Наташа пришла в магазин и купила ребёнку канцелярию в школу: 5 тетрадей в клетку (6 рублей за штуку); 4 тетради в линейку (7 рублей за штуку); набор карандашей (528 рублей); акварель (349 рублей). Сколько денег потратила Наташа?
//
// //51. Kate is 25 years old. Her mother is 2.5 times older. Find how old her mother is. Make a full sentence " My mother is 2.5 times older than me and she is 55 years old" and calculate the length of this sentence.
//
// //52. Create a two-digit variable and find the remainder of the division on 7. The result of the remainder of the division exponentiates on 3 and finds the type of the result.
//
// //53. Создайте переменную с именем s. Присвойте переменной s значение 125. Напишите последовательность команд, в результате которых переменная s будет принимать значения 25, 5, 0.
// //54. Создайте переменную именем х. Присвойте переменной х значение 12.  Создайте переменную именем у. Присвойте переменной у значение 21.  Напишите последовательность команд, в результате которых:  переменные х и у обменяются своими значениями. Выведите значения переменных х и у в консоль.
//
// //55. Инвестиции в бизнес составили I =$5,000,000
// // Ожидаемые доходы (CFi) за 5 лет составят:
// // 2021 год – $1,000,000
// // 2022 год – $1,500,000
// // 2023 год – $2,000,000
// // 2024 год – $2,500,000
// // 2025 год – $3,000,000
// // Ставка Дисконтирования =20%
// // Требуется рассчитать:
// // чистый дисконтированный доход (NPV) за 5 лет,
// // индекс прибыльности (PI)=NPV/I
// // Срок окупаемости простой и дисконтированный
// // Простой( Вывести точную дату когда проект окупится)
// // Дисконтированный ( Вывести точную дату когда проект окупится)
// // Месяца обозначить переменными  jan,feb,march…..
// // Человек пришел в банк через 5 лет после того как открыл депозит. Ставка депозита была неизменна и составляла 10% годовых. Сумма которую он получил в конце срока $100.000.
// // Какую сумму он положил на счет изначально  и какая сумма у него была на счету в конце каждого года.
// // Вывести какая процентная ставка применялась бы к начальной сумме депозита чтобы получить сумму на конец каждого года
// // Задачи оформить  в читаемом виде с выводом всех данных.
//
// //56. Длина прямоугольника 28 см, а ширина на 6 см меньше. Найти периметр и площадь треугольника.
// // Создать 4 переменные: length - длина прямоугольника, width - ширина, perimetr - периметр, square - площадь. Присвоить значение 28 для переменной length. Остальные значения нужно будет посчитать и вывести в консоль)
// // Иван сделал из проволоки квадрат со стороной 12 см. Если из той же проволоки он сделает прямоугольник с шириной 6 см, то какова будет его длина?
// // Название переменных придумываем сами. В консоли выводим ответ = длина прямоугольника.
//
// //57. Литр бензина стоит 50 рублей, расход автомобиля 8 литров бензина на 100 км.
// // Вычислить, сколько будет стоить проехать 60 км. и вывести значение на экран;
// // Создать скрипт считающий сколько Джону лет в текущем году, если он родился в 1989 г. Результат вывести на экран в виде "Джону в ……... исполнится ……..”
//
// //58. Друзья, вытащите цифры из строки через индекс знаков: "Мне нравятся песни 7Б и U2". Найдите целый остаток от их деления друг на друга. У результата предыдущего действия поменяйте знак на противоположный, а потом увеличьте его на 1 через инкримент. Полученный результат выведете в консоль и в окно уведомления браузера в составе предложения "Смысловой нагрузки в задании ${}, но какая практика!!!"= 21;
//     userAge += 10;
// console.log(userAge);


/*3. Create 5 variables, initialize them with integers and find the
average of variables. Print the result to console*/
//  let a = 4,
//      b = 3,
//      c = 6,
//      d = 7,
//      e = 8;
// let average =(a + b + c + d + e)/5;
// console.log(average);

/*4. Create a variable, initialize it with a positive integer.
Make it negative and print the result to console */

//  let a = 10;
//  let b = -1;
//  let c = a * b;

// console.log(c);

/*5. Create two variables with values(5, 7). The first with data type Integer
and the second with a String data type .
Raise the number 5 to the power of 2, save as a result.
Print in the console the sum of the result and the second variable.*/

// let a = 5;
// let b = "7";
// let res = a ** 2;
// let sum = res + b;
// console.log(sum);


//6. Create the alert “I wanna be the best Software Engineer”.
// let text =  "I wanna be the best Software Engineer";
// alert(text);
// or alert("I wanna be the best Software Engineer");

/*7. Create two variables of data type String with values:“So what?”
and “Work hard for that !!!”.
Concatenate two Strings and print in the console.*/

//  let a = "So what?";
//  let b = "Work hard for that !!!"
//  let c = a + " " + b;
//  console.log(c);

/*8. Write a code that calculates your BMI (Body Mass Index),
where weight=<your_weight_in_kg> and height=<your_height_in_m>.
Print the result to the console. */

// let weight = 55;
// let height = 5.7;
// let bmi= weight / height;
// console.log(bmi);



/*9. Create two strings with your first name and last name.
Print in console lengths of these strings.*/

// let firstName = "Anna";
// let lastName = "Mayboroda";
// let name = firstName + " " + lastName;
// console.log(name.length);
// console.log(name);

//10 Create a variable (integer) which is a radius of a circle. Then write a code and calculate a length of circumference (длина окружности) of this circle.

//11 Create two integer variables, one of which is a base and another is a height of a triangle, initialize them with any values. Then calculate a square footage of a triangle.

//12 Refer to the last element of a string using a math operation where str = “Never give up”;

//13 Determine the remainder of the division of the next variables: a = 11; b = 4. What is the remainder of variable a?

//14. Declare empty variables a that equals true and b equals to 5.Declare variable result and make it equals to sum of a and b. Print the result

//15. Declare variables: x = “8”; y = 2. Create a variable that takes the result of x divided by y. Print result.

//16. Declare a string name and assign it a value of “Tom”, re-assign to a number and show in the console type of the name.

//17. Создайте пустую строку  и определите её длину.
//18. Создайте переменную name и присвойте ей любое имя. Создайте переменную sign присвойте ей значение первой буквы имени, после которой поставьте ! знак.

//19. If the car travels 600 km in 3 hours, what is it’s speed?
// Create variables, declare them and console the result.

//20. Create one variable with name firstName, second variable with lastName. And console result as the email: firstName.lastName@gmail.com

//21. Three boys have three boxes. Each boy has 120lbs of weight. Each box has 2 lbs of apples inside. One boy ate half of the box of apples in his box.
// Question: What is the total lbs boys and apples together? Create the variables and count the amount.

//22. Please concatenate “I”, “ and my friends”, “ love QA_FOR_EVERYONE”, to have only one full string line. And count the length of the string.


/* 23. First kid uses 5 diapers a day, the second kid uses 8 diapers a day.
How many diapers mom should buy to have enough for the next 2 weeks? */

// let firstKid = 5;
// let secondKid = 8;
// let totalDiapers = 14 * (firstKid + secondKid);
// console.log(totalDiapers);
// console.log(` Mother should buy ${totalDiapers} to be enough for 2 weeks`);

/* 24. Elon Mask building Falcon 9 rockets. The cost of 1 Falcon 9 equal 57 Tesla x model cars.
Trip to the moon requires 13 rockets.
Can you help Elon to figure out how many cars he needs to sell in order to achieve his goal? */



/*25. Create a variable with a name “word”, assign it with value “VOLUME”. By using modulus
find the remainder of  2 divisions between 90 and 8;
11 and 2. Print string that consists of an index of variable “word” equals first division,
  then second division, next - first char of the string and the last index.
  Divide indexes with new lines (\n). */

let word = "VOLUME";
let c = 90;
let firstDivision = c % 8;
// console.log(firstDivision);
let b = 11;
let secondDivision = b % 2;
//  console.log(secondDivision);
//  console.log(word[word.length-2]);
//  console.log(word[word.length - 1]);
// console.log(word[0]);
// console.log(word[word.length-1]);
console.log(`${firstDivision} \n ${secondDivision} \n ${word[0]} \n ${word[word.length-1]} `);

// console.log(word[word.length-${firstDivision}]);


// console.log(str.length);
// console.log(str[0]);
// console.log(str.length - 1);
// console.log(str[str.length - 1]);


//26. Create two numbers and assign them random values. Print the result of raising the first number to the power of the second one and add 1 to the result by using increment.

let number1 = 10;
let number2 = 12;

//27. The biggest word in the world is "pneumonoultramicroscopicsilicovolcanoconiosis". Count and print the number of letters. Print the 10th letter of this word.

//28. Jane paid $4.16 for a sandwich. She paid $0.95 for a piece of fruit. What is the total amount Jane paid for the sandwich and fruit?
//Print: "Jane paid for her lunch 'total amount' "

//29. Here is the data set: 9, 10, 12, 13, 13, 13, 15, 15, 16, 16, 18.
// Find and print:
// Mean = 13
// Median =
// Mode

//30. The radius of a cone is 11 inches. Count and print the volume of this cone. The answer has to be a string. Think about the correct format for your answer.

//31. Create variables "a"  with value 15 and "b" with value 18.  Assign the value of the doubled sum of the variables "a" and "b" to the variable "x"  and print the result to console.
//32. Дана сторона куба  5 см. Найти объем куба. Вывести ответ в виде строки: Объем куба составляет {вложить полученный результат} см.
//33. Дана строка: "Children can have different hobbies", вычислить длину этой строки, найти элемент под первым и последним индексом, вывести результаты в консоль.

//34. Cторона квадрата равна 10. По середине квадрата проведена линия, разделяющая квадрат на 2 прямоугольника. Найдите и выведите периметр и площадь одного из получившихся прямоугольников.

//35. Create 3 variables: one String type, one boolean and last one number. Check the type of each variable.
//36. You need  to receive Infinity in the console (using Math) and check what type it will be.

//37. Let’s create a program that will convert our age into days. Create a variable age with your age and create a variable sum to multiply 365, Print console. Note ignore leap years, expect only positive integers.

//38. Elon Musk has created a Tesla bot. We should greet it. Create a variable greeting and declare "Welcome to the earth!" and print it out.

//39. Write a code where you will find distance, where speed = 70, time = 12;

//40. Создайте переменную str и присвойте ей значение 'abcde'. Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'b', символ 'e’.

//41. Напишите скрипт, который считает количество секунд в часе, в сутках, в месяце. Выведите результат в консоль.

//42. Студент решил взять курс. Курс начинается с 1 Сентября по 31 Декабря. Каждый день студент занимается по 3 часа. Напишите, сколько всего времени студент потратит на весь курс. Выведете результат в консоль.

//43. To burn calories for 1 chocolate Marusya needs to run 2km,and to burn calories for 1 ice cream 5km. How far she has to run if she breaks her diet by eating 2,5 chocolates and 3 ice creams.Print the distance in the console.

//44. Print in the console “x” from the word “supercalifragilisticexpialidocious” through enrichment to the index in this word and what is the length of this word.

//45. Create the variable with the name => sentence  and declare the value "Have a nice day". Count the number of letters in a string. Console the result. What is the last letter in the line? Console the number of letters and the last letter. Console the last letter.

//46. Write a code that  calculates Volume of the cube with length of side = 7  and calculate length of all sides. Return statement “The volume of the cube = ...    with length of 1 side = … and length of all sides …” -> using ` ${}`.
//47. Write a code that picks up the height and base of the triangle and calculate its areas. The area of a triangle is: (base * height) / 2. Don't forget to print the result.

//48. Create a String with a value "208". Convert String to number. Find the remainder after division by "5".Output the result to the console.

//49. The runner's jogging time is 30 minutes, distance 5,2 km. Find the runner’s speed in m/s and display the result on the console.

//50. Наташа пришла в магазин и купила ребёнку канцелярию в школу: 5 тетрадей в клетку (6 рублей за штуку); 4 тетради в линейку (7 рублей за штуку); набор карандашей (528 рублей); акварель (349 рублей). Сколько денег потратила Наташа?

//51. Kate is 25 years old. Her mother is 2.5 times older. Find how old her mother is. Make a full sentence " My mother is 2.5 times older than me and she is 55 years old" and calculate the length of this sentence.

//52. Create a two-digit variable and find the remainder of the division on 7. The result of the remainder of the division exponentiates on 3 and finds the type of the result.

//53. Создайте переменную с именем s. Присвойте переменной s значение 125. Напишите последовательность команд, в результате которых переменная s будет принимать значения 25, 5, 0.
//54. Создайте переменную именем х. Присвойте переменной х значение 12.  Создайте переменную именем у. Присвойте переменной у значение 21.  Напишите последовательность команд, в результате которых:  переменные х и у обменяются своими значениями. Выведите значения переменных х и у в консоль.

//55. Инвестиции в бизнес составили I =$5,000,000
// Ожидаемые доходы (CFi) за 5 лет составят:
// 2021 год – $1,000,000
// 2022 год – $1,500,000
// 2023 год – $2,000,000
// 2024 год – $2,500,000
// 2025 год – $3,000,000
// Ставка Дисконтирования =20%
// Требуется рассчитать:
// чистый дисконтированный доход (NPV) за 5 лет,
// индекс прибыльности (PI)=NPV/I
// Срок окупаемости простой и дисконтированный
// Простой( Вывести точную дату когда проект окупится)
// Дисконтированный ( Вывести точную дату когда проект окупится)
// Месяца обозначить переменными  jan,feb,march…..
// Человек пришел в банк через 5 лет после того как открыл депозит. Ставка депозита была неизменна и составляла 10% годовых. Сумма которую он получил в конце срока $100.000.
// Какую сумму он положил на счет изначально  и какая сумма у него была на счету в конце каждого года.
// Вывести какая процентная ставка применялась бы к начальной сумме депозита чтобы получить сумму на конец каждого года
// Задачи оформить  в читаемом виде с выводом всех данных.

//56. Длина прямоугольника 28 см, а ширина на 6 см меньше. Найти периметр и площадь треугольника.
// Создать 4 переменные: length - длина прямоугольника, width - ширина, perimetr - периметр, square - площадь. Присвоить значение 28 для переменной length. Остальные значения нужно будет посчитать и вывести в консоль)
// Иван сделал из проволоки квадрат со стороной 12 см. Если из той же проволоки он сделает прямоугольник с шириной 6 см, то какова будет его длина?
// Название переменных придумываем сами. В консоли выводим ответ = длина прямоугольника.

//57. Литр бензина стоит 50 рублей, расход автомобиля 8 литров бензина на 100 км.
// Вычислить, сколько будет стоить проехать 60 км. и вывести значение на экран;
// Создать скрипт считающий сколько Джону лет в текущем году, если он родился в 1989 г. Результат вывести на экран в виде "Джону в ……... исполнится ……..”

//58. Друзья, вытащите цифры из строки через индекс знаков: "Мне нравятся песни 7Б и U2". Найдите целый остаток от их деления друг на друга. У результата предыдущего действия поменяйте знак на противоположный, а потом увеличьте его на 1 через инкримент. Полученный результат выведете в консоль и в окно уведомления браузера в составе предложения "Смысловой нагрузки в задании ${}, но какая практика!!!"












































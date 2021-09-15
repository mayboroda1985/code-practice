
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

/*13 Determine the remainder of the division of the next variables:
a = 11; b = 4. What is the remainder of variable a?*/
let a = 11;
let b = 4;
let c = 11 % 4;
console.log(c);

/*14. Declare empty variables a that equals true and b equals to 5.
Declare variable result and make it equals to sum of a and b.
Print the result */
let a;
a = true;
let b = 5;
let result = a + b;
console.log(result);   //in console result will be 6 because true equals as 1 when we have boolean addition

/*15. Declare variables: x = “8”; y = 2.
Create a variable that takes the result of x divided by y. Print result. */

let x = '8';
let y = 2;
let result = x / y;
console.log(result);


/* 16. Declare a string name and assign it a value of “Tom”,
re-assign to a number and show in the console type of the name. */

let name = "Tom";
name = 1 ;
console.log(typeof name);

/* 17. Создайте пустую строку  и определите её длину. */

let string = "";
console.log(string.length);

*/18. Создайте переменную name и присвойте ей любое имя.
Создайте переменную sign присвойте ей значение первой буквы имени,
    после которой поставьте ! знак. */

/* 19. If the car travels 600 km in 3 hours, what is it’s speed? */

// // Create variables, declare them and console the result.
//
// //20. Create one variable with name firstName, second variable with lastName. And console result as the email: firstName.lastName@gmail.com
//
/* 21. Three boys have three boxes. Each boy has 120lbs of weight. Each box has 2 lbs of apples inside. One boy ate half of the box of apples in his box.
 Question: What is the total lbs boys and apples together? Create the variables and count the amount.

/* 22. Please concatenate “I”, “ and my friends”, “ love QA_FOR_EVERYONE”,
 to have only one full string line. And count the length of the string. */
let a = "I";
let b = "and my friends";
let c = "love QA_FOR_EVERYONE"
let fullString = a + "" + b + "" + c;
console.log(fullString);
console.log(fullString.length);


 /* 23. First kid uses 5 diapers a day, the second kid uses 8 diapers a day.
How many diapers mom should buy to have enough for the next 2 weeks? */

let firstKid = 5;
let secondKid = 8;
let totalDiapers = 14 * ( 5 + 8);
console.log(totalDiapers);

// or another way

 let firstKid = 5;
let secondKid = 8;
let totalDiapers = 14 * (firstKid + secondKid);
console.log(totalDiapers);
console.log(` Mother should buy ${totalDiapers} to be enough for 2 weeks`);

/* 24. Elon Mask building Falcon 9 rockets. The cost of 1 Falcon 9 equal 57 Tesla x model cars.
Trip to the moon requires 13 rockets.
Can you help Elon to figure out how many cars he needs to sell in order
to achieve his goal? */

let oneFalcone = 57;
let trip = 13;
let result = oneFalcone * trip;
console.log(result);

/* 25. Create a variable with a name “word”, assign it with value “VOLUME”. By using modulus
find the remainder of  2 divisions between 90 and 8;
11 and 2. Print string that consists of an index of variable “word” equals first division,
then second division, next - first char of the string and the last index.
Divide indexes with new lines (\n). */

let word = "VOLUME";
let resultA = 90 % 8;
let resultB = 11 % 2;
let letterA = word[resultA];
let letterB = word[resultB];
console.log(letterA);
console.log(letterB);
console.log(letterA + '\n' + letterB + '\n' + word[0] + '\n' + word[word.length -1]); //in console word "LOVE"

/* 26. Create two numbers and assign them random values.
Print the result of raising the first number to the power of the
second one and add 1 to the result by using increment.*/

 let number1 = 4;  //wasn't check
 let number2 = 2;
 let result = number1 ** number2;
 console.log(++result);

/*27. The biggest word in the world is
"pneumonoultramicroscopicsilicovolcanoconiosis".
 Count and print the number of letters.
 Print the 10th letter of this word.  */

let word = "pneumonoultramicroscopicsilicovolcanoconiosis";
let letter10 = word[9];
console.log(letter10);

/* 28. Jane paid $4.16 for a sandwich.
 She paid $0.95 for a piece of fruit.
 What is the total amount Jane paid for the sandwich
 and fruit?
Print: "Jane paid for her lunch 'total amount' "  */

let sandwich = 4.16;
let fruit = 0.95;
let total = sandwich + fruit;
console.log(`Jane paid for her lunch 'total amount' $${total}`);


/* 29. Here is the data set: 9, 10, 12, 13, 13, 13, 15, 15, 16, 16, 18.
 Find and print: */

Mean      // mean is srednee znachenie
Median =       // srednee chislo v ryady
Mode           //chashe vsego vstrechaetsya
let mean = (9 + 10 + 12 + 13 + 13 + 13 + 15 + 15 + 16 + 16 + 18) / 11;

/* 30. The radius of a cone is 11 inches.
Count and print the volume of this cone.
The answer has to be a string.
Think about the correct format for your answer. */

let radiusOfCone = 11;
let heightOfCone = 18;
let volumeOfCone = 1 / 3 * radiusOfCone ** 2 * heightOfCone;
console.log('The volume of cone is ' + volumeOfCone +' cubic inches' );


/* 31. Create variables "a"  with value 15 and "b" with value 18.
 Assign the value of the doubled sum of the variables "a" and "b"
 to the variable "x" and print the result to console. */

let a = 15;
let b = 18;
let x  = 2 * (a + b);
console.log(x);

/* 32. Дана сторона куба  5 см. Найти объем куба.
 Вывести ответ в виде строки: Объем куба составляет
  {вложить полученный результат} см. */

let cubeSide = 5;
let volume = 5 ** 3;
console.log(`Объем куба составляет ${volume}см.`)
//or
console.log(`Объем куба составляет ` + volume + 'см.')

/* 33. Дана строка: "Children can have different hobbies",
 вычислить длину этой строки, найти элемент под первым и последним индексом,
  вывести результаты в консоль. */

let str = "Children can have different hobbies";
console.log(str.length);
console.log(str[0]);
console.log(str[str.length-1]);

//or
let str = "Children can have different hobbies";
let stringLength = string.length;
let firstElement = string[0];
let lastElement = string[string.length-1];
console.log(stringLength);
console.log(firstElement);
console.log(lastElement);

/* 34. Cторона квадрата равна 10.
 По середине квадрата проведена линия, разделяющая квадрат на 2 прямоугольника.
  Найдите и выведите периметр и площадь одного из получившихся прямоугольников.*/
let squareSide = 10;
let rectangularPerimeter = (squareSide + squareSide / 2 ) * 2;
let rectangularSquare = squareSide + squareSide / 2;
console.log(rectangularPerimeter);
console.log(rectangularSquare);


/* 35. Create 3 variables: one String type, one boolean and last one number.
 Check the type of each variable. */
 let string1 = "House";
 let boolean1 = true;
 let number1 = 9;

 console.log(typeof string1);
 console.log(typeof boolean1);
 console.log(typeof number1);

/* 36. You need  to receive Infinity in the console (using Math)
and check what type it will be.*/
let a = 1;
let b = 0;
let c = a / b;
console.log(c);
console.log(typeof c);

/* 37. Let’s create a program that will convert our age into days.
 Create a variable age with your age and create a variable sum to multiply 365,
 Print console. Note ignore leap years, expect only positive integers. */

let age = 25;
let dayInYear = 365;
let sum1 = age * 365;
console.log(sum1);

/* 38. Elon Musk has created a Tesla bot.
We should greet it. Create a variable greeting and declare
"Welcome to the earth!" and print it out.*/
let greeting = "Welcome to the earth!";
console.log(greeting);


/* 39. Write a code where you will find distance,
where speed = 70, time = 12; */

let speed = 70;
let time = 12;
let distance = speed * time;
console.log(distance);


/* 40. Создайте переменную str и присвойте ей значение 'abcde'.
Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'b',
 символ 'e’. */

let str = 'abcde';
let symbolA = str[0];
let symbolB = str[1];
let symbolE = str[str.length-1];
console.log(symbolA);
console.log(symbolB);
console.log(symbolE);

/* 41. Напишите скрипт, который считает количество секунд в часе,
в сутках, в месяце. Выведите результат в консоль. */

let second = 1;
let minute = second * 60;
let hour = minute + 60;
let day = hour * 24;
let month = day * 31;
console.log('в часе ' + hour + ' секунд');
console.log( 'в сутках ' + day + ' секунд');
console.log( 'в месяце ' + month + ' секунд');

/* 42. Студент решил взять курс. Курс начинается с 1 Сентября по 31 Декабря.
Каждый день студент занимается по 3 часа. Напишите, сколько всего времени
студент потратит на весь курс. Выведете результат в консоль.*/
 let hours = 3;
 let dayInMonth1 = 30;
let dayInMonth2 = 31;
let totalAmountOfHours = 3 * (dayInMonth1 *2 + dayInMonth2 *2 );
console.log(totalAmountOfHours);


/* 43. To burn calories for 1 chocolate Marusya needs to run 2km,
and to burn calories for 1 ice cream 5km. How far she has to run if
 she breaks her diet by eating 2,5 chocolates and 3 ice creams.
 Print the distance in the console.*/
let dF1Ch = 2;
let dF1IC = 5;
let chAmount = 2.5;
let icAmount = 3;
let totalDistance = chAmount * dF1Ch + icAmount * dF1IC;
console.log('She has to run ' + totalDistance + ' km');

/*44. Print in the console “x” from the word “supercalifragilisticexpialidocious”
through enrichment to the index in this word and what is the length of this word.*/

let str = 'supercalifragilisticexpialidocious';
console.log(str.length);
console.log(str[21]);

//didn't started to learn yet
// let word2 = 'supercalifragilisticexpialidocious';
// let lengthOfWord = word2.length;
// console.log(lengthOfWord);
// for ( i = 0; i >= word2.length -1; i++) {
//  if(word2[i] === 'x') {
//   console.log(word2[i]);
//  }
// }



/* 45. Create the variable with the name => sentence  and declare the
value "Have a nice day". Count the number of letters in a string.
Console the result. What is the last letter in the line? Console the number of
letters and the last letter. Console the last letter.*/

let sentence = "Have a nice day";
let numberOfLetters = sentence.length;
let lastLetter = sentence[sentence.length -1];
console.log(numberOfLetters);
console.log(lastLetter);

/* 46. Write a code that  calculates Volume of the cube with length of side = 7
and calculate length of all sides. Return statement “The volume of the cube = ...
 with length of 1 side = … and length of all sides …” -> using ` ${}`.*/


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
/* 54. Создайте переменную именем х. Присвойте переменной х значение 12.
  Создайте переменную именем у. Присвойте переменной у значение 21.
  Напишите последовательность команд, в результате которых:  переменные х и у
  обменяются своими значениями. Выведите значения переменных х и у в консоль.*/

let x = 12;
let y = 21;
[x , y] = [y , x];
console.log(sum);

55. Инвестиции в бизнес составили I =$5,000,000
Ожидаемые доходы (CFi) за 5 лет составят:
2021 год – $1,000,000                  //31 декабря 2020
2022 год – $1,500,000
2023 год – $2,000,000
2024 год – $2,500,000
2025 год – $3,000,000
Ставка Дисконтирования =20%
Требуется рассчитать:
чистый дисконтированный доход (NPV) за 5 лет,
индекс прибыльности (PI)=NPV/I
Срок окупаемости простой и дисконтированный
Простой( Вывести точную дату когда проект окупится)
Дисконтированный ( Вывести точную дату когда проект окупится)
Месяца обозначить переменными  jan,feb,march…..
let I =5000000 ;
let CFi1=1000000;
let CFi2=1500000;
let CFi3=2000000;
let CFi4=2500000;
let CFi5=3000000;
let R=0.2;
console.log("Чистый дисконтированный поток NPV");
let NPV1=CFi1/(1+R)**1;   //833333
let NPV2=CFi2/((1+R)**2);//1041666
let NPV3=CFi3/((1+R)**3);//1157407
let NPV4=CFi4/((1+R)**4);//1205632
let NPV5=CFi5/((1+R)**5);//1205632
let NPV_Total=NPV1+NPV2+NPV3+NPV4+NPV5;
console.log(" NPV(2021 год) = "+NPV1);//Сумма вложения сроком на 1 год
console.log(" NPV(2022 год) = "+NPV2);//Сумма вложения сроком на 2 года
console.log(" NPV(2023 год) = "+NPV3);//Сумма вложения сроком на 3 года
console.log(" NPV(2024 год) = "+NPV4);//Сумма вложения сроком на 4 года
console.log(" NPV(2025 год) = "+NPV5);//Сумма вложения сроком на 5 лет
console.log(" NPV(Total) = "+NPV_Total);
console.log("=====Индекс прибыльности========");
let PI=NPV_Total/I
console.log(PI);
if(PI>1){
 console.log("Проект эффективен");

}else{

 console.log("Проект не эффективен");

}
console.log("====Простой срок окупаемости- payback period====");
let jan=31, feb=28, march=31, apr=30, may=31, june=30, july=31, aug=31,
    sep=30, oct =31, nov=30, dec=31;
let $rem=I-CFi1-CFi2-CFi3;  //500000      //(5000000-1000000-1500000-2000000)=500000
console.log($rem);//Осталась доля $ которая перешла на сл 4-й год =$500 тыс Если мы знаем что за год
                          // (365 дней) предприятие получило прибыль $2,5 млн .Вопрос за какой период
                            //(в годах) предприятие получит $500 тыс. надо 500тыс/2,5 млн.
let year=$rem/CFi4;//0.2 года
let date= year*365;//73 дня
console.log(year);
console.log(date);
let PP= date-jan-feb;  //14
console.log(PP);
console.log("PP = "+PP+ " Марта 2024");
console.log("=======================Discounted Payback Period================");
let $remD=(I- NPV1-NPV2-NPV3-NPV4);             //4238040.12345679
console.log($remD);       //761959
                          //Срок окупаемости дисконтированный =4+(остаток долга инвестору на конец четвертого года)/чистый денежный поток за пятый год.
                         //Срок окупаемости дисконтированный = 4+761959/1205632,7=4,63 года.
let yearD=$remD/NPV5; //761959
let dateD=yearD*365 ; //230
console.log(dateD);
let DPP= dateD-jan-feb-march-apr-may-june-july;
console.log(DPP);
console.log("DPP = "+DPP+ " Августа 2025")



/55 б. Человек пришел в банк через 5 лет после того как открыл депозит. Ставка депозита была неизменна
//и составляла 10% годовых. Сумма которую он получил в конце срока $100.000.
// Вывести какая процентная ставка применялась бы к начальной сумме депозита чтобы получить сумму на конец каждого года
// Какую сумму он положил на счет изначально  и какая сумма у него была на счету в конце каждого года.
// Задачи оформить  в читаемом виде с выводом всех данных.
//d(1-5)  Ставка депозита на каждый год
//(sum(1-5) суммы в конце каждого года
let a=0.1
let s=100000
let by4=s/(1+0.1)//90909
console.log(by4);
let by3=by4/(1+0.1);
console.log(by3);
let by2=by3/(1+0.1)
console.log(by2);
let by1=by2/(1+0.1)
console.log(by1);
let by=by1/(1+0.1);
console.log(by);
let sumTotal=100000;
let d=0.1;
console.log("==========================Процентная ставка к начальной сумме депозита==================================");
let d1=(1+d)**1;
let d2=(1+d)**2;
let d3=(1+d)**3;
let d4=(1+d)**4;
let d5=(1+d)**5;
let Total=100000;
console.log("1 Год %-я Ставка "+ d1);
console.log("2 Год %-я Ставка "+ d2);
console.log("3 Год %-я Ставка "+ d3);
console.log("4 Год %-я Ставка "+ d4);
console.log("5 Год %-я Ставка "+ d5);
console.log("=========================Cумма на начало каждого года=================================");
let sum1=Total/d5;
let sum2=Total/d4;
let sum3=Total/d3;
let sum4=Total/d2;
let sum5=Total/d1;
console.log("Сумма на начало 1 года= "+sum1);
console.log("Сумма на начало 2 года = "+sum2);
console.log("Сумма на начало 3 года = "+sum3);
console.log("Сумма на начало 4 года = "+sum4);
console.log("Сумма на начало 5 года = "+sum5);
console.log("=========================Cумма на конец каждого года=================================");
let last1=sum1*d1;
let last2=sum1*d2;
let last3=sum1*d3;
let last4=sum1*d4;
let last5=sum1*d5;
console.log("Сумма на конец 1 года= "+last1);
console.log("Сумма на конец 2 года= "+last2);
console.log("Сумма на конец 3 года= "+last3);
console.log("Сумма на конец 4 года= "+last4);
console.log("Сумма на конец 5 года= "+last5);

/*56. Длина прямоугольника 28 см, а ширина на 6 см меньше. Найти периметр и площадь треугольника.
 Создать 4 переменные: length - длина прямоугольника, width - ширина, perimetr - периметр, square - площадь. Присвоить значение 28 для переменной length. Остальные значения нужно будет посчитать и вывести в консоль)
 Иван сделал из проволоки квадрат со стороной 12 см. Если из той же проволоки он сделает прямоугольник с шириной 6 см, то какова будет его длина?
Название переменных придумываем сами. В консоли выводим ответ = длина прямоугольника.*/




/* 57. Литр бензина стоит 50 рублей, расход автомобиля 8 литров бензина на 100 км.
 Вычислить, сколько будет стоить проехать 60 км. и вывести значение на экран;
Создать скрипт считающий сколько Джону лет в текущем году, если он родился в 1989 г.
 Результат вывести на экран в виде "Джону в ……... исполнится ……..”*/

let yOB = 1989;
let currentYear = 2021;
let ageJohn = currentYear - yOB;
console.log(`Джону в ${currentYear} исполнится ${ageeJohn}`);

/* 58. Друзья, вытащите цифры из строки через индекс знаков:
 "Мне нравятся песни 7Б и U2". Найдите целый остаток от их деления друг на друга.
 У результата предыдущего действия поменяйте знак на противоположный,
 а потом увеличьте его на 1 через инкримент. Полученный результат выведете в консоль
 и в окно уведомления браузера в составе предложения "Смысловой нагрузки в задании ${},
  но какая практика!!!"= 21; */

let str14 = "Мне нравятся песни 7Б и U2";
let str14Length = str14.length;
let indexNumberFirst = strLength -1 -6;
let numberFirst = str14[indexNumberFirst];
let numberSecond = str14[str14Length - 1];
let remainderOfDivision1 = numberFirst % numberSecond;
remainderOfDivision1 = - remainderOfDivision1;
remainderOfDivision1 = ++ remainderOfDivision1;
alert(`Смысловой нагрузки в задании ${remainderOfDivision1}, но какая практика!!!`);
console.log(`Смысловой нагрузки в задании ${remainderOfDivision1}, но какая практика!!!`);



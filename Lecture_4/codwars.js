https://www.codewars.com/kata/53af2b8861023f1d88000832/train/javascript

Create a function which answers the question "Are you playing banjo?".
    If your name starts with the letter "R" or lower case "r", you are playing banjo!

    The function takes a name as its only argument, and returns one of the following strings:

    name + " plays banjo"
name + " does not play banjo"

answer:

    function areYouPlayingBanjo(name) {
        let res = ""; // or let res;
        if (name[0] === "R" || name[0] ==="r"){
                res = name + " plays banjo";
        } else {
                res = name + " does not play banjo";
        }
            return res;
    }
}

or

function areYouPlayingBanjo(name) {

        if (name[0] === "R" || name[0] ==="r") {
                return name + " plays banjo";
        } else {
                return  name + " does not play banjo";
        }
}

//2. www.codewars.com/kata/554003323fd6af1c4200004e

Create a function that checks if a number is odd.
    Expect negative and decimal numbers too.
    Remember... all negative numbers can also be either odd or even.
    Decimal numbers always return false

Example:
    isOdd(2)--> false
isOdd(5)--> true
isOdd(4)--> false
isOdd(-17)--> true
isOdd(-7.0)--> true
isOdd(-7.1)--> false
isOdd(4.23)--> false
isOdd(5.0)-->true
isOdd(5.23)--> false

Answer:

    function isOdd(n) {
            if (n % 1 != 0) { //eto celoe cislo esli ne ravno 0 to drobnoe
                    return false;
            } else {
                    return n % 2 != 0; //vozvrashaet ne chetnue
            }
    }
    // proverka drobnogj (n % 1 != 0) esli true to cislo drobnoe
//proverka celogo proverka drobnogj (n % 1 == 0)

or

function isOdd(n) {
        if (Math.trunc(n) == n && n % 2 != 0) {
                return true;
        } else  return false;
}

or

function isOdd(n) {
        if (Math.abs(n % 2) == 1) {
                return true;
        } else {
                return false;
        }

}

//3. www.codewars.com/kata/is-n-divisible-by-x-and-y
Create a function that checks if a number n is divisible
by two numbers x AND y. All inputs are positive, non-zero digits.

    Examples:
1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5

function isDivisible(n, x, y) {
      if ( n % x == 0 && n % y == 0) {
              return true;
      } else {
              return false;
      }
}

//4. https://www.codewars.com/kata/568dcc3c7f12767a62000038/train/javascript
Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

    The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

setAlarm(true, true) -> false
setAlarm(false, true) -> false
setAlarm(false, false) -> false
setAlarm(true, false) -> true


function setAlarm(employed, vacation){
if ( employed == true && vacation == false)
    {
        return true;
    } else {
        return false;
        }
}

//5. https://www.codewars.com/kata/5a2b703dc5e2845c0900005a/train/javascript

Your task is to create functionisDivideBy (or is_divide_by) to check if an integer number is divisible by each out of two arguments.

    A few cases:


    (-12, 2, -6)  ->  true
(-12, 2, -5)  ->  false

(45, 1, 6)    ->  false
(45, 5, 15)   ->  true

(4, 1, 4)     ->  true
(15, -5, 3)   ->  true

Answer

function isDivideBy(number, a, b) {
if (number %  a == 0 && number % b == 0) {
    return true;
} else {
    return false;
}
}

or
function isDivideBy(number, a, b) {
    return a != 0 && b != 0 && number % a == 0 && number % b == 0
}



// 6. https://www.codewars.com/kata/56530b444e831334c0000020/train/javascript
The male gametes or sperm cells in humans and other mammals are heterogametic and contain one of two types of sex chromosomes. They are either X or Y. The female gametes or eggs however, contain only the X sex chromosome and are homogametic.

    The sperm cell determines the sex of an individual in this case. If a sperm cell containing an X chromosome fertilizes an egg, the resulting zygote will be XX or female. If the sperm cell contains a Y chromosome, then the resulting zygote will be XY or male.

    Determine if the sex of the offspring will be male or female based on the X or Y chromosome present in the male's sperm.

If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";

Answer

function chromosomeCheck(sperm) {
   let congrats;
    if (sperm =="XY") {
      congrats = "Congratulations! You're going to have a son.";
    } else {
       congrats = "Congratulations! You're going to have a daughter.";
    }
    return congrats;
}

or

function chromosomeCheck(sperm) {
    if (sperm == "XY"){
        return "Congratulations! You're going to have a son."
    }else{
        return "Congratulations! You're going to have a daughter."
    }
}

or


function chromosomeCheck(sperm) {
    return sperm == 'XX' ? "Congratulations! You're going to have a daughter." : "Congratulations! You're going to have a son."
}


//7. https://www.codewars.com/kata/571f832f07363d295d001ba8/train/javascript

In javascript, Boolean object only has two value, true or false. Use ===, ==, >, <, >=, <= between two variables(or constant), the result of such an expression is a bool value. The operation between the two bool values can be used with logical operators:&&, || or some bitwise operators:&, |, !, ^

Many of the data are likely to be implicitly converted to Boolean values in a given context, most common in conditional statements. In other words, the Boolean value is mainly used for conditional judgment. Look this example:

    var arr=[];
...
...
......
if (arr.length) return "arr has elements";
else            return "arr is empty";


Answer

function trueOrFalse(val) {
    if (!!val == false) {
        return 'false';
    } else {

        return 'true';
    }
}

null and undefine we can check only with trensfer to boolean

//?
https://www.codewars.com/kata/5761a717780f8950ce001473/train/javascript
    Philip's just turned four and he wants to know how old he will be in various years in the future such as 2090 or 3044. His parents can't keep up calculating this so they've begged you to help them out by writing a programme that can answer Philip's endless questions.

    Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.

    Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"

"..." are to be replaced by the number, followed and proceeded by a single space. Mind that you need to account for both "year" and "years", depending on the result.

    Answer

function  calculateAge(yb, yc) {
    return yb > yc ? `You will be born in ${yb - yc} year${yb - yc == 1 ? "":"s"}.`:
        yb < yc ? `You are ${yc - yb} year${yc - yb == 1 ? "":"s"} old.`:
            `You were born this very year!`
}

or
function  calculateAge(yb, yc) {
    age = yc - yb;
    return age > 1 ? `You are ${age} years old.`
        : age > 0 ? `You are ${age} year old.`
            : age === 0 ? "You were born this very year!"
                : age >= -1 ? `You will be born in ${-age} year.`
                    :`You will be born in ${-age} years.`
}

or
function  calculateAge(yearOfBirth, year) {
    let diff = year - yearOfBirth;
    if(diff == 0){
        return "You were born this very year!";
    } else if( diff >= 2){
        return `You are ${diff} years old.`;
    }else if(diff == 1){
        return `You are ${diff} year old.`;
    } else if(diff <= -2){
        return `You will be born in ${Math.abs(diff)} years.`;
    } else if (diff == -1){
        return `You will be born in ${Math.abs(diff)} year.`;
    }

}
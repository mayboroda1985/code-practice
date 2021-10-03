//Homework
//----------------------- Lesson 4 ---------------
//if... else
//switch
//math methods


//Write a program that will Print a next customer receipt

// ------------------------------------
// SaveMart Receipt                         <= name of the store
// 123 Main Street                          <= store address
// San Jose CA 95135
// Oven Joy Bread                  1.98  <= item's name and total price
//   0.99 at 2.0                         <= price for 1 item and amount of items
// Lucerne Milk                    2.29
//   2.29 at 1.0
// Hormel Chili with Beans         3.87
//   1.29 at 3.0
// 12-pack Blue Moon              12.99
//   12.99 at 1.0
// Organic Navel Oranges           3.73 <= price for 1kg and amount of kg
//   1.49 at 2.5
// Granny Smith Apples             1.74
//   1.09 at 1.6
// Tillamook Greek Yogurt          6.00
//   1.0 at 6.0
// SUBTOTAL:                      32.60 <= Total for all items
// CLUBCARD Saving 5%              1.63 <= 5% discount
// TAX 8.75%                       2.71 <= Tax on total minus discount
// TOTAL:                         33.68 <= Total after tax and discount
// ------------------------------------
//Add a check for a price at the end
//if total is bigger that $30, print 'You do not have enough money on your card,
//you need extra ${calculate here how much you need extra}'
// else print 'Have a nice day!'

solved in jsbin : https://jsbin.com/yixoduxolu/edit?js,console
let receipt = "------------------------------------";
// let space = "                                              ";
console.log(receipt);
let nameOfTheStore = "SaveMart Receipt";
console.log(nameOfTheStore);
let storeAddress = "123 Main Street San Jose CA 95135";
console.log('123 Main Street \n San Jose CA 95135');
let brandOfBread = "Oven Joy Bread";
let ovenJoyBreadPrice = 0.99;
let ovenJoyBreadQuantity = (2.0).toFixed(1);
let ovenJoyBreadTotalPrice = ovenJoyBreadPrice * ovenJoyBreadQuantity;
console.log(`${brandOfBread}               ${ovenJoyBreadTotalPrice} \n   ${ovenJoyBreadPrice} at ${ovenJoyBreadQuantity}`);
let brandOfMilk = "Lucerne Milk";
let lucerneMilkPrice = 2.29;
let lucerneMilkQuantity = (1.0).toFixed(1);
let lucerneMilkTotalPrice = lucerneMilkPrice * lucerneMilkQuantity;
console.log(`${brandOfMilk}                 ${lucerneMilkTotalPrice} \n   ${lucerneMilkPrice} at ${lucerneMilkQuantity}`);
let brandOfBeans = "Hormel Chili with Beans";
let beanPrice = 1.29;
let beanQuantity = (3.0).toFixed(1);
let beanTotalPrice = beanPrice * beanQuantity;
console.log(`${brandOfBeans}      ${beanTotalPrice} \n   ${beanPrice} at ${beanQuantity}`);
let beerBrand = "Blue Moon";
let beerBrandSize = "12-pack"
let beerPrice = 12.99;
let beerBoxQuantity = (1.0).toFixed(1)
let beerTotalPrice = beerPrice * beerBoxQuantity;
console.log(`${beerBrandSize} ${beerBrand}           ${beerTotalPrice}  \n  ${beerPrice} at ${beerBoxQuantity}`);
let orangesBrand = "Organic Navel Oranges";
let orangesPricePerKg = 1.49;
let oranagesTotalWeightInKg = (2.5).toFixed(1);
let orangesTotalPrice = orangesPricePerKg * oranagesTotalWeightInKg;
let orangesTotalPriceRounded = (+(orangesTotalPrice).toFixed(2));
console.log(`${orangesBrand}       ${orangesTotalPriceRounded} \n  ${orangesPricePerKg} at ${oranagesTotalWeightInKg}`);

let applesBrand = "Granny Smith Apples";
let applesPricePerKg = 1.09;
let applesTotalWeightInKg = (1.6).toFixed(1);
let applesTotalPrice = applesPricePerKg * applesTotalWeightInKg;
let applesTotalPriceRounded = +((applesTotalPrice).toFixed(2));
console.log(`${applesBrand}          ${applesTotalPriceRounded} \n  ${applesPricePerKg} at ${applesTotalWeightInKg}`);

let yogurtBrand = "Tillamook Greek Yogurt";
let yogurtSinglePrice = (1.0).toFixed(1);
let yogurtQuantity = (6.0).toFixed(1);
let yogurtTotalPrice = yogurtSinglePrice * yogurtQuantity;
let yogurtTotalPriceRounded = +((yogurtTotalPrice).toFixed(1));
// console.log((yogurtSinglePrice).toFixed(1));
// console.log((yogurtQuantity).toFixed(1));
// console.log((yogurtTotalPrice).toFixed(1));
console.log(`${yogurtBrand}        ${yogurtTotalPriceRounded} \n    ${yogurtSinglePrice} at ${yogurtQuantity}`);


let totalReceipt = "SUBTOTAL:";

let totalPrice = (ovenJoyBreadTotalPrice + lucerneMilkTotalPrice + beanTotalPrice + beerTotalPrice + orangesTotalPriceRounded + applesTotalPriceRounded + yogurtTotalPriceRounded).toFixed(2);

console.log(` ${totalReceipt}                   ${totalPrice}`);

let saving = "CLUBCARD Saving 5%";
let discount5Percent = +(totalPrice * 0.05).toFixed(2);
console.log(`${saving}            ${discount5Percent}`);


let tax = "TAX 8.75%";
let taxOnTotal = +((totalPrice - discount5Percent ) * 8.75 / 100).toFixed(2);
console.log(taxOnTotal);
console.log(`${tax}                     ${taxOnTotal}`);
let total = "TOTAL:";
let totalOnAll = (totalPrice - discount5Percent) + taxOnTotal;

console.log(totalOnAll);
console.log(`${total}                       ${totalOnAll}`);

// console.log(ovenJoyBreadTotalPrice);
// console.log(lucerneMilkTotalPrice);
// console.log(beanTotalPrice);
// console.log(beerTotalPrice);
// console.log(orangesTotalPriceRounded);
// console.log(applesTotalPriceRounded);
// console.log(yogurtTotalPriceRounded);

//Add a check for a price at the end
//if total is bigger that $30, print 'You do not have enough money on your card,
//you need extra ${calculate here how much you need extra}'
// else print 'Have a nice day!'

let extra = 3.68;
if (totalOnAll > 30) {
    console.log(`You do not have enough money on your card, you need extra ${extra}`);
} else {
    console.log('Have a nice day!');
}







//codewars
//done https://www.codewars.com/kata/52ceafd1f235ce81aa00073a
//done https://www.codewars.com/kata/55192f4ecd82ff826900089e
//done https://www.codewars.com/kata/56d6c333c9ae3fc32800070f
//done https://www.codewars.com/kata/53af2b8861023f1d88000832
!!!! https://www.codewars.com/kata/calculate-two-peoples-individual-ages
//hint: in the end use => return [age2, age1]

Create a function that takes in the sum and age difference of two people, calculates their individual ages, and returns a pair of values (oldest age first) if those exist or null/None if:

sum < 0
difference < 0
Either of the calculated ages come out to be negative

Answer : don't know'


function getAges(sum,difference){
    let age2 ;
    let age1 ;
    if (sum > 0 && difference > 0) {
        return  [age2, age1] ;
    } else if (sum < 0 && difference < 0) {
        return  null ;
    }

};



//Done https://www.codewars.com/kata/554003323fd6af1c4200004e
function isOdd(n) {
    if ( n % 1 != 0 ) {
        return false;
    } else {
        return n % 2 != 0 ;
    }

}
//done https://www.codewars.com/kata/is-n-divisible-by-x-and-y

function isDivisible(n, x, y) {
    if ( n % x ==0 && n % y == 0) {
        return true
    }else {
        return false
    }
}

// done https://www.codewars.com/kata/is-this-a-triangle
function isTriangle(a,b,c)  {
    if (a <= 0 || b <= 0 || c <= 0 ) {
        return false;
    }

    if (a+b > c && a+c > b && c+b > a) {
        return true;
    } else {
        return false;
    }
}





//done https://www.codewars.com/kata/rock-paper-scissors
const rps = (p1, p2) => {

    if (p1  == p2) {
        return "Draw!"
    } else if ((p1  == "scissors" && p2 == "paper") || (p1  == "paper" && p2 == "rock")|| (p1  == "rock" && p2 == "scissors"))
    {
        return "Player 1 won!";
    } else {
        return "Player 2 won!";
    }
}

//https://www.codewars.com/kata/l1-set-alarm

//https://www.codewars.com/kata/can-we-divide-it
//https://www.codewars.com/kata/students-final-grade
//https://www.codewars.com/kata/even-or-odd
//https://www.codewars.com/kata/55afed09237df73343000042

//https://www.codewars.com/kata/55cbd4ba903825f7970000f5
https://www.codewars.com/kata/56368f37d464c0a43c00007f

    A variation of determining leap years, assuming only integers are used and years can be negative and positive.

    Write a function which will return the days in the year and the year entered in a string. For example 2000, entered as an integer, will return as a string 2000 has 366 days

There are a few assumptions we will accept the year 0, even though there is no year 0 in the Gregorian Calendar.

    Also the basic rule for validating a leap year are as follows

Most years that can be divided evenly by 4 are leap years.

    Exception: Century years are NOT leap years UNLESS they can be evenly divided by 400.

So the years 0, -64 and 2016 will return 366 days. Whilst 1974, -10 and 666 will return 365 days.

    Answer:
leap year 366 days, not leap year 365 days

function yearDays(year)
{
    if (year % 400 == 0) {
        return year + ` has 366 days`;
    }
    if (year % 100 == 0) {
        return year + ` has 365 days`;
    }
    else if (year % 4 == 0) {
        return year + ` has 366 days`;
    } else {
        return year + ` has 365 days`;
    }
}

or

function yearDays(year)
{ //evenly divisible by 4 = a leap year.
    if(year % 400 === 0) {
        return year + ' has 366 days';
    }
    else if(year % 4 === 0 && year % 100 !== 0) { //centuries
        return year + ' has 366 days';
    }
    else {
        return year + ' has 365 days';
    }
}
// done https://www.codewars.com/kata/determine-offspring-sex-based-on-genes-xx-and-xy-chromosomes

// done https://www.codewars.com/kata/57089707fe2d01529f00024a
function checkAlive (health) {
    if (health <= 0) {
        return false;
    } else {
        return true;
    }
}

or
function checkAlive (health) {

    return health <= 0 ? false : true;

}

// done https://www.codewars.com/kata/57158fb92ad763bb180004e7
function rainAmount(mm){
    function rainAmount(mm){
        if (mm >= 40) {
            return "Your plant has had more than enough water for today!";
        } else if (mm <= 40) {
            return `You need to give your plant ${40-mm}mm of water`;
        } else {
            return
        }
    }

    or
    function rainAmount(mm){
        if ( mm < 40) {
            return "You need to give your plant " + (40 - mm) + "mm of water"
        } else {
            return "Your plant has had more than enough water for today!"
        }
    }

    or

    function rainAmount(mm){
        return mm < 40 ? `You need to give your plant ${40 - mm}mm of water` : "Your plant has had more than enough water for today!"
    }


????//done https://www.codewars.com/kata/training-js-number-6-basic-data-types-boolean-and-conditional-statements-if-dot-else

    function trueOrFalse(val){
        if(val)return 'true';
        else return 'false';
    }





!!!//https://www.codewars.com/kata/5761a717780f8950ce001473
    var  calculateAge=(b,c)=>{
        r = c-b;
        switch(true) {
            case (r>1):    return "You are " + r + " years old."; break;
            case (r===1):  return "You are 1 year old."; break;
            case (r===0):  return "You were born this very year!"; break;
            case (r===-1): return "You will be born in 1 year."; break;
            case (r<-1):   return "You will be born in " + (-r) + " years."; break;
        }
    }
or
    function  calculateAge(m, n) {
        if(m == n) return 'You were born this very year!';
        var year = Math.abs(m-n) == 1 ? 'year' : 'years';
        if(m < n) return "You are "+(n-m)+' '+year+' old.';
        if(m > n) return "You will be born in "+(-n+m)+' '+year+'.';
    }

    or
    function  calculateAge(birthYear,year) {
        age = year-birthYear;
        if(age==1)
            return "You are 1 year old.";
        else if(age===-1)
            return "You will be born in 1 year."
        else if(age>0)
            return "You are " + age + " years old.";
        else if(age<0) {
            age = birthYear-year;
            return  "You will be born in " + age + " years."
        }
        else {
            return "You were born this very year!";
        }
    }

// done https://www.codewars.com/kata/calculate-bmi

    function bmi(weight, height) {
        let bmi = weight /  height ** 2
        if (bmi <= 18.5) {
            return "Underweight";
        } else if (bmi <= 25.0) {
            return "Normal";
        } else if (bmi <= 30.0) {
            return "Overweight";
        } else if ( bmi > 30 ) {
            return "Obese";
        }
    }

    or

    function bmi(weight, height) {
        var formula = (weight / Math.pow(height, 2));
        switch (true) {
            case formula <=18.5:
                return 'Underweight';
            case formula <=25.0:
                return 'Normal';
            case formula <=30:
                return 'Overweight';
            default:
                return 'Obese';

        }
    }
//https://www.codewars.com/kata/57b58827d2a31c57720012e8
//https://www.codewars.com/kata/57d448c6ba30875437000138
//https://www.codewars.com/kata/57e921d8b36340f1fd000059
//https://www.codewars.com/kata/57f022a6cba9da84a3000095
//https://www.codewars.com/kata/alan-partridge-ii-apple-turnover
//https://www.codewars.com/kata/simple-multiplication
//https://www.codewars.com/kata/5875b200d520904a04000003
//https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b
// done https://www.codewars.com/kata/5ab6538b379d20ad880000ab

const areaOrPerimeter = function(l , w) {
    let  area = l * w;
    let perimeter = 2 * (l + w);
    if ( l == w ) {
        return area;
    } else {
        return perimeter;
    }
};



!!!!!!!!!!!!//https://www.codewars.com/kata/525e5a1cb735154b320002c8
// done https://www.codewars.com/kata/convert-boolean-values-to-strings-yes-or-no

function boolToWord( bool ){
    if (bool == true) {
        return 'Yes';
    } else {
        return 'No';
    }
}

//https://www.codewars.com/kata/keep-up-the-hoop
//https://www.codewars.com/kata/be-concise-i-the-ternary-operator
//https://www.codewars.com/kata/101-dalmatians-squash-the-bugs-not-the-dogs
//https://www.codewars.com/kata/do-i-get-a-bonus
//https://www.codewars.com/kata/training-js-number-7-if-dot-else-and-ternary-operator
//https://www.codewars.com/kata/5977387e131c07082b000098
//https://www.codewars.com/kata/can-we-divide-it
//https://www.codewars.com/kata/5a6d3bd238f80014a2000187
https://www.codewars.com/kata/5dd259444228280032b1ed2a



//
// done https://www.codewars.com/kata/get-planet-name-by-id
// the same as above? https://www.codewars.com/kata/515e188a311df01cba000003/train/javascript
        function getPlanetName(id){
            var name;
            switch(id){
                case 1:
                    name = 'Mercury'
                    break;
                case 2:
                    name = 'Venus'
                    break;
                case 3:
                    name = 'Earth'
                    break;
                case 4:
                    name = 'Mars'
                    break;
                case 5:
                    name = 'Jupiter'
                    break;
                case 6:
                    name = 'Saturn'
                    break;
                case 7:
                    name = 'Uranus'
                    break;
                case 8:
                    name = 'Neptune'
            }

            return name;
        }

//https://www.codewars.com/kata/5296455e4fe0cdf2e000059f
//https://www.codewars.com/kata/572059afc2f4612825000d8a
//https://www.codewars.com/kata/basic-mathematical-operations
//done https://www.codewars.com/kata/switch-it-up
// the same as above https://www.codewars.com/kata/5808dcb8f0ed42ae34000031/train/javascript
When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".

If your language supports it, try using a switch statement.

    Answer
        function switchItUp(number){
        switch (number) {
            case 0:
                return "Zero";
                break;

            case 1:
                return "One";
                break;

            case 2:
                return "Two";
                break;

            case 3:
                return "Three";
                break;

            case 4:
                return "Four";
                break;

            case 5:
                return "Five";
                break;

            case 6:
                return "Six";
                break;

            case 7:
                return "Seven";
                break;

            case 8:
                return "Eight";
                break;

            case 9:
                return "Nine";
                break;
        }

    }

//https://www.codewars.com/kata/simple-calculator


//https://www.codewars.com/kata/59ca8246d751df55cc00014c/train/javascript
//https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
//https://www.codewars.com/kata/5c374b346a5d0f77af500a5a/train/javascript
//https://www.codewars.com/kata/5834fec22fb0ba7d080000e8/train/javascript

//https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/javascript
//
//https://www.codewars.com/kata/5810085c533d69f4980001cf/train/javascript
//Codewars:
//done https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript
        function even_or_odd(number) {
            if (number % 2 == 0) {
                return "Even";
            } else {
                return "Odd";
            }
        }
//done https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/javascript
        function getGrade (s1, s2, s3) {
            averageGrade = (s1 + s2 + s3) / 3;
            if (averageGrade >= 90 &&  averageGrade <= 100) {
                return "A";
            } else if (averageGrade >= 80 &&  averageGrade < 90) {
                return "B";

            } else if (averageGrade >= 70 &&  averageGrade < 80) {
                return "C";
            } else if (averageGrade >= 60 &&  averageGrade < 70) {
                return "D";
            } else if (averageGrade >= 0) {
                return "F";
            }
        }

        or

        function getGrade (s1, s2, s3) {
            avg = (s1+s2+s3)/3;
            if (avg < 60)  return "F";
            else if (avg < 70) return "D";
            else if (avg < 80) return "C";
            else if (avg < 90) return "B";
            else return "A";
        }

        or
        function getGrade (s1, s2, s3) {
            var s = (s1 + s2 + s3) / 3
            return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F"
        }

        or
        function getGrade(...scores) {
            let average = scores.reduce((a, b) => a + b) / scores.length

            if (average >= 90) return 'A'
            else if (average >= 80) return 'B'
            else if (average >= 70) return 'C'
            else if (average >= 60) return 'D'
            else return 'F'
        }
//https://www.codewars.com/kata/56368f37d464c0a43c00007f/solutions/javascript //switch
//done https://www.codewars.com/kata/56530b444e831334c0000020/train/javascript
        function chromosomeCheck(sperm) {
            if (sperm == 'XX') {
                return "Congratulations! You're going to have a daughter.";
            } else {
                return "Congratulations! You're going to have a son.";
            }
        }
//done https://www.codewars.com/kata/57089707fe2d01529f00024a/train/javascript

        function checkAlive (health) {
            if (health <= 0) {
                return false;
            } else {
                return true;
            }
        }
//done https://www.codewars.com/kata/57158fb92ad763bb180004e7/train/javascript //use ``
        function rainAmount(mm){
            if (mm >= 40) {
                return "Your plant has had more than enough water for today!";
            } else if (mm <= 40) {
                return `You need to give your plant ${40-mm}mm of water`;
            } else {
                return
            }
        }
//done https://www.codewars.com/kata/571f832f07363d295d001ba8/train/javascript
        function trueOrFalse(val){
            if(val)return 'true';
            else return 'false';
        }
done //https://www.codewars.com/kata/whats-the-real-floor
        function getRealFloor(n) {
            if (n <= 0) {
                return n;
            } else if ( n < 13) {
                return n - 1;
            } else if (n > 13) {
                return n - 2;
            }
        }
        or
        function getRealFloor(n) {
            return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
        }

??//https://www.codewars.com/kata/5761a717780f8950ce001473/train/javascript //How old will I be in 2099
// done codewars.com/kata/57a429e253ba3381850000fb/train/javascript  //calculate bmi
        function bmi(weight, height) {
            let bmi = weight /  height ** 2
            if (bmi <= 18.5) {
                return "Underweight";
            } else if (bmi <= 25.0) {
                return "Normal";
            } else if (bmi <= 30.0) {
                return "Overweight";
            } else if ( bmi > 30 ) {
                return "Obese";
            }
        }
//https://www.codewars.com/kata/57b58827d2a31c57720012e8/train/javascript //toFixed(2)  //Fuel Calculator
need to fix
        function fuelPrice(litres, pricePerLitre) {
            if (litres > 2) {
                return ((litres * (pricePerLitre - 0.05)).toFixed(2));
            } else if  (litres > 4) {
                return ((litres * (pricePerLitre - 0.10)).toFixed(2));
            } else if  (litres > 6) {
                return ((litres * (pricePerLitre - 0.15)).toFixed(2));
            } else if  (litres > 8) {
                return  ((litres * (pricePerLitre - 0.20)).toFixed(2));
            } else if (litres < 10) {
                return ((litres * (pricePerLitre - 0.25)).toFixed(2));
            }
        }






        ???//https://www.codewars.com/kata/57f022a6cba9da84a3000095  //Return 17
???//https://www.codewars.com/kata/583710ccaa6717322c000105/train/javascript  //Simple multiplication
            function simpleMultiplication(number) {
                if (number * 8) {
                    return "Even";
                } else if (number * 9) {

                    return "Odd";

                }
            }

//https://www.codewars.com/kata/5875b200d520904a04000003/train/javascript //Will there be enough space?
//done https://www.codewars.com/kata/5ab6538b379d20ad880000ab/train/javascript
            const areaOrPerimeter = function(l , w) {
                let  area = l * w;
                let perimeter = 2 * (l + w);
                if ( l == w ) {
                    return area;
                } else {
                    return perimeter;
                }
            };
//done https://www.codewars.com/kata/52ceafd1f235ce81aa00073a/train/javascript //Plural
        function plural(n) {
            if (n == 1) {
                return false;
            } else {
                return true;
            }
        }
//https://www.codewars.com/kata/55192f4ecd82ff826900089e/train/javascript //watermelon
        function divide(weight){
            if (weight > 2 && weight % 2 == 0) {
                return true;
            } else {
                return false;
            }
        }

//https://www.codewars.com/kata/55cb632c1a5d7b3ad0000145/train/javascript //Keep up the hoop
//https://www.codewars.com/kata/chuck-norris-vii-true-or-false-beginner
//https://www.codewars.com/kata/59ca8246d751df55cc00014c/train/javascript
//https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript //return negative
//https://www.codewars.com/kata/5c374b346a5d0f77af500a5a/train/javascript
//https://www.codewars.com/kata/5834fec22fb0ba7d080000e8/train/javascript




//optional
//https://www.codewars.com/kata/5932c94f6aa4d1d786000028
//https://www.codewars.com/kata/55cb854deb36f11f130000e1






GCD sum  form coadwars
    function solve (s,g){
        if (s%g !==0){
        return -1;
        } else {
        return [g, s-g];
        }
    }







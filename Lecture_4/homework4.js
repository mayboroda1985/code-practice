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
//1. https://www.codewars.com/kata/52ceafd1f235ce81aa00073a
//https://www.codewars.com/kata/55192f4ecd82ff826900089e
//https://www.codewars.com/kata/56d6c333c9ae3fc32800070f
//https://www.codewars.com/kata/53af2b8861023f1d88000832
//https://www.codewars.com/kata/calculate-two-peoples-individual-ages
//hint: in the end use => return [age2, age1]
//https://www.codewars.com/kata/554003323fd6af1c4200004e
//https://www.codewars.com/kata/is-n-divisible-by-x-and-y
//https://www.codewars.com/kata/is-this-a-triangle
//https://www.codewars.com/kata/rock-paper-scissors
//https://www.codewars.com/kata/l1-set-alarm

//https://www.codewars.com/kata/can-we-divide-it
//https://www.codewars.com/kata/students-final-grade
//https://www.codewars.com/kata/even-or-odd
//https://www.codewars.com/kata/55afed09237df73343000042

//https://www.codewars.com/kata/55cbd4ba903825f7970000f5
//https://www.codewars.com/kata/56368f37d464c0a43c00007f
//https://www.codewars.com/kata/determine-offspring-sex-based-on-genes-xx-and-xy-chromosomes
//https://www.codewars.com/kata/57089707fe2d01529f00024a
//https://www.codewars.com/kata/57158fb92ad763bb180004e7
//https://www.codewars.com/kata/training-js-number-6-basic-data-types-boolean-and-conditional-statements-if-dot-else
//https://www.codewars.com/kata/whats-the-real-floor
//https://www.codewars.com/kata/5761a717780f8950ce001473
//https://www.codewars.com/kata/calculate-bmi
//https://www.codewars.com/kata/57b58827d2a31c57720012e8
//https://www.codewars.com/kata/57d448c6ba30875437000138
//https://www.codewars.com/kata/57e921d8b36340f1fd000059
//https://www.codewars.com/kata/57f022a6cba9da84a3000095
//https://www.codewars.com/kata/alan-partridge-ii-apple-turnover
//https://www.codewars.com/kata/simple-multiplication
//https://www.codewars.com/kata/5875b200d520904a04000003
//https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b
//https://www.codewars.com/kata/5ab6538b379d20ad880000ab
//https://www.codewars.com/kata/525e5a1cb735154b320002c8
//https://www.codewars.com/kata/convert-boolean-values-to-strings-yes-or-no
//https://www.codewars.com/kata/keep-up-the-hoop
//https://www.codewars.com/kata/be-concise-i-the-ternary-operator
//https://www.codewars.com/kata/101-dalmatians-squash-the-bugs-not-the-dogs
//https://www.codewars.com/kata/do-i-get-a-bonus
//https://www.codewars.com/kata/training-js-number-7-if-dot-else-and-ternary-operator
//https://www.codewars.com/kata/5977387e131c07082b000098
//https://www.codewars.com/kata/can-we-divide-it
//https://www.codewars.com/kata/5a6d3bd238f80014a2000187
//https://www.codewars.com/kata/5dd259444228280032b1ed2a
//https://www.codewars.com/kata/get-planet-name-by-id
//https://www.codewars.com/kata/5296455e4fe0cdf2e000059f
//https://www.codewars.com/kata/572059afc2f4612825000d8a
//https://www.codewars.com/kata/basic-mathematical-operations
//https://www.codewars.com/kata/switch-it-up
//https://www.codewars.com/kata/simple-calculator
//https://www.codewars.com/kata/59ca8246d751df55cc00014c/train/javascript
//https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
//https://www.codewars.com/kata/5c374b346a5d0f77af500a5a/train/javascript
//https://www.codewars.com/kata/5834fec22fb0ba7d080000e8/train/javascript
//https://www.codewars.com/kata/515e188a311df01cba000003/train/javascript
//https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/javascript
//https://www.codewars.com/kata/5808dcb8f0ed42ae34000031/train/javascript
//https://www.codewars.com/kata/5810085c533d69f4980001cf/train/javascript
//Codewars:
//https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript
//https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/javascript
//https://www.codewars.com/kata/56368f37d464c0a43c00007f/solutions/javascript //switch
//https://www.codewars.com/kata/56530b444e831334c0000020/train/javascript
//https://www.codewars.com/kata/57089707fe2d01529f00024a/train/javascript
//https://www.codewars.com/kata/57158fb92ad763bb180004e7/train/javascript //use ``
//https://www.codewars.com/kata/571f832f07363d295d001ba8/train/javascript
//https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript
//https://www.codewars.com/kata/5761a717780f8950ce001473/train/javascript
//codewars.com/kata/57a429e253ba3381850000fb/train/javascript
//https://www.codewars.com/kata/57b58827d2a31c57720012e8/train/javascript //toFixed(2)
//https://www.codewars.com/kata/57f022a6cba9da84a3000095
//https://www.codewars.com/kata/583710ccaa6717322c000105/train/javascript
//https://www.codewars.com/kata/5875b200d520904a04000003/train/javascript
//https://www.codewars.com/kata/5ab6538b379d20ad880000ab/train/javascript
//https://www.codewars.com/kata/52ceafd1f235ce81aa00073a/train/javascript
//https://www.codewars.com/kata/55192f4ecd82ff826900089e/train/javascript
//https://www.codewars.com/kata/55cb632c1a5d7b3ad0000145/train/javascript
//https://www.codewars.com/kata/chuck-norris-vii-true-or-false-beginner
//https://www.codewars.com/kata/59ca8246d751df55cc00014c/train/javascript
//https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
//https://www.codewars.com/kata/5c374b346a5d0f77af500a5a/train/javascript
//https://www.codewars.com/kata/5834fec22fb0ba7d080000e8/train/javascript




//optional
//https://www.codewars.com/kata/5932c94f6aa4d1d786000028
//https://www.codewars.com/kata/55cb854deb36f11f130000e1












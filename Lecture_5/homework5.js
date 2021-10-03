//---------------------LESSON 5 HW-------------------

//https://www.codewars.com/kata/571effabb625ed9b0600107a/train/javascript
function getLength(arr){

    return arr.length;
}
function getFirst(arr){
    //return the first element of arr
    return arr[0];
}
function getLast(arr){
    return arr[arr.length-1];
}
function pushElement(arr){
    var el=1;
    //push el to arr

    arr.push(1);
    return arr;
}
function popElement(arr){
    //pop an element from arr
    arr.pop();
    return arr;
}
//----------------------- Task 1.-------------------------
const animals = ['pig', 'goat', 'sheep'];
// 1. Add a new element to on zero index in the array
const animals = ['pig', 'goat', 'sheep'];
const animal2 = ['dog', ... animals];
console.log(animal2);

//or

const withLion = animals.unshift('zebra ');
console.log(withLion); //returns 4 this means that 4 items in array
console.log(animals); // to see what we added in the beggining ['zebra ','pig', 'goat', 'sheep'];
console.log(animals.indexOf('sheep')); //index is 3 this means position in array ['pig', 'goat', 'sheep'];
animals[0] = 'owl'
console.log(animals); //we changed "zebra" to "owl"
const arr = [6, 'animal', NaN, undefine , null , "",];
const arr1 = new Array(4,.5,7)
const
// 2. Add a new element to end of the array
const animals = ['pig', 'goat', 'sheep'];
const animal2 = [... animals, 'dog'] ;
console.log(animals.push('dog'));
console.log(animals);
console.log(animals[3] = 'cat');
console.log(animals);
console.log(animals.indexOf[3]);
//or if we don't know the length
console.log(animals[animals.length-1]);
console.log(animal2);
// 3. Remove last element of the array
const animals = ['pig', 'goat', 'sheep'];
console.log(animals.pop(2));
// 4. Remove the first el of the array

//--------------------------------- Task 2.--------------------
//1. Create an array from an existing one
//   without mutating the first one arr

//--------------------------------- Task 3.--------------------
// 1. Creates a new array with values from 0 to 10
// using as much ways as you can


const arr = Array.of(10, 11, 12);
const arr1 = Array.from(Array(11).keys()));
console.log(arr1);

if (arr [0] % 2 != 0) {
   console.log([0+1]);
} else {
    console.log(arr [0]);
}
//find minimal number in this array
console.log(Math.min(...arr1));

//--------------------------------- Task 4.--------------------

//1. Create an array with any values

const  arr3 = Array.of(1, 6, 7, 4, 9, 3, 9);


//2. Create a second array and
//asigne to this second arrey a value of a first array without changing the first one
//print both arrays to the console
const arr4 = Array.of(...arr3);
arr4.push(10);
console.log(arr3);
console.log(arr4);
//max zachenie

console.log(Math.max(...arr4));
console.log(Math.min(...arr4));
//last element first array (arr3)
console.log(arr3[arr3.length-1]);


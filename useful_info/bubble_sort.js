https://www.youtube.com/watch?v=YkCQOyiGQ6E&list=PL6Gtav8N4O7h3sFBfdKRRfdMPbpbmdsd0&index=22

    Sdelatb v poryadke vozrastaniya: using bubble sort method

const arr = [3,4,1,88,9];
let temp = null;
for (let i = 0; i < arr.length; i++ ) { //i = 0
    for (let j = 0; j < (arr.length - 1); j++ ) { // j = 0
        if(arr[j] > arr[j + 1]) { //38 > 4 == true
            temp = arr[j]; // temp = 38
            arr[j] = arr[j + 1]; // arr[0] = 4 [4,4,1,88,9]
            arr[j+1] = temp; //arr[1] = 38     [4,38,1,88,9]
             }
        //arr[0]  arr [0+1] temp = arr[0]
    }
    }
console.log(arr);

distructirizaciya without method

const arr = [3,4,1,88,9];
let temp = null;
for (let i = 0; i < arr.length; i++ ) { //i = 0
    for (let j = 0; j < (arr.length - 1); j++ ) { // j = 0
        if(arr[j] > arr[j + 1]) { //38 > 4 == true

            [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        }
    }
}
console.log(arr); [1, 1, 4, 9 38,88 ]

or

function findNumber(array) {
    let temp;
    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            if (array[j] < array[i]) {
                temp = array[j];
                array[j] = array[i];
                array[i] = temp;
            }
        }
    }
    return array;
}
let array = [ 2, 1, 3, 5,7, 27, 3, 33, 45, 76,87];
console.log(findNumber(array));
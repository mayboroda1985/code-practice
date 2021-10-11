
return doljen but' ne v loops' a za ego predelami


export function find_total( my_numbers ) {
    for ( let i = 0; i <  my_numbers.length; i ++ ) {
        if ((my_numbers[i] % 2 === 0) || (my_numbers[i] % 2 !== 0 && my_numbers[i] % 5 !== 0) || (my_numbers[i] % 5 === 0 )) {
            my_numbers[i] += 1;
        } else if (my_numbers[i] % 2 !== 0 && my_numbers[i] % 5 !== 0  ) {
            my_numbers[i] += 3;
        } else if (my_numbers[i] % 5 === 0 ) {
            my_numbers[i] += 5;
        }
    }
    return my_numbers;
}

2.

About adding 3 points to odd number, except 5
const arr = [ 1,2,3,4,5];
for ( i = 0; i < arr.length; i ++ ) {
    if (arr[i] % 2 !== 0 ) {
        console.log(arr[i] += 3 );
    }
}
console.log(arr);

2.About adding 1 points to odd number in array
const arr = [ 1,2,3,4,5];
for ( i = 0; i < arr.length; i ++ ) {
    if (arr[i] % 2 === 0 ) {
        console.log(arr[i] += 1 );
    }
}
console.log(arr);

3. adding 5 points to the number “5”
const arr = [ 1,2,3,4,5];
for ( i = 0; i <=5; i ++ ) {
    if (arr[i] % 5 === 0 ) {
        console.log(arr[i] += 5 );
    }
}
console.log(arr);

zadacha s testgorilla https://app.testgorilla.com/preview/106678

export function find_total( my_numbers ) {
    let totalScore = 0;
    for ( let i = 0; i < my_numbers.length; i ++ ) {
        if (my_numbers[i] % 2 === 0) {
            totalScore += 1;
        }

        if (my_numbers[i] % 2 !== 0 && my_numbers[i] % 5 !== 5){
            totalScore += 3;
        }

        if (my_numbers[i] === 5 ) {
            totalScore += 5;
        }

    }
     return totalScore;
}


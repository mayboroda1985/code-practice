answer with JSbin https://jsbin.com/kayifajado/edit?js,console
function arrayPlusArray(arr1, arr2) {
    let sumArr1 = 0;
    let sumArr2 = 0;
    for (let i = 0; i < arr1.length; i++)  {
        sumArr1 += arr1[i];
    }
    for (let j = 0; j < arr2.length; j++)  {
        sumArr2 += arr2[j];
    }
    return sumArr1 + sumArr2 ;
}

or

function arrayPlusArray(arr1, arr2) {
    var suma=0;
    for(var i=0;i<arr1.length;i++)
        suma+=arr1[i];
    for(var i=0;i<arr2.length;i++)
        suma+=arr2[i];
    return suma;
}
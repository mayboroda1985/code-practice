/* Во-первых, выражение не читается слева направо,
&& имеет несколько более высокий приоритет , чем || ,
    поэтому его можно записать в любом случае- a && b || c идентичен c || a && b .
    Приоритет оператора определяет, куда должны входить скобки в выражении,
    поэтому a && b || c будет (a && b) || c . Только в выражениях,
    где каждый оператор имеет одинаковый приоритет , операторы вычисляются слева направо. */



two !! before nuber ex: 6 transfer to boolean
console.log(!!6); //in console will be true
console.log(!!0); //in console will be false
console.log(!!1); //in console will be true
//when solving problems with operations always check order of precedence
//https://www.dummies.com/web-design-development/javascript-operator-precedence/

 empty string = true;
 let a = ' '; // true
 let b = ""; // false

 console.log(a);  //result true
console.log(b); //result false

// 1) console.log( true || (true) && false ); //true:
// если есть скобки, то 1)действие в скобках; 2)после них направо, а потом в начало.

// 2) console.log( (true) || true != false && false ); //true:
// здесь (!=) имеет больший приоритет в очередности исполнения,
// поэтому после (!=) направо, а потом в начало.

// 3) console.log( true != false || (true) && false );//true
// здесь все зависит от приоритета исполнения &&, ||
// У действия в скобках наивысший приоритет, далее идет &&, а после уже идет ||


// В первом примере идет в скобках true (наивысший приоритет), далее по приоритету идет && (в случае true && false возвращается false) а затем проверяем || ( в случае true || false возвращается true)
// Аналогично и для других примеров смотрите на приоритеты проверок
//

// Для третьего примера сначала смотрим действие в скобках (в нашем случае true) далее по приоритету проверяете true && false (всегда возвращает false), а потом уже проверяем false || false (возвращает нам false) и в итоге наше утверждение true != false верно и возвращает нам true

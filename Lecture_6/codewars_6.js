https://www.codewars.com/kata/5808e2006b65bff35500008f/train/javascript
    function position(letter){
        let alphabet = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
            'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
            'Y', 'Z' ];
let str = "Position of alphabet:"
        for (let i = 0; i <= alphabet.length; i++ ) {
            if (alphabet[i] = letter ) {
               str + = i;
        }
            return (letter, str);
    }


  codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript //Array plus array
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
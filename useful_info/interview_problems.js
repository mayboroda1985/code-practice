
/* Zadacha : Dan massiv celux chisel kak polojitelbnux tak i otrecatelbnux.
    Massiv mojet butb bolbshoy.Po ysloviyam zadachi v massive stb tolbko odno sovpadenie chisel.
    Nyjno naiti eto sovpadenie. */


function findNumber(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
         if (array[i] == array[j]) {
             return array[i];
         }
      }
    }
}
let array = [1, 2, 3, 5, 7, 27, 3, 33, 45, 76, 87];
console.log(findNumber(array))


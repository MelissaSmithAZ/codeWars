// // Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

// // Write a program where Alex can input(n) how many times the hoop goes round and it will return him an encouraging message:)

// // -If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".

// // - If he doesn't get 10 hoops, return the string "Keep at it until you get it".

// function hoopCount(n) {
//     return n < 10 ? 'you can do better' : n >= 10 ? "Great, now move on to tricks" : null
// }

// hoopCount(10)

// // input a number output its equivelent word

// function switchItUp(number) {
//     return number === 0 ? 'Zero' : number === 1 ? 'One' : number === 2 ? 'Two' : number === 3 ? 'Three' : number === 4 ? 'Four' : number === 5 ? 'Five' : number === 6 ? 'Six' : number === 7 ? 'Seven' : number === 8 ? 'Eight' : number === 9 ? 'Nine' : null
// }

// switchItUp(9)

// switchItUp = n => ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"][n]

// switchItUp(9)

// //************* Duplicate letters of a string*/
// // This time no story, no theory. The examples below show you how to write function accum:

// // Examples:

// // accum("abcd") -> "A-Bb-Ccc-Dddd"
// // accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// // accum("cwAt") -> "C-Ww-Aaa-Tttt"
// // The parameter of accum is a string which includes only letters from a..z and A..Z.

// function accum(str) {
//     return str.split('').map((letter, i) =>
//         (letter.toUpperCase() + letter.toLowerCase().repeat(i))).join('_')

// }

// accum('abc')

// //creat a rectangle with ***** and letters from an array
// //****** using .repeate */
// function star(arr) {
//     // let star = '*'
//     console.log('*'.repeat(arr[0].length + 2))

//     for (var i = 0; i < (arr.length); i++) {
//         console.log("*" + arr[i] + "*")

//     }
//     console.log("*".repeat(arr[0].length + 2))
// }

// star(['abc', 'def'])

//     / I have a cat and a dog.

// // I got them at the same time as kitten/puppy. That was humanYears years ago.

// // Return their respective ages now as [humanYears,catYears,dogYears]

// // NOTES:

// // humanYears >= 1
// // humanYears are whole numbers only
// // Cat Years
// // 15 cat years for first year
// // +9 cat years for second year
// // +4 cat years for each year after that
// // Dog Years
// // 15 dog years for first year
// // +9 dog years for second year
// // +5 dog years for each year after that

// //** figure out how many human  */

// function old(pet, age) {
//     const humanYear = 0
//     if (pet === 'dog' && age === 1) {
//         age = 15
//     } else if (pet === 'dog' && age > 1 && age < 3) {
//         age = 15 + 9
//     } else if (pet === 'dog' && age >= 3) {
//         age = 15 + 9 + (age - 2) * 5
//     }

//     if (pet === 'cat' && age === 1) {
//         age = 15
//     } else if (pet === 'cat' && age > 1 && age < 3) {
//         age = 15 + 9
//     } else if (pet === 'cat' && age >= 3) {
//         age = 15 + 9 + (age - 2) * 4
//     }
//     return age
// }
// old('cat', 3)

// //or more generic return
// var humanYearsCatYearsDogYears = function (y) {
//     if (y == 1) return [1, 15, 15]
//     if (y == 2) return [2, 24, 24]
//     return [y, (y - 2) * 4 + 24, (y - 2) * 5 + 24]
// }
//*************** */
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo"
// name + " does not play banjo"
// Names given are always valid strings.

function banjoPlayer(str) {
  return str.split(" ").map((letter, i) => {
    str[0] === "r" || str[0] === "R" ? "plays banjso" : "does not play banjo";
  });
}

banjoPlayer("rick");

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers) {
  numbers = numbers.split(" ");
  return Math.max(...numbers);
}
highAndLow("1 2 3");


// given an array of integers, find the first missing positive integer,  in other words find the lowest positive integer that does not exist in the array.  the array can contain duplicates and neg numbers

function missingPositive(arr) {
  //we need to sort them as it could be in a wrong order of positive neg
  const sortedArr = arr.sort()
  //once sorted we want to loop through them
  for (i = 0; i < sortedArr.length; i++) {
    //saying if the first number and the next number subtracted do not equal 1 than return the first number plus one 
    if (sortedArr[i] > 0 && sortedArr[i + 1] - arr[i + 1] !== sortedArr[i] + 1) {
      return arr[i] + 1
    }

  }

}

missingPositive([3, 4, -1, 1])
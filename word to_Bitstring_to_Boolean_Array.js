/*
Word to Bitstring to Boolean Array

Create a function that converts a word to a bitstring and then to a boolean array based on the following criteria:

    Locate the position of the letter in the English alphabet (from 1 to 26).
    Odd positions will be represented as 1 and 0 otherwise.
    Convert the represented positions to boolean values, 1 for true and 0 for false.
    Store the conversions into an array.

Examples

toBoolArray("deep") ➞ [false, true, true, false]
// deep converts to 0110
// d is the 4th alphabet - 0
// e is the 5th alphabet - 1
// e is the 5th alphabet - 1
// p is the 16th alphabet - 0

toBoolArray("loves") ➞ [false, true, false, true, true]

toBoolArray("tesh") ➞ [false, true, true, false]

Notes

    The letter A is at position 1 and Z at 26.
    All input strings are in lowercase letters of the English alphabet.

URL: https://edabit.com/challenge/9JcSwa4dN5PEmdBEg

*/

// function toBoolArray(entrada){

//     console.log(entrada.split('').map(x => ((x.charCodeAt()-97)%2) == 0 ? true:false ))

// }

const toBoolArray = entrada => entrada.split('').map(x => ((x.charCodeAt()-97)%2) == 0 ? true:false )

console.log(toBoolArray("deep")) // [false, true, true, false]
// deep converts to 0110
// d is the 4th alphabet - 0
// e is the 5th alphabet - 1
// e is the 5th alphabet - 1
// p is the 16th alphabet - 0

console.log(toBoolArray("loves")) // [false, true, false, true, true]

console.log(toBoolArray("tesh")) // [false, true, true, false]
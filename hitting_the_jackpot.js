/*
Hitting the Jackpot

Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, and false otherwise. The array will contain 4 elements.
Examples

testJackpot(["@", "@", "@", "@"]) ➞ true

testJackpot(["abc", "abc", "abc", "abc"]) ➞ true

testJackpot(["SS", "SS", "SS", "SS"]) ➞ true

testJackpot(["&&", "&", "&&&", "&&&&"]) ➞ false

testJackpot(["SS", "SS", "SS", "Ss"]) ➞ false

Notes

The elements must be exactly identical for there to be a jackpot.

URL:https://edabit.com/challenge/hxyvTffvdT4E238CY
*/

const testJackpot = result => result.every(element => element == result[0])

console.log(testJackpot(["@", "@", "@", "@"]))// ➞ true

console.log(testJackpot(["abc", "abc", "abc", "abc"]))// ➞ true

console.log(testJackpot(["SS", "SS", "SS", "SS"]))// ➞ true

console.log(testJackpot(["&&", "&", "&&&", "&&&&"]))// ➞ false

console.log(testJackpot(["SS", "SS", "SS", "Ss"]))// ➞ false)
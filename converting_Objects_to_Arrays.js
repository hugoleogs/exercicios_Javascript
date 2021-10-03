/*

Converting Objects to Arrays

Write a function that converts an object into an array, where each element represents a key-value pair.
Examples

toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]

toArray({}) ➞ []

Notes

Return an empty array if the object is empty.

URL:https://edabit.com/challenge/pPNAs5PvB3WvnDwDM

*/

function toArray(obj) {
    let saida = []
    let i
    for (i in Object.keys(obj)){
        saida.push([Object.keys(obj)[i], obj[Object.keys(obj)[i]]])
    }
	return saida
}

console.log(`a saida é ${toArray({ a: 1, b: 2 })}`)

console.log(toArray({ shrimp: 15, tots: 12 }))

console.log(toArray({}))
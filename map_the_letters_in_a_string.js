/*
Given a word, create an object that stores the indexes of each letter in an array.

    Make sure the letters are the keys.
    Make sure the letters are symbols.
    Make sure the indexes are stored in an array and those arrays are values.

Examples

mapLetters("dodo") ➞ { d: [0, 2], o: [1, 3] }

mapLetters("froggy") ➞ { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }

mapLetters("grapes") ➞ { g: [0], r: [1], a: [2], p: [3], e: [4], s: [5] }

Notes

All strings given will be lowercase.

*/
function mapLetters(word) {
    var dici = {}
    word.split('').forEach((element, indice) => {
        if (Object.keys(dici).indexOf(element) == -1){
            dici[element] = [indice]
        }else{
            dici[element].push(indice)
        }
    });
    return dici
}

console.log(mapLetters("dodo"))

console.log(mapLetters("froggy"))

console.log(mapLetters("grapes"))

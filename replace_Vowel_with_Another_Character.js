/*
Replace Vowel with Another Character

Create a function that takes a string and replaces the vowels with another character.

    a = 1
    e = 2
    i = 3
    o = 4
    u = 5

Examples

replaceVowel("karachi") ➞ "k1r1ch3"

replaceVowel("chembur") ➞ "ch2mb5r"

replaceVowel("khandbari") ➞ "kh1ndb1ri"

Notes

The input will always be in lowercase.
*/



const replaceVowel = function (word) {
    let vet_teste = ['a','e','i','o','u']
    let obj_valor = {"a":1,"e":2, "i":3, "o":4, "u":5}
    let regex
    for (letra in vet_teste){
        if (word.indexOf(vet_teste[letra]) != -1)
            regex = new RegExp(`${vet_teste[letra]}`, 'g')
            word = word.replace(regex, obj_valor[vet_teste[letra]])
    }
    return word
}

console.log(replaceVowel("karachi"))

console.log(replaceVowel("chembur"))

console.log(replaceVowel("khandbari"))
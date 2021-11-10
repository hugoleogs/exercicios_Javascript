/*
Reverse the Odd Length Words

Given a string, reverse all the words which have odd length. The even length words are not changed.
Examples

reverseOdd("Bananas") ➞ "sananaB"

reverseOdd("One two three four") ➞ "enO owt eerht four"

reverseOdd("Make sure uoy only esrever sdrow of ddo length")
➞ "Make sure you only reverse words of odd length"

Notes

There is exactly one space between each word and no punctuation is used.

URL: https://edabit.com/challenge/yYfQoo6rkMezauG77

*/

const reverseOdd = function(text) {
    palavra = ''
    saida = []
    nova_array = text.split(" ")
    for(j = 0; j < nova_array.length; j++){
        if (nova_array[j].length % 2 == 0) {
            palavra = nova_array[j]
        } else {
            palavra = nova_array[j].split('').reverse().join('')
        }
        saida.push(palavra)
    }

    return saida.join(' ')
}

console.log(reverseOdd("Bananas"))//➞ "sananaB"

console.log(reverseOdd("One two three four"))// ➞ "enO owt eerht four"

console.log(reverseOdd("Make sure uoy only esrever sdrow of ddo length"))//➞ "Make sure you only reverse words of odd length")
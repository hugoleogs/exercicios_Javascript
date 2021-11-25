/* 
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

URL: https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

*/

const isPangram = function (entrada){
    qtd = 0
    let unicos = [... new Set(entrada.split(''))]
    unicos.forEach(element => {
        num = element.charCodeAt(0)
        if ((num >= 65 &&  num <= 90) || (num >= 97 &&  num <= 122)){
            qtd++
        }
    });
    return qtd >= 26
}

console.log(isPangram('The quick brown fox jumps over the lazy dog'))
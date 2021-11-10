/*
Finding Nemo

You're given a string of words. You need to find the word "Nemo", and return a string like this: 
"I found Nemo at [the order of the word you find nemo]!".

If you can't find Nemo, return "I can't find Nemo :(".
Examples

findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"

findNemo("Nemo is me") ➞ "I found Nemo at 1!"

findNemo("I Nemo am") ➞ "I found Nemo at 2!"

Notes

    ! , ? . are always separated from the last word.
    Nemo will always look like Nemo, and not NeMo or other capital variations.
    Nemo's, or anything that says Nemo with something behind it, doesn't count as Finding Nemo.
    If there are multiple Nemo's in the sentence, only return for the first one.

URL: https://edabit.com/challenge/c23dFfNiKbnguSQtq

*/

const findNemo = texto => texto.split(" ").indexOf('Nemo') > -1 ? `I found Nemo at ${texto.split(" ").indexOf('Nemo')+1}!` : "I can't find Nemo :("


console.log(findNemo("I am finding Nemo !"))// "I found Nemo at 4!"

console.log(findNemo("Nemo is me"))// ➞ "I found Nemo at 1!"

console.log(findNemo("I Nemo am"))// ➞ "I found Nemo at 2!")
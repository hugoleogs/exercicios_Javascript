/*

Letter Occurrences Per Word

Create a function that takes in a sentence and a character to find. Return an object of each word in the sentence, with the count of the specified character as the value.
Examples

findOccurrences("Hello World", "o") ➞ {
  "hello" : 1,
  "world" : 1
}

findOccurrences("Create a nice JUICY function", "c") ➞  {
  "create" : 1,
  "a" : 0,
  "nice" : 1,
  "juicy" : 1,
  "function" : 1
}

findOccurrences("An APPLE a day keeps an Archeologist AWAY...", "A") ➞ {
  "an" : 1,
  "apple" : 1,
  "a" : 1,
  "day" : 1,
  "keeps" : 0,
  "archeologist" : 1,
  "away..." : 2
}

Notes

    The function shouldn't be case sensitive.
    Words in the dictionary should be in lowercase.
    You may be required to find punctuation.
    Duplicate words should be ignored (see example #3 for the word "an").

URL: https://edabit.com/challenge/gA9dpoanWY6StiKR9

*/
function count(string, char){
    var reg = new RegExp(char, "gi")
    return string.match(reg) != null ? string.match(reg).length : 0
}

function findOccurrences(text, letra){
    let obj = {}
    text.toLowerCase().split(' ').forEach(palavra => {
        obj[palavra] = count(palavra, letra)
    })
    return obj
}

console.log(findOccurrences("Hello World", "o"))
  
console.log(findOccurrences("Create a nice JUICY function", "c"))
  
console.log(findOccurrences("An APPLE a day keeps an Archeologist AWAY...", "A"))
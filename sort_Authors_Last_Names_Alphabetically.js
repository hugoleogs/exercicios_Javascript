/*

Sort Authors Last Names Alphabetically

Today you volunteered as a librarian. You were given an array of objects, each one containing different book information. 
You need to sort the objects in alphabetical order of the author's last name.
Examples

sortByLastName([
  { name: "Harry Potter", rating: "8+", author: "Joanne Rowling" },
  { name: "Warcross", rating: "13+", author: "Marie Lu" },
  { name: "The Hunger Games", rating: "12+", author: "Suzanne Collins" },
]) ➞ [
  { name: "The Hunger Games", rating: "12+", author: "Suzanne Collins" },
  { name: "Warcross", rating: "13+", author: "Marie Lu" },
  { name: "Harry Potter", rating: "8+", author: "Joanne Rowling" },
]

Notes

    There will always be a name, rating, and author property on each object.
    The array will never be empty.
    The author property will always feature only a first and last name.

https://edabit.com/challenge/vtFsh5CzFep6b9gDf

*/

function sortByLastName(arr){

    return arr.sort((x, y) => x["author"].split(' ')[1] > y["author"].split(' ')[1] ? 1 : y["author"].split(' ')[1] > x["author"].split(' ')[1] ? -1 : 0)

}

console.log(sortByLastName([
    { name: "Harry Potter", rating: "8+", author: "Joanne Rowling" },
    { name: "Warcross", rating: "13+", author: "Marie Lu" },
    { name: "The Hunger", rating: "12+", author: "Suzanne Collins" },
  ]))


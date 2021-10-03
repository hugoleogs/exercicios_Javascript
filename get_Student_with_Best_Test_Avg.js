/*

Get Student with Best Test Avg.

Given an object with students and the grades that they made on the tests that they took, determine which student has the best Test Average. The key will be the student's name and the value will be an array of their grades. You will only have to return the student's name. You do not need to return their Test Average.
Examples

getBestStudent({
  John: [100, 90, 80],
  Bob: [100, 70, 80]
}) ➞ "John"

// John's avg = 90
// Bob's avg = 83.33

getBestStudent({
  Susan: [67, 84, 75, 63],
  Mike: [87, 98, 64, 71],
  Jim: [90, 58, 73, 86]
}) ➞ "Mike"

Notes

All students in an object will have the same amount of test scores. So no student will have taken more tests than another.

https://edabit.com/challenge/nSg24HbusyCQKn9xk

*/
const soma = arr => arr.reduce((a, b) => a+b, 0)

const tuplaAVG = arr => arr.map(x => [ x[0] ,parseFloat((soma(x[1])/x[1].length).toFixed(2))])

const retornaMaior = arr => arr.reduce((a, b) => a[1] > b[1] ? a:b)


function getBestStudent(obj){
    
    arr = Object.entries(obj)

    return retornaMaior(tuplaAVG(arr))[0]

}

console.log(getBestStudent({
    John: [100, 90, 80],
    Bob: [100, 70, 80]
  }))

  
console.log(getBestStudent({
    Susan: [67, 84, 75, 63],
    Mike: [87, 98, 64, 71],
    Jim: [90, 58, 73, 86]
  }))
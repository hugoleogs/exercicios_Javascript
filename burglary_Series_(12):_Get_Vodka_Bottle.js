/*

Burglary Series (12): Get Vodka Bottle

The insurance guy laughs, he's just kidding. He just needs an updated list. You just need one of those Rammstein Vodka bottles.

Given an object with alcoholic drinks and a number, return a string with the name of the Rammstein bottle that matches the given number.
Examples

{ whiskey: 100, "Rammstein A": 100, "Rammstein B": 50 } ➞ "Rammstein A"
// number = 100

{ whiskey: 100, "Rammstein A": 100, "Rammstein B": 50 } ➞ "Rammstein B"
// number = 50

{ whiskey: 100, "Rammstein A": 100, "Rammstein D": 70, beer: 70 } ➞ "Rammstein D"
// number = 70

Notes

    There will always be a corresponding Rammstein bottle for the number given.
    There will never be 2 Rammstein bottles with the same number.
    You always return one Rammstein bottle.

URL: https://edabit.com/challenge/paMpZoEJ6gr4feMS3

*/

function getVodkaBottle(obj, num){

    return Object.entries(obj).filter(x => x[0].split(' ')[0] == 'Rammstein' && x[1] == num)[0][0]

}

console.log(getVodkaBottle({ whiskey: 100, "Rammstein A": 100, "Rammstein B": 50 } , 100))

console.log(getVodkaBottle({ whiskey: 100, "Rammstein A": 100, "Rammstein B": 50 }, 50))

console.log(getVodkaBottle({ whiskey: 100, "Rammstein A": 100, "Rammstein D": 70, beer: 70 }, 70))
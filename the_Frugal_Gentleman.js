/*

The Frugal Gentleman

Atticus has been invited to a dinner party, and he decides to purchase a bottle of wine. However, 
he has little knowledge of how to choose a good bottle. Being a very frugal gentleman (yet disliking 
looking like a cheapskate), he decides to use a very simple rule. In any selection of two or more wines, 
he will always buy the second-cheapest.

Given an array of wine objects, write a function that returns the name of the wine he will buy for 
the party. If given an empty array, return null. If given an array of only one, Atticus will buy that wine.
Examples

chosenWine([
  { name: "Wine A", price: 8.99 },
  { name: "Wine 32", price: 13.99 },
  { name: "Wine 9", price: 10.99 }
]) ➞ "Wine 9"

chosenWine([{ name: "Wine A", price: 8.99 }]) ➞ "Wine A"

chosenWine([]) ➞ null

Notes

All wines will be different prices, so there is no confusion in the ordering.

https://edabit.com/challenge/ujzhzyvGoASKxSAib

*/

const preco = (obj) => obj.price
const menorValor = (array) => array.reduce((menor, prox) => menor > prox ? prox: menor)
const segundoMenor = (array, menor) => array.filter(x => x > menor)
const nomeVinho = (arr, preco) => (arr.filter(x => x.price == preco))[0].name

function chosenWine (arr){

    arrPreco = arr.map(preco)

    return arr.length > 1 ? nomeVinho(arr, menorValor(segundoMenor(arrPreco, menorValor(arrPreco)))) : arr.length == 1 ? arr[0].name : null

}


console.log(chosenWine([
    { name: "Wine A", price: 8.99 },
    { name: "Wine 32", price: 13.99 },
    { name: "Wine 9", price: 10.99 }
  ]))
  
console.log(chosenWine([{ name: "Wine A", price: 8.99 }]))
  
console.log(chosenWine([]))
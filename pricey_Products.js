/*
Pricey Products

You will be given an object with various consumer products and thier respective prices. Return a list of the products with a minimum price of 500 in descending order.
Examples

products({"Computer" : 600, "TV" : 800, "Radio" : 50}) ➞ ["TV","Computer"]

products({"Bike1" : 510, "Bike2" : 401, "Bike3" : 501}) ➞ ["Bike1", "Bike3"]) 

products({"Loafers" : 50, "Vans" : 10, "Crocs" : 20}) ➞ []

products({"Calvin Klein" : 500, "Armani" : 5000, "Dolce & Gabbana" : 2000}), ["Armani", "Dolce & Gabbana", "Calvin Klein"])

Notes

N/A

URL: https://edabit.com/challenge/neWTApTYread9ZNdP

*/

function products(obj) {
	return (((Object.entries(obj)).filter(i => i[1]>=500)).sort((e, b) => e[1]>b[1]? -1 : 1)).map(a => a[0])
}

console.log(products({"Computer" : 600, "TV" : 800, "Radio" : 50}))

console.log(products({"Bike1" : 510, "Bike2" : 401, "Bike3" : 501}))

console.log(products({"Loafers" : 50, "Vans" : 10, "Crocs" : 20}))

console.log(products({"Calvin Klein" : 500, "Armani" : 5000, "Dolce & Gabbana" : 2000}))
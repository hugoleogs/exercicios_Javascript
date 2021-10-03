/*

Circle Constructor

Create a Circle() constructor that takes the radius as a single argument and has the following properties and methods:

    .radius
    .diameter
    .getC() (get circumference)
    .getA() (get area)

Instantiate this constructor with two circles:

    c1 has radius 3
    c2 has radius 5

For example, if I used the Circle constructor to instantiate a new instance called c0 with a radius of 1, I would have:
Examples

c0.radius ➞ 1

c0.diameter ➞ 2

c0.getC() ➞ 6.28

c0.getA() ➞ 3.14

Notes

    Circumference: 2πr. Area: πr^2.
    Use Math.PI for calculating circumference and area.
    Round the perimeter and area results to the nearest hundredths place.

https://edabit.com/challenge/75SZTpeP3xKPu8Gx4

*/


class Circle {
    constructor(radius){
        this.radius = radius
        this.diameter = 2*radius
    }

    getC(){
        return parseFloat((Math.PI*this.radius*2).toFixed(2))
    }

    getA(){
        return parseFloat((Math.PI*this.radius**2).toFixed(2))
    }
}

c1 = new Circle(3)
c2 = new Circle(5)

console.log(c1.radius)
console.log(c1.diameter)
console.log(c1.getC())
console.log(c1.getA())


console.log(c2.radius)
console.log(c2.diameter)
console.log(c2.getC())
console.log(c2.getA())

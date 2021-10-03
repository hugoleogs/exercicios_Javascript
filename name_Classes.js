/*

Name Classes

Write a class called Name and create the following attributes given a first name and last name (as fname and lname):

    An attribute called fullname which returns the first and last names.
    A attribute called initials which returns the first letters of the first and last name. Put a . between the two letters.

Remember to allow the attributes fname and lname to be accessed individually as well.
Examples

a1 = new Name("john", "SMITH")

a1.fname ➞ "John"

a1.lname ➞ "Smith"

a1.fullname ➞ "John Smith"

a1.initials ➞ "J.S"

Notes

    Make sure only the first letter of each name is capitalised.
    Check the Resources tab for some helpful tutorials on JavaScript classes.

https://edabit.com/challenge/qNMtrtizgssAQqP2b

*/


class Name{

    constructor(primeiro_nome, segundo_nome){
        this.fname = primeiro_nome.charAt(0).toUpperCase() + primeiro_nome.toLowerCase().substr(1)
        this.lname = segundo_nome.charAt(0).toUpperCase() + segundo_nome.toLowerCase().substr(1)
        this.fullname = this.fname + " " + this.lname
        this.initials = this.fname.charAt(0)+"."+this.lname.charAt(0)
    }

}


let pessoa = new Name("Hugo", "Leonardo")
console.log(pessoa.fname)
console.log(pessoa.lname)
console.log(pessoa.fullname)
console.log(pessoa.initials)

/*
Underscore-Hash Staircase

Create a function that will build a staircase using the underscore _ and hash # symbols. A positive value denotes the staircase's upward direction and downwards for a negative value.
Examples

staircase(3) ➞ "__#\n_##\n###"
__#
_##
###

staircase(7) ➞ "______#\n_____##\n____###\n___####\n__#####\n_######\n#######"
______#
_____##
____###
___####
__#####
_######
#######

staircase(2) ➞ "_#\n##"
_#
##

staircase(-8) ➞ "########\n_#######\n__######\n___#####\n____####\n_____###\n______##\n_______#"
########
_#######
__######
___#####
____####
_____###
______##
_______#

Notes

    All inputs are either positive or negative values.
    The string to be returned is adjoined with the newline character (\n).
    A recursive version of this challenge can be found here.

URL: https://edabit.com/challenge/inecXu7CtXyvNekxu

*/

function staircase(n) {
    saida = ''
    na = Math.abs(n)
    for(let i = 0; i < na; i++){
        
        if (n > 0){
            saida = saida.concat(`${'_'.repeat(na-i-1)}${'#'.repeat(i+1)}\n`)
        }else{
            saida = saida.concat(`${'_'.repeat(i)}${'#'.repeat(na-i)}\n`)
        }
    }
	return saida.substring(0, saida.length -1)
}

console.log(staircase(3))// ➞ "__#\n_##\n###"

console.log(staircase(7))// ➞ "______#\n_____##\n____###\n___####\n__#####\n_######\n#######"

console.log(staircase(2))// ➞ "_#\n##"

console.log(staircase(-8))// ➞ "########\n_#######\n__######\n___#####\n____####\n_____###\n______##\n_______#"

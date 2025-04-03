/*
Longest Consecutive Run
A consecutive-run is a list of adjacent, consecutive integers. This list can be either increasing or decreasing. Create a function that takes an array of numbers and returns the length of the longest consecutive-run.

To illustrate:

longestRun([1, 2, 3, 5, 6, 7, 8, 9]) ➞ 5
// Two consecutive runs: [1, 2, 3] and [5, 6, 7, 8, 9] (longest).
Examples
longestRun([1, 2, 3, 10, 11, 15]) ➞ 3
// Longest consecutive-run: [1, 2, 3].

longestRun([5, 4, 2, 1]) ➞ 2
// Longest consecutive-run: [5, 4] and [2, 1].

longestRun([3, 5, 7, 10, 15]) ➞ 1
// No consecutive runs, so we return 1.
Notes
If there aren't any consecutive runs (there is a gap between each integer), return 1.

URL: https://edabit.com/challenge/J3HA3p3enpxnMJCmd
*/


function longestRun(arr) {
    qtt = 1
    hist = 0
    falha = 0
	arr.sort((a, b) => a - b)
    for (i = 0; i < arr.length - 1; i++){
        if (arr[i] + 1 == arr[i+1]){
            if (falha == 1){
                if (hist <= qtt)
                    hist = qtt
                qtt = 1
                falha = 0
            }
            qtt++
        } else if (arr[i] == arr[i+1]){
            
        }else{
            falha = 1
        }
    }
    return Math.max(hist, qtt)
}


//console.log(longestRun([1, 2, 3, 5, 6, 7, 8, 9]))
console.log(longestRun([1, 2, 3, 10, 11, 15]))
// console.log(longestRun([-7, -6, -5, -4, -3, -2, -1]))
// console.log(longestRun([3, 5, 6, 10, 15]))
// console.log(longestRun([3, 5, 7, 10, 15]))
// console.log(longestRun([5, 4, 3, 2, 1]))
// console.log(longestRun([5, 4, 2, 1]))
// console.log(longestRun([10, 9, 0, 5]))
// console.log(longestRun([1, 2, 3, 2, 1]))
// console.log(longestRun([10, 9, 8, 7, 6, 2, 1]))
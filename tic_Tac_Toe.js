/*

Tic Tac Toe

Given a 3x3 matrix of a completed tic-tac-toe game, create a function that returns whether the game is a win for "X", "O", 
or a "Draw", where "X" and "O" represent themselves on the matrix, and "E" represents an empty spot.
Examples

ticTacToe([
  ["X", "O", "X"],
  ["O", "X",  "O"],
  ["O", "X",  "X"]
]) ➞ "X"

ticTacToe([
  ["O", "O", "O"],
  ["O", "X", "X"],
  ["E", "X", "X"]
]) ➞ "O"

ticTacToe([
  ["X", "X", "O"],
  ["O", "O", "X"],
  ["X", "X", "O"]
]) ➞ "Draw"

Notes

Make sure that if O wins, you return the letter "O" and not the integer 0 (zero) and if it's a draw, make sure you return the 
capitalised word "Draw". If you return "X" or "O", make sure they're capitalised too.

URL: https://edabit.com/challenge/jsukwFKLKJx2qLs5b

*/

function ticTacToe(board) {
  p1 = p2 = p3 = p4 = null

  board.forEach(element => { 
    if (element[0] == element[1] && element[1] == element[2]){
      p1 = element[0]
    }
  })

  if (board[0][0] == board[1][1] && board[1][1] == board[2][2]){
    p2 = board[0][0]
  } else if (board[0][2] == board[1][1] && board[1][1] == board[2][0]){
    p3 = board[0][0]
  }

  for (i = 0; i < 3; i++){
    if (board[0][i] == board[1][i] && board[1][i] == board[2][i]){
      p4 = board[0][i]
    }
  }

  if ([p1, p2, p3, p4].indexOf("X")>=0){
    return "X"
  }else if ([p1, p2, p3, p4].indexOf("O")>=0){
    return "O"
  }else{
    return "Draw"
  }

}

console.log(ticTacToe([
    ["X", "O", "X"],
    ["O", "X",  "O"],
    ["O", "X",  "X"]
  ]))
  
  console.log(ticTacToe([
    ["O", "O", "O"],
    ["O", "X", "X"],
    ["E", "X", "X"]
  ]))
  
  console.log(ticTacToe([
    ["X", "X", "O"],
    ["O", "O", "X"],
    ["X", "X", "O"]
  ]))
// create a helper function 
// helper function make sure the position being check is not next to the boarder
// then change itself to X and check surrounding position to see if it O
// iterate through the board invoke helper function if the  position is O

const solve = (board) => {
    const check = (board, i , j) => {
        if (i < 0|| i > board.length - 2 || j < 0 || j > board[i].length - 2) {
            return false
        }
        
        board[i][j] = "X"
        
        if(board[i - 1][j] === 'O') {
            check(board, i - 1, j)
        }
        if(board[i + 1][j] === 'O') {
            check(board, i + 1, j)
        }
        if(board[i][j - 1] === 'O') {
            check(board, i, j - 1)
        }
        if(board[i][j + 1] === 'O') {
            check(board, i, j + 1)
        }
    }

    for (let i = 0; i < board.length; i += 1) {
        for (let j = 0; j < board[i].length; j += 1) {
            if (board[i][j] === "O") {
               check(board, i , j)
            }
        }
    }
};

let box = [["X","0","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]

// console.log(solve(box))
// console.log(box)



const solved = (board) => {
    var row = board.length
    if (!row) { return }
    var col = board[0].length
  
    for (var i = 0; i < row; i++) {
      dfs(i, 0)
      dfs(i, col - 1)
    }
    for (var j = 1; j < col - 1; j++) {
      dfs(0, j)
      dfs(row - 1, j)
    }
  
    function dfs(x, y) {
      if (
        x < 0 || x >= row || y < 0 || y >= col ||
        board[x][y] === 'X' || board[x][y] === '-'
      ) {
        return
      }
      board[x][y] = '-'
      dfs(x - 1, y)
      dfs(x + 1, y)
      dfs(x, y - 1)
      dfs(x, y + 1)
    }
  
    for (var i = 0; i < row; i++) {
      for (var j = 0; j < col; j++) {
        if (board[i][j] === 'O') {
          board[i][j] = 'X'
        } else if (board[i][j] === '-') {
          board[i][j] = 'O'
        }
      }
    }
  };
const findWords = (board, words) => {
    let newArr = [];

// iterate through the array of words and invoke the helper function on each
// helper function will iterate through the boards to check for the starting letter of word
// once it find the starting letter it will invoke another helper function to check the surroundings
// words that return true from helper function into result array 

const checkSide = (board, word, x, y, pointer) => {
    if(board[x][y] !== word[pointer]) {
        return false
    }
    let newBoard = board.map(x => x.slice())

    if(board[x][y] !== word[pointer - 1]) {
        return false
    }
    if (pointer === word.length - 1){
        return true
        };

    newBoard[x][y] = "-";
    if(x < board.length - 1 && newBoard[x + 1][y] === word[pointer]) {
       return checkSide(newBoard, word, x + 1, y, pointer+= 1)
    }
    if(y > 0 && newBoard[x][y - 1] === word[pointer]) {
        console.log(newBoard[x][y])
        return checkSide(newBoard, word, x, y - 1, pointer+= 1)
    }
    if(x > 0 && newBoard[x - 1][y] === word[pointer]) {
        return checkSide(newBoard, word, x-1, y, pointer+= 1)
    }
    if(y < word.length && newBoard[x][y + 1] === word[pointer]) {
        return checkSide(newBoard, word, x, y + 1, pointer+= 1)
    }
    
    return false
}

const checkBoard = (board, word) => {
    let first = word[0]
    for (let i = 0; i < board.length; i += 1) {
        for (let j = 0; j < board[i].length; j += 1) {
            if(board[i][j] === first) {
                if(checkSide(board, word, i, j, 1) === true) {
                    newArr.push(word)
                    break;
                }
            }
        }
    }
}

  for (let word in words) {
      checkBoard(board, words[word])
  }
  return newArr
}


let board = [
    ['o','a','a','n'],
    ['e','t','a','e'],
    ['i','h','k','r'],
    ['i','f','l','v']
  ];
let words = ["oath","pea","eat","rain", "tae"];

// console.log(findWords([["a"]], ["ab"]))
// console.log(findWords([["a", "a"]], ["aa"]))
// console.log(findWords(board, words))


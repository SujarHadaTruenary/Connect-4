export const winCondition = (row, column, ch,board)=> {

  try {
    if (board[row + 1][column] === ch) {
        if (board[row + 2][column] === ch) {
            if (board[row + 3][column] === ch) {
                return true;
            }
        }
    }
} catch (e) { console.log(e) }

try {
    if (board[row + 1][column + 1] === ch) {
        if (board[row + 2][column + 2] === ch) {
            if (board[row + 3][column + 3] === ch) {
                return true;
            }
        }
    }
} catch (e) { console.log(e) }

try {
    if (board[row + 1][column - 1] === ch) {
        if (board[row + 2][column - 2] === ch) {
            if (board[row + 3][column - 3] === ch) {
                return true;
            }
        }
    }
} catch (e) { console.log(e) }

try {
    if (board[row][column + 1] === ch) {
        if (board[row][column + 2] === ch) {
            if (board[row][column + 3] === ch) {
                return true;
            }
        }
    }
} catch (e) { console.log(e) }

try {
    if (board[row][column - 1] === ch) {
        if (board[row][column - 2] === ch) {
            if (board[row][column - 3] === ch) {
                return true;
            }
        }
    }
} catch (e) { console.log(e) }

try {
    if (board[row - 1][column - 1] === ch) {
        if (board[row - 2][column - 2] === ch) {
            if (board[row - 3][column - 3] === ch) {
                return true;
            }
        }
    }
} catch (e) { console.log(e) }

try {
    if (board[row - 1][column + 1] === ch) {
        if (board[row - 2][column + 2] === ch) {
            if (board[row - 3][column + 3] === ch) {
                return true;
            }
        }
    }
} catch (e) { console.log(e) }


}
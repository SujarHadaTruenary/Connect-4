import React, { useState, useEffect } from "react";
import { Slot } from "./Slot";
import { winCondition } from "../checkfiles/checker";


export const Board = () => {
    const [board, setBoard] = useState([
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '']
    ]);

    const [currPlayer, setCurrPlayer] = useState('X');
    const [oppPlayer, setOppPlayer] = useState('O');
    const [gameOver, setGameOver] = useState(false);


    const checkWin = (row, column, ch) => {
       console.log(winCondition(row,column,ch,board))
       return winCondition(row,column,ch,board)
    };

    const updateBoard = (row, column, ch) => {
        setBoard(prev => {
            const boardCopy = [...prev];
            boardCopy[row][column] = ch;
            return boardCopy;
        });
        return checkWin(row, column, ch);
    };


    const handleClick = (e) => {
        const column = e.target.getAttribute('x');
        let row = board.findIndex((rowArr, index) => {
            return (rowArr[column] !== '' || (index === board.length - 1));
        });
        if (row !== (board.length - 1)) row -= 1;
        if (board[row][column] !== '') row -= 1;


         
        setGameOver(updateBoard(row, column, currPlayer));


        if (!gameOver) {
            const currPlayerCopy = currPlayer;
            setCurrPlayer(oppPlayer);
            setOppPlayer(currPlayerCopy);
        }

    };


    return (
        <>
            {gameOver && (
                <h1>Game Over! {oppPlayer == 'X' ? 'Santa' : 'Goblin'} Wins!</h1>
            )}
            <h2 id='playerDisplay'>{currPlayer === 'X' ? 'Santa' : 'Goblin'} Move</h2>
            <div id='board'
                onClick={gameOver ? null : handleClick}
            >

                {board.map((row, i) => {
                    return row.map((ch, j) => <Slot ch={ch} y={i} x={j} />);
                })}
            </div>
        </>
    );
};
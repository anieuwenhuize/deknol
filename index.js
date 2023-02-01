#!/c/dev/deknol node
import { squares } from './engine/board.js'

let numOfSquares = squares.count();

console.log('Welcome to De Knol.');
console.log(`A chessboard has ${numOfSquares} squares.`);
#!/c/dev/deknol node
import { squares } from './engine/board.js'

let numOfSquares = squares.count();

console.log('Welcome to De Knol.');
console.log(`I know a chessboard has ${numOfSquares} squares.`);
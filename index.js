#!/c/dev/deknol node
import { squares, newGame } from './engine/board.js'
import * as view from './cli/view.js'


console.log('Welcome to De Knol.');
newGame();

view.show(squares)
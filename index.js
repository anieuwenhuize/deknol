#!/c/dev/deknol node
import { squares, newGame } from './engine/board.js'
import * as view from './cli/view.js'

import * as readline from 'readline-promise';


console.log('Welcome to De Knol.');
console.log('The chess engine with four legs solid on the ground.');
newGame();

view.intro()

view.show(squares)
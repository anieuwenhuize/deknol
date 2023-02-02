#!/c/dev/deknol node
import { squares, newGame } from './engine/chessgameboard.js'
import * as view from './cli/view.js'

import readline from 'readline-promise';
const rl = readline.default;

const rlp = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true
});

newGame();

view.intro()

view.show(squares)

let bar = null;

rlp.questionAsync('White to move\n')
    .then(answer => {
        view.clr()
        view.show(squares)
        rlp.close()
    });


#!/c/dev/deknol node
import * as engine from './engine/chessgameboard.js'
import * as view from './cli/view.js'

import readline from 'readline-promise';
const rl = readline.default;

const rlp = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true
});

engine.newGame();

view.intro()

view.show(engine.squares)

rlp.questionAsync('White to move\n')
    .then(answer => {
        view.clr()
        engine.move(answer)
        view.show(engine.squares)
        rlp.close()
    });


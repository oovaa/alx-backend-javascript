const readline = require('readline');

/**
 * Readline interface for handling input and output streams.
 * @type {readline.Interface}
 */
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Welcome to Holberton School, what is your name?\n', (answer) => {
  console.log(`Your name is: ${answer}`);
  rl.close();
});

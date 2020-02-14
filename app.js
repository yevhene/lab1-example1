import readlineSync from 'readline-sync';

const name = readlineSync.question('Say your name: ');

console.log(`Hello ${name}!`);

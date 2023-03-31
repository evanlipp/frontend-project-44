import gameEngine from '../index.js';
import getRandomInt from '../get-random-int.js';

// even game defining

const isEven = (num) => num % 2 === 0;

const evenGameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenGameCore = () => {
  const num = getRandomInt(100);
  const validAnswer = isEven(num) ? 'yes' : 'no';
  const question = `${num}`;
  return [question, validAnswer];
};

const evenGame = () => gameEngine(evenGameTask, evenGameCore);

export default evenGame;

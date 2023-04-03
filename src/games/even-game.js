import gameEngine from '../index.js';
import getRandomInt from '../get-random-int.js';

const isEven = (num) => num % 2 === 0;

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameCore = () => {
  const num = getRandomInt(100);
  const validAnswer = isEven(num) ? 'yes' : 'no';
  const question = num;
  return [question, validAnswer];
};

export default () => gameEngine(gameTask, gameCore);

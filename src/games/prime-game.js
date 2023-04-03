import gameEngine from '../index.js';
import getRandomInt from '../get-random-int.js';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const gameCore = () => {
  const num = getRandomInt(100);
  const validAnswer = isPrime(num) ? 'yes' : 'no';
  const question = num;
  return [question, validAnswer];
};

export default () => gameEngine(gameTask, gameCore);

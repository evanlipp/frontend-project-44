import gameEngine from '../index.js';
import getRandomInt from '../get-random-int.js';

// gcd game defining

const gameTask = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => Math.abs(!num2 ? num1 : gcd(num2, num1 % num2));

const gameCore = () => {
  const num1 = getRandomInt(10);
  const num2 = getRandomInt(10);
  const answer = gcd(num1, num2);
  const validAnswer = `${answer}`;
  const question = `${num1} ${num2}`;
  return [question, validAnswer];
};

const gcdGame = () => gameEngine(gameTask, gameCore);

export default gcdGame;

import gameEngine from '../index.js';
import getRandomInt from '../get-random-int.js';

const gameTask = 'What number is missing in the progression?';

const createArr = () => {
  const start = getRandomInt(100);
  const step = getRandomInt(2) + 2;
  const arr = [start];
  for (let i = 1; i < 10; i += 1) {
    arr[i] = arr[i - 1] + step;
  }
  return arr;
};

const gameCore = () => {
  const progression = createArr()
  const missedNum = getRandomInt(9);
  const validAnswer = `${progression[missedNum]}`;
  progression[missedNum] = '..';
  const question = `${progression}`;
  return [question, validAnswer];
};

const progressionGame = () => gameEngine(gameTask, gameCore);

export default progressionGame;

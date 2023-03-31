import gameEngine from '../index.js';
import getRandomInt from '../get-random-int.js';

// calc game defining

const gameTask = 'What is the result of the expression?';

const operators = ['+', '-', '*'];
const getCurrentOperator = () => operators[getRandomInt(2)];

const calc = (firstOperand, secondOperand, operator) => {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    default:
      return null;
  }
};

const gameCore = () => {
  const firstOperand = getRandomInt(10);
  const secondOperand = getRandomInt(10);
  const operator = getCurrentOperator();

  const question = `${firstOperand} ${operator} ${secondOperand}`;
  const answer = calc(firstOperand, secondOperand, operator);
  const validAnswer = answer.toString();

  return [question, validAnswer];
};

const calcGame = () => gameEngine(gameTask, gameCore);

export default calcGame;

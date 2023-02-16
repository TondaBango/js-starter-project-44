import run from '../index.js';
import { getRandomNumber, getRandomIndex } from '../utils.js';

const description = 'What is the result of the expression?';
const minValue = 0;
const maxValue = 100;
const operators = ['+', '-', '*'];

const calculate = (x, y, operator) => {
  switch (operator) {
    case '+': return x + y;
    case '-': return x - y;
    case '*': return x * y;
    default: throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const getRound = () => {
  const number1 = getRandomNumber(minValue, maxValue);
  const number2 = getRandomNumber(minValue, maxValue);
  const operator = operators[getRandomIndex(operators)];
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = String(calculate(number1, number2, operator));
  return [question, correctAnswer];
};

const runCalc = () => {
  run(getRound, description);
};

export default runCalc;

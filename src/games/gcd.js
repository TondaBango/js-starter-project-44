import run from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';
const minValue = 1;
const maxValue = 100;

const getGcd = (x, y) => {
  if (y !== 0) {
    const num = x % y;
    return getGcd(y, num);
  } return x;
};

const getRound = () => {
  const number1 = getRandomNumber(minValue, maxValue);
  const number2 = getRandomNumber(minValue, maxValue);
  const question = `${number1} ${number2}`;
  const correctAnswer = String(getGcd(number1, number2));
  return [question, correctAnswer];
};

const runGcd = () => {
  run(getRound, description);
};

export default runGcd;

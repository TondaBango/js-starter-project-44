import run from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minValue = 0;
const maxValue = 100;

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  const divisorLimit = Math.ceil(Math.sqrt(number));
  for (let i = 2; i <= divisorLimit; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getRound = () => {
  const number = getRandomNumber(minValue, maxValue);
  const question = String(number);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runPrime = () => {
  run(getRound, description);
};

export default runPrime;
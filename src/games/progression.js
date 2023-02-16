import run from '../index.js';
import { getRandomNumber, getRandomIndex } from '../utils.js';

const description = 'What number is missing in the progression?';
const minLength = 5;
const maxLength = 10;
const minStart = 0;
const maxStart = 100;
const minInterval = 1;
const maxInterval = 50;

const generateProgression = (length, start, interval) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + interval * i);
  }
  return progression;
};

const getRound = () => {
  const length = getRandomNumber(minLength, maxLength);
  const start = getRandomNumber(minStart, maxStart);
  const interval = getRandomNumber(minInterval, maxInterval);
  const progression = generateProgression(length, start, interval);
  const replacementIndex = getRandomIndex(progression);
  const correctAnswer = String(progression[replacementIndex]);
  progression[replacementIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const runProgression = () => {
  run(getRound, description);
};

export default runProgression;

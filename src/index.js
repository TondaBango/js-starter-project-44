import readlineSync from 'readline-sync';
//Ввод кол-ва раундов
const roundsCount = 3;
//Приветсвие игрока
const run = (getRound, description) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = getRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
//Проверка на правильность ответа
    if (userAnswer !== correctAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default run;

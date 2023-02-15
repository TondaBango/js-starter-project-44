import * as readlineSync from "readline-sync";

// Объявление глобальных переменных
let userName;
let sign;
let firstRandomNumber;
let secondRandomNumber;
let resultOfCorrectAnswer;
let isGameOver;
let hideOfProgressionNumber;

// Функция приветствия юзера
const greetings = () => {
  userName = readlineSync.question(
    "Welcome to the Brain Games! \nMay I have your name? "
  );
  console.log(`${"Hello,"} ${userName}${"!"}`);
};

// Функкция определения имени юзера
const getUsersName = () => userName;

// Функция описания правил игры
const rulesOfGame = (nameGame) => {
  switch (nameGame) {
    case "brain-even":
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      break;
      
    case "brain-calc":
      console.log("What is the result of the expression?");
      break;

      case "brain-gcd":
        console.log("Find the greatest common divisor of given numbers.");
        break;

        case "brain-progression":
      console.log("What number is missing in the progression?");
      break;

    default:
      console.log("Sorry, something wrong");
      break;
  }
};

// Функция вывода рандомного числа
function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
// Функция вывода рандомного математического знака
const getRandomMathSign = () => {
  const arr = ["+", "-", "*"];
  const i = Math.floor(Math.random() * arr.length);
  const operator = arr[i];
  return operator;
};


// Функция, задающая вопрос юзеру

const question = (nameGame) => {
  firstRandomNumber = getRandom(2, 100);
  secondRandomNumber = getRandom(1, 100);
  sign = getRandomMathSign();
  let questionResult;
  const stepForProgression = getRandom(2, 10);
  const hideOfIndexNumber = getRandom(1, 10);

  //Дополняющая функция задающая вопрос юзеру в игре brain-progression 
  const progression = (firstRandomNumber, stepForProgression) => {
    let arr = [];
    const endProgression = firstRandomNumber + stepForProgression * 10;
    for (
      let i = firstRandomNumber;
      i < endProgression;
      i += stepForProgression
    ) {
      arr.push(i);
    }
    hideOfProgressionNumber = arr.splice(hideOfIndexNumber, 1, "..");
    arr = arr.join(" ");
    return arr;
  };

  
  // Сценарии вывода вопроса юзеру в зависимости от названия игры
  switch (nameGame) {
    case "brain-even":
      questionResult = console.log(`${"Question:"} ${firstRandomNumber}`);
      break;

    case "brain-calc":
      questionResult = console.log(
        `${"Question:"} ${firstRandomNumber} ${sign} ${secondRandomNumber}`
      );
      break;

      case "brain-gcd":
      questionResult = console.log(
        `${"Question:"} ${firstRandomNumber} ${secondRandomNumber}`
      );
      break;

      case "brain-progression":
        questionResult = console.log(
          `${"Question:"} ${progression(firstRandomNumber, stepForProgression)}`
        );
        break;

    default:
      console.log("Sorry, something wrong");
      break;
  }
  return questionResult;
};

// Функция получения ответа от пользователя
const getUsersAnswer = () => readlineSync.question("Your answer: ");

// Функция определения правильного ответа в зависимости от названия игры
const correctAnswer = (nameGame) => {
  switch (nameGame) {
    case "brain-even":
      if (firstRandomNumber % 2 === 0) {
        resultOfCorrectAnswer = "yes";
      } else if (firstRandomNumber % 2 !== 0) {
        resultOfCorrectAnswer = "no";
      }
      break;

    case "brain-calc":
      if (sign === "+") {
        resultOfCorrectAnswer = firstRandomNumber + secondRandomNumber;
      } else if (sign === "-") {
        resultOfCorrectAnswer = firstRandomNumber - secondRandomNumber;
      } else {
        resultOfCorrectAnswer = firstRandomNumber * secondRandomNumber;
      }
      break;

      case "brain-gcd": {
        const GCD = (firstRandomNumber, secondRandomNumber) => {
          if (!secondRandomNumber) {
            return firstRandomNumber;
          }
          return GCD(secondRandomNumber, firstRandomNumber % secondRandomNumber);
        };
        resultOfCorrectAnswer = GCD(firstRandomNumber, secondRandomNumber);
        }
        break;

        case "brain-progression":
      resultOfCorrectAnswer = hideOfProgressionNumber;
      break;

      default:
      console.log("Sorry, something wrong");
      break;
  }
  return resultOfCorrectAnswer;
};

// Функция с выводом текста правильного ответа
const textOfcorrectAnswer = () => {
  console.log("Correct!");
};

// Функция сравнения правильного результата с результатом юзера
const compareOfAnswer = (nameGame) => {
  const userAnswer = getUsersAnswer();
  const answer = correctAnswer(nameGame);
  if (answer == userAnswer) {
    textOfcorrectAnswer();
  } else {
    console.log(
      `${userAnswer} ${"is wrong answer ;(. Correct answer was"} ${answer}.\n${"Let's try again,"} ${getUsersName()}!`
    );
    isGameOver = "true";
  }
};
// Функция запуска игры со счетчиком (параметр название игры)
const runGameWithCounter = (nameGame) => {
    greetings();
    rulesOfGame(nameGame);
    const count = 3;
    let i = 0;
    while (i < count && isGameOver !== "true") {
      question(nameGame);
      correctAnswer(nameGame);
      compareOfAnswer(nameGame);
      i += 1;
    }
    if (i === 3 && isGameOver !== "true") {
      console.log(`${"Congratulations,"} ${getUsersName()}!`);
    } else {
      return;
    }
};


export default runGameWithCounter;

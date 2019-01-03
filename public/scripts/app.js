const game = {
  correctAnswer: 0,
  wrongAnswer: 0,
  hasGameStarted: false,
  contentContainer: document.getElementById("content"),
  dataSource: triviaQuestions.data,
  questionNum: 0,
  userDifficulty: "",
  difficulty: {
    easy: {
      questions: 10
    },
    medium: {
      questions: 10
    },
    hard: {
      questions: 10
    }
  },
  winner: [
    {
      src: "../public/assets/bart-simpson.png",
      content:
        'Labeled as an "underachiever" by authority figures, Bart rides an academic roller coaster, his grades, running the Loop-the-Loop from "F" to "D-" and back again. But he can be ingenious when the chips are down—as long as his ingenuity is not applied to anything school-related.'
    },
    {
      src: "../public/assets/krusty.png",
      content: "you got krusty"
    },
    {
      src: "../public/assets/doctor-nick.png",
      content: "you got doctor nick"
    },
    {
      src: "../public/assets/lisa-simpson.png",
      content: "you got lisa simpson"
    },
    {
      src: "../public/assets/professor-frink.png",
      content: "you got professor frink"
    }
  ]
};

game.getDataFromDataSource = ({ dataSource }) => {
  return dataSource;
};

// Get question.data by difficulty selected
game.filterByDifficulty = ({ userDifficulty }) => {
  const rawQuestions = game.getDataFromDataSource(game);
  const filteredQuestions = rawQuestions.filter(({ difficulty }) => {
    return difficulty === userDifficulty;
  });
  return filteredQuestions;
};

game.getRandomQuestions = ({ filteredQuestions, n }) => {
  const shuffled = filteredQuestions.sort(() => 0.5 - Math.random());
  return (selected = shuffled.slice(0, n));
};

game.getGameQuestions = () => {
  const filteredQuestions = game.filterByDifficulty(game);
  const questionsForRound = game.getRandomQuestions({
    filteredQuestions,
    n: game.difficulty[game.userDifficulty].questions
  });
  return [questionsForRound];
};

// EVENT LISTENERS
game.handleClick = () => {
  // REGISTER LISTENER FOR START GAME BTN CLICKS
  const startGameBtn = document.getElementById("start-game");
  const questionForm = document.getElementById("question__form");
  // Watch for start button to be clicked and transition to question screen
  startGameBtn.addEventListener(
    "click",
    function(event) {
      event.preventDefault();
      game.startGame();
    },
    { once: true }
  );
  // Add event listener at top level so submit button can be caught. SHOULD BE REFACTORED
  game.contentContainer.addEventListener(
    "click",
    function(event) {
      // If the clicked element doesn't have the right selector, bail
      if (!event.target.matches(".questions__submitBtn")) return;
      event.preventDefault();
      console.log("clicked question submit button");
    },
    false
  );
};

// TRANSITION SCREEN TO QUESTION LIST
game.startGame = () => {
  const startGameForm = document.getElementById("start__form");
  game.userDifficulty = startGameForm.querySelector(
    ".start__input:checked"
  ).value;
  // console.log(game.userDifficulty);
  game.showQuestionScreen();
};

// RENDER QUESTION SCREEN
game.showQuestionScreen = () => {
  const [questionsForRound] = game.getGameQuestions();

  console.log(questionsForRound);
  const { question, options, answer } = questionsForRound[game.questionNum];
  function renderAnswers(options) {
    return `<form action="#" id="start-game-form" class="question-answer-form">
    ${options.forEach(
      (option) => `
        <input type="radio" name="answer-options" class="question__answerInput visuallyhidden animated fadeIn" id="${option}" value="${option}" required />
        <label class="question__answerOptionLabel animated fadeIn btn" for=${option}>${option}</label>
    `
    )}
    `;
  }

  const questionMarkup = `
  <div className="question__content">
    <p class="question__details animated fadeIn">${question}</p>
    <p class="question__answerTitle animated fadeIn">${`Pick your answer`}</p>
    <form id="question__form" class="question__form">
      <div class="select-answer">
        </div>
        <input type="submit" name="question-submit" id="question-submit" class="questions__submitBtn btn" value="Submit" />
        <label for="question-submit" class="animated fadeIn visuallyhidden">Submit</label>
  </form>
  </div>`;
  game.contentContainer.innerHTML = questionMarkup;
};

// RENDER START SCREEN
game.showStartScreen = ({ contentContainer }) => {
  const startContent = {
    title: `A perfectly cromulent game`,
    details: `Welcome to The Simpsons Trivia Game! Your mind will be embiggened
              and delighted while you play this game.Each level has 10
              randomized questions to answer, once you complete this quiz you
              will receive your score.It is entirely unpossible to win, so
              choose your difficulty level carefully!`,
    selectDifficultyTitle: `Select Difficulty Level:`,
    difficultyLevels: ["easy", "medium", "hard"],
    startBtnTitle: `Start Game`
  };

  function renderDiffLevels(difficultyLevels) {
    return `<form action="#" id="start-game-form" class="select-difficulty-form">
    ${difficultyLevels.map(
      (difficulty) => `
        <input type="radio" name="diff-options" class="start__input btn" id=${difficulty} value=${difficulty} required />
        <label class="start__difficultyLabel btn" for=${difficulty}>${difficulty}</label>    
    `
    )}            
    `;
  }
  const startMarkup = `
          <div className="start" id="start">
            <h2 class="fadeInLeft delay-1s animated">${startContent.title}</h2>
            <p class="start__contentGameDetails">${startContent.details}</p>
            <h3 class="start__difficultyHeading">${
              startContent.selectDifficultyTitle
            }</h3>
                    <form id="start__form">
                      <div class="start__selectDifficulty">
                        ${renderDiffLevels(startContent.difficultyLevels)}
                      </div>
                      <div class="start__gameBtnContainer">
                        <label for="start-game" class="visuallyhidden start__startGameLabel">${
                          startContent.startBtnTitle
                        }</label>
                        <input type="submit" name="start-game" id="start-game" class="start__gameBtn btn animated" value="${
                          startContent.startBtnTitle
                        }" />
                      </div>
                    </form>
        </div>`;
  // const contentContainer = document.getElementById("content");
  // Add HTML markup to DOM
  contentContainer.innerHTML = startMarkup;
};

// Check for winning answer + add to game.Correct/Wrong object
game.checkAnswer = ({ selectedQuestion, correctAnswer, wrongAnswer }) => {
  selectedQuestion = $(".question-input:checked").val();
  if (selectedQuestion === selectedQuestion.answer) {
    game.correctAnswer += correctAnswer;
  } else {
    game.wrongAnswer += wrongAnswer;
  }
};

// game.calcWinCharacter = ({ winner }) => {
//   if (score > 10) {
//     return winner[0];
//   } else if (score < 31 && score > 50) {
//     return winner[1];
//   } else if (score < 51 && score > 70) {
//     return winner[2];
//   } else if (score < 71 && score > 90) {
//     return winner[3];
//   } else if (score < 91 && score > 100) {
//     return winner[4];
//   }
// };

// game.clearDOM = (element) => {
//   document.getElementById(element).innerHTML = "";
// };

// Credit for this function goes to http://bdadam.com/blog/plain-javascript-event-delegation.html
function on(elSelector, eventName, selector, fn) {
  let element = document.querySelector(elSelector);

  element.addEventListener(eventName, function(event) {
    let possibleTargets = element.querySelectorAll(selector);
    let target = event.target;

    for (let i = 0, l = possibleTargets.length; i < l; i++) {
      let el = target;
      let p = possibleTargets[i];

      while (el && el !== element) {
        if (el === p) {
          return fn.call(p, event);
        }

        el = el.parentNode;
      }
    }
  });
}

// Reset game wire up to button on page
game.resetGame = () => {};

// INIT
game.init = () => {
  game.showStartScreen(game);
  game.handleClick();
};

// DOCUMENT READY
document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM fully loaded and parsed");
  game.init();
});

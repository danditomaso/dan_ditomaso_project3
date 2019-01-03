const game = {
  correctAnswer: 0,
  wrongAnswer: 0,
  hasGameStarted: false,
  contentContainer: document.getElementById("content"),
  dataSource: triviaQuestions.data,
  filteredQuestions: [],
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
  return { questionsForRound };
};

game.handleClick = () => {
  const startGameForm = document.getElementById("start__formContainer");
  const startGameContainer = document.getElementById("start");
  startGameForm.addEventListener(
    "click",
    function(event) {
      const { target } = event;
      // On start screen set user selected difficulty to global object
      if (target.matches("#start-game")) {
        event.preventDefault();
        game.userDifficulty = document.querySelector(
          ".start__difficultyInput:checked"
        ).value;
        console.log(`difficulty has been set to ${game.userDifficulty}`);
        startGameContainer.innerHTML = "";
        game.showQuestionScreen(game);
      }
      // Toggle selected class on difficulty selector
      else if (event.target.matches(".start__difficultyInput")) {
        // Find all elements with selected2 class and remove in preperation to add class to new element
        startGameForm
          .querySelectorAll(".selected2")
          .forEach((elem) => elem.classList.remove("selected2"));
        const selectedElem = document.querySelector(
          ".start__difficultyInput:checked"
        );
        selectedElem.labels[0].classList.add("selected2");
      }
    },
    false
  );
};

// game.displayQuestion = () => {
//   const { question, options, answer } = game.getGameQuestions();
//   console.log(question[0], options, answer);
//   let num = 0;
//   if (num !== questions.length) {
//     $(".question-container-title").append(`Question #${num++}`);
//     $(".question-container-text").append(`${question}`);
//     options.forEach((option, index) => {
//       const optionHTML = `<form><label class="question-container-item animated fadeIn" for="quiz-options">${option}</label>
//         <input type="radio" name="quiz-options" class="question-input visuallyhidden" value="${index}" id="quiz-options"></form>`;
//       $(".question-container-answertext").append(optionHTML);
//     });
//     // } else {
//     //   game.displayWinScreen();
//     // }
//   }
// };

game.showQuestionScreen = ({ contentContainer }) => {
  const { questionsForRound: questionContent } = game.getGameQuestions();
  console.log(questionContent);
  // questionContent = {
  //   submitBtnTitle: "Submit",
  //   optionTitle: "Pick your answer"
  // };
  for (let i = 0; i < questionContent.length; i++) {
    // console.log(questionContent[i]);
    const { question, options, answer } = questionContent[i];
    console.log(question, options, answer);
    function renderAnswers(options) {
      return `<form action="#" id="start-game-form" class="question-answer-form">
    ${options.map(
      (option) => `
        <input type="radio" name="answer-options" class="question__answerOptionLabel visuallyhidden" id=${option} value=${option} required />
        <label class="question__answerOptionLabel btn" for=${option}>${option}</label>
    `
    )}
    `;
    }
  }
  const questionMarkup = `
  <div className="question-content">
    <p class="question-details"></p>
    <form>
      <div class="select-answer">
        // ${renderAnswers(options)}
        </div>
      <div class="question-container">
        <label for="question-submit-btn animated fadeIn" class="visuallyhidden">${
          questionContent.submitBtnTitle
        }</label>
        <input type="submit" name="question-submit" id="question-submit-btn" class="questions__submitBtn btn animated" value="${
          questionContent.submitBtnTitle
        }" />
      </div>
  </form>
  </div>`;
  console.log(questionMarkup);
  contentContainer.innerHTML = questionMarkup;
};

game.showStartScreen = ({ contentContainer }) => {
  const startContent = {
    title: "A perfectly cromulent game",
    details: `Welcome to The Simpsons Trivia Game! Your mind will be embiggened
              and delighted while you play this game.Each level has 10
              randomized questions to answer, once you complete this quiz you
              will receive your score.It is entirely unpossible to win, so
              choose your difficulty level carefully!`,
    selectDifficultyTitle: "Select Difficulty Level:",
    difficultyLevels: ["easy", "medium", "hard"],
    startBtnTitle: "Start Game"
  };

  function renderDiffLevels(difficultyLevels) {
    return `<form action="#" id="start-game-form" class="select-difficulty-form">
    ${difficultyLevels.map(
      (difficulty) => `
        <input type="radio" name="diff-options" class="start__difficultyInput visuallyhidden" id=${difficulty} value=${difficulty} required />
        <label class="start__difficultyItem btn" for=${difficulty}>${difficulty}</label>    
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
                    <form id="start__formContainer">
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

// Reset game wire up to button on page
game.reset = () => {};

game.init = () => {
  game.showStartScreen(game);
  game.handleClick();
};

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");
  $("body").fadeIn(1000);
  game.init();
});

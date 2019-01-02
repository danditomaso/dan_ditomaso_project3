const game = {
  correctAnswer: 0,
  wrongAnswer: 0,
  hasGameStarted: false,

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
  //   game.displayQuestion(game);
};

game.displayQuestions = () => {
  const { question, options, answer } = game.getGameQuestions();
  console.log(question, options, answer);
  let num = 0;
  if (num !== questions.length) {
    $(".question-container-title").append(`Question #${num++}`);
    $(".question-container-text").append(`${question}`);
    options.forEach((option, index) => {
      const optionHTML = `<form><label class="question-container-item animated fadeIn" for="quiz-options">${option}</label>
        <input type="radio" name="quiz-options" class="question-input visuallyhidden" value="${index}" id="quiz-options"></form>`;
      $(".question-container-answertext").append(optionHTML);
    });
    // } else {
    //   game.displayWinScreen();
    // }
  }
};

game.handleClick = () => {
  game.showStartScreen();
  const startGameForm = document.getElementById("start-game-form");
  const startGameContainer = document.getElementById("start-game-container");
  startGameForm.addEventListener(
    "click",
    function(event) {
      const { target } = event;
      // On start screen set user selected difficulty to global object
      if (target.matches("#start-game-btn")) {
        event.preventDefault();
        game.userDifficulty = document.querySelector(
          ".select-difficulty-input:checked"
        ).value;
        console.log(`difficulty has been set to ${game.userDifficulty}`);
        startGameForm.parentNode.removeChild(startGameContainer);
      }
      // Toggle selected class on difficulty selector
      else if (target.matches(".select-difficulty-input")) {
        // Find all elements with selected2 class and remove in preperation to add class to new element
        startGameForm
          .querySelectorAll(".selected2")
          .forEach((elem) => elem.classList.remove("selected2"));
        const selectedElem = document.querySelector(
          ".select-difficulty-input:checked"
        );
        selectedElem.labels[0].classList.add("selected2");
      }
    },
    false
  );
};

game.showStartScreen = () => {
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
        <input type="radio" name="diff-options" class="select-difficulty-input visuallyhidden" id=${difficulty} value=${difficulty} required />
        <label class="select-difficulty-item" for=${difficulty}>${difficulty}</label>    
    `
    )}            
    `;
  }
  const startMarkup = `<h2 class="fadeInLeft delay-1s animated">${
    game.title
  }</h2>
            <p class="start-game-details">${startContent.details}</p>
            <h3 class="select-difficulty-heading">${
              startContent.selectDifficultyTitle
            }</h3>
            <div class="select-difficulty">
              ${renderDiffLevels(startContent.difficultyLevels)}
              </div>
            <div class="start-game-btn-container">
              <label for="start-game-btn" class="visuallyhidden">${
                startContent.startBtnTitle
              }</label>
              <input type="submit" name="start-game" id="start-game-btn" class="start-game btn animated" value="${
                startContent.startBtnTitle
              }" />
            </div>
            </form>`;
  const contentContainer = document.getElementById("content");
  contentContainer.innerHTML = startMarkup;
};

game.showQuestionScreen = () => {
  // const
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

// Once user has gone thorugh all questions, show which simpsons character they relate to most based on their score
game.displayWinScreen = ({ correctAnswer, wrongAnswer }) => {
  $(game.questionContainer)
    .addClass("fadeOutDown fast animated")
    .hide();
  $(game.winContainer).addClass("fadeInLeft fast animated");
  $(game.winContainer).css("display", "grid");
  $(".win-container-score-num").append(
    `<h3>${correctAnswer} Out Of ${
      game.difficulty[game.userDifficulty].questions
    }</h3>`
  );
  const score = (correctAnswer / wrongAnswer) * 10;
  const character = game.calcWinCharacter(game);
  $(".win-image").attr("src", character.src);
  $(".win-container-text-wrapper").append(character.content);
};

game.calcWinCharacter = ({ winner }) => {
  if (score > 10) {
    return winner[0];
  } else if (score < 31 && score > 50) {
    return winner[1];
  } else if (score < 51 && score > 70) {
    return winner[2];
  } else if (score < 71 && score > 90) {
    return winner[3];
  } else if (score < 91 && score > 100) {
    return winner[4];
  }
};

// Reset game wire up to button on page
game.reset = () => {
  $(".question-container-title").empty();
  $(".question-container-text").empty();
  $(".question-container-answertext").empty();
};

game.init = () => {
  game.handleClick();
  // game.displayQuestions();
};

$(function() {
  $("body").fadeIn(1000);
  game.init();
});

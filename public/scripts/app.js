const game = {
    correctAnswer: 10,
    wrongAnswer: 4,
    questionNum: 1,
    questionContainer: $('.question-container'),
    winContainer: $('.win-container'),
    quizSubmitBtn: $('input[type=submit]'),
    startGameBtn: $('a.start-game'),
    score: $('.score'),
    dataSource: triviaQuestions.data,
    selectedDifficulty: 'medium',
    filteredQuestions: [],
    difficulty: {
        easy: {
            questions: 20
        },
        medium: {
            questions: 20
        },
        hard: {
            questions: 30
        },
    },
    winner: [
        {
            score: 10,
            src: '../public/assets/bart-simpson.png',
            content: 'Labeled as an "underachiever" by authority figures, Bart rides an academic roller coaster, his grades, running the Loop-the-Loop from "F" to "D-" and back again. But he can be ingenious when the chips are down—as long as his ingenuity is not applied to anything school-related.'
        },
        {
            score: 30,
            src: '../public/assets/krusty.png',

        },
        {
            score: 50,
            src: '../public/assets/doctor-nick.png',
        },
        {
            score: '70',
            src: '../public/assets/lisa-simpson.png',
        },
        {

            score: '90',
            src: '../public/assets/professor-frink.png',
        }
    ]
};

// Get random question.data
game.getRandom = (array) => {
    const random = Math.floor(Math.random() * array.length);
    return {
        item: array[random],
    };
}

// Get piece of question.data array based on difficulty selected
game.filterDataOnDifficulty = (array) => {
    const questionsbyDifficulty = array.filter((item) => {
        return item.difficulty === game.selectedDifficulty;
    })
    game.selectQuestions(questionsbyDifficulty);
}

game.selectQuestions = (array) => {
    for (let i = 0; i < game.difficulty[game.selectedDifficulty].questions; i += 1) {
        game.filteredQuestions.push(array[i])
    }
    game.displayQuestion();
}

game.displayQuestion = () => {

    if (game.filteredQuestions.length !== 0) {
        const quizQuestions = game.getRandom(game.filteredQuestions);
        console.log(quizQuestions)
        const { question, options } = quizQuestions.item;
        // TODO Make HTML that is appended easier to read, using several vars that append to one another
        game.questionContainer.append(`<h2 class="question-container-title flex-column">Question #${game.questionNum++}</h2><p>${question}</p>
        <p class="question-container-answertext">Choose your answer:</p>`)
        options.forEach((item, index) => {
            const optionHTML = (`<label class="question-container-item animated fadeIn" for="${item}">${item}</label>
        <input type="radio" name="quiz-options" class="question-input visuallyhidden" id="${item}" value="${index}" required>
        `)
            game.questionContainer.append(optionHTML)
        })
        game.questionContainer.append(`<input type="submit" class="btn" value="Submit" placeholder="Go">`);
        game.filteredQuestions.pop();
        console.log('filtered item popped off array')
    }
    else {
        game.displayWinScreen();
    }
}

// Add Event Listener for answer clicks
game.eventListeners = function () {
    game.questionContainer.on('click', 'label.question-container-item', function () {
        $('.question-container-item').removeClass('selected')
        $(this).toggleClass('selected');

    })
    game.questionContainer.on('click', 'input[type=submit]', function () {
        game.checkAnswer();
        game.reset();
        game.displayQuestion();
    })
    game.startGameBtn.on('click', function () {
        $('body').fadeOut();
    })

}

// Check for winning answer + add to game.Correct/Wrong object
game.checkAnswer = function () {
    console.log('hit')
}

// Once user has gone thorugh all questions, show which simpsons character they relate to most based on their score
game.displayWinScreen = () => {
    console.log('display win screen')
    $(game.questionContainer).addClass('fadeOutDown fast animated').hide();
    $(game.winContainer).addClass('fadeInLeft fast animated');
    $(game.winContainer).css('display', 'grid');
    $(game.score).append(`${game.correctAnswer} Out Of ${game.difficulty['game.selected'].questions}</span>`)
    // const score = game.correctAnswer / game.wrongAnswer * 10;
    const score = '52';
    const characterImage = game.calcWinCharacter(score)
    console.log(characterImage, score)
    $('.win-image').attr("src", characterImage);
}

game.calcWinCharacter = (score) => {
    if (score > 10) {
        return game.winner[0].src
    }

    else if (score < 31 && score > 50) {
        return game.winner[1].src

    }
    else if (score < 51 && score > 70) {
        return game.winner[2].src;

    }
    else if (score < 71 && score > 90) {
        return game.winner[3].src

    }
    else if (score < 91 && score > 100) {
        return game.winner[4].src

    }
}

// Reset game wire up to button on page
game.reset = () => {
    game.questionContainer.html('');
}

game.init = () => {
    game.filterDataOnDifficulty(game.dataSource);
    game.eventListeners();
}


$(function () {
    $('body').fadeIn(1000);
    game.init();
})
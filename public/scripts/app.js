const game = {
    correctAnswer: 10,
    wrongAnswer: 4,
    questionNum: 1,
    questionContainer: $('.question-container'),
    winContainer: $('.win-container'),
    quizSubmitBtn: $('input[type=submit]'),
    startGameContainer: $('.startGameContainer'),
    startGameBtn: $('.start-game'),
    startGameDiffContainer: $('.select-difficulty'),
    startGameDiffItem: $('.select-difficulty-item'),
    score: $('.score'),
    dataSource: triviaQuestions.data,
    filteredQuestions: [],
    selectedDifficulty: '',
    difficulty: {
        easy: {
            questions: 10
        },
        medium: {
            questions: 10
        },
        hard: {
            questions: 10
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
            score: 70,
            src: '../public/assets/lisa-simpson.png',
        },
        {

            score: 90,
            src: '../public/assets/professor-frink.png',
        }
    ]
};

// Get random question.data
game.getRandom = (array) => {
    const random = Math.floor(Math.random() * array.length);
    return array[random]

}

game.getQuestion = (rawQuestions) => {
    game.filteredQuestions = rawQuestions.filter((item) => {
        if (item.difficulty === game.selectedDifficulty) {
            return item;
        }
    })
    game.displayQuestion();
}

game.displayQuestion = () => {
    const item = game.getRandom(game.filteredQuestions);
    console.log(item)
    if (game.questionNum !== game.difficulty[game.selectedDifficulty].questions) {
        $('.question-container-title').append(`Question #${game.questionNum++}`)
        $('.question-container-text').append(`${item.question}`)
        item.options.forEach((option, index) => {
            const optionHTML = (`<form><label class="question-container-item animated fadeIn" for="quiz-options">${option}</label>
        <input type="radio" name="quiz-options" class="question-input visuallyhidden" value="${index}" id="quiz-options"></form>`)
            $('.question-container-answertext').append(optionHTML)
        })

    }
    else {
        game.displayWinScreen();
    }
}

function dynamicEvent() {
    this.innerHTML = 'Dynamic event success.';
    this.className += ' dynamic-success';
}

// Add Event Listener for user clicks
game.eventListeners = function () {

    // As difficulty changes update game property
    $('input[type=radio]').on('change', function () {
        game.selectedDifficulty = $('input[type=radio]:checked').val()
    });
    // On start of the game, make several CSS and class changes to refresh the window. 
    $('.start-game').on('click', () => {
        $('.start-game-container').addClass('animated fadeOutRight');
        $('.start-game-container').css('display', 'none');
        $('.main-header').addClass('animated fadeInUp');
        $('.main-header').css('display', 'flex');
        $('.question-container').addClass('animated fadeInUp');
        $('.question-container').css('display', 'flex');
        game.getQuestion(game.dataSource);
    });
    // On each question apply class to provide user feedback
    $('#questions').on('click', 'label', function () {
        $('.question-container-item').removeClass("selected");
        $(this).addClass("selected");

    });
    // On start screen gather difficulty from label selected
    $('#start').on('click', 'label', function () {
        $('.select-difficulty-item').removeClass("selected2")
        $(this).addClass("selected2");
    });
    $('#question-submit').on('click', function () {
        console.log($(".question-container-item:checked").val())
    });
}


// $('.question-container-item').each(function (i) {
//     $(this).on('click', function () {
//         alert(i)
//     })
// }
// Check for winning answer + add to game.Correct/Wrong object
game.checkAnswer = function () {
    console.log($(".question-container-item:checked").val())
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
    game.eventListeners();

}


$(function () {
    $('body').fadeIn(1000);
    game.init();
})
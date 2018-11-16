const game = {
    correctAnswer: 0,
    wrongAnswer: 0,
    questionContainer: $('.question-container'),
    fieldsetContainer: $('.options-fieldset'),
    quizSubmitBtn: $('input[type=submit]'),
    dataSource: triviaQuestions.data,
    difficulty: {
        easy: 'easy', questions: 20,
        medium: 'medium', quesitons: 20,
        hard: 'hard', questions: 30,
        selected: 'easy'
    },
    winner: {
        poor: '10',
    }
};

// Get random question.data
game.getRandom = (array) => {
    const random = Math.floor(Math.random() * array.length);
    return {
        item: array[random],
        index: random
    };
}

// Get piece of question.data array based on difficulty selected
game.filterDataOnDifficulty = (array) => {
    game.filteredQuestions = array.filter((item) => {
        // console.log(item);
        return item.difficulty === game.difficulty.selected;
    })
    game.displayQuestion();
}

// let output = users.map((i) => {
//     return `<form>
//               <li>ID: ${i.id} </li>
//               <li>Name: ${i.name}</li>
//               <li>Email: ${i.email}</li>
//             </form>`;
// });

game.displayQuestion = () => {
    console.log('filtered item popped off array')
    game.filteredQuestions.pop();
    if (game.filteredQuestions.length !== 0) {
        const quizQuestions = game.getRandom(game.filteredQuestions);
        console.log(game.filteredQuestions);
        const { question, options } = quizQuestions.item;
        game.questionContainer.append(`<h2 class="question-container-title flex-column">Question</h2><p>${question}</p>`)
        options.forEach((item, index) => {
            const optionHTML = (`<a class="question-container-item">
        <label class="option-item" for="${item}">${item}</label></a>
        <input type="radio" name="quiz-options" class="visuallyhidden" id="${item}" value="${index}">
        `)
            game.questionContainer.append(optionHTML)
        })
        game.questionContainer.append(`<input type="submit" class="btn" value="Go" placeholder="Go">`);
        console.log(game.filteredQuestions.length);
    }
    else {
        console.log('no questions left')
    }
}

// Add Event Listender for answer clicks
game.eventListeners = function () {
    game.questionContainer.on('click', 'a', function () {
        $('.question-container-item').removeClass('selected')
        $(this).toggleClass('selected');

    })
    game.questionContainer.on('click', 'input[type=submit]', function () {
        game.checkAnswer();
        game.reset();
        game.displayQuestion();
    })

}


// Check for winning answer + add to game.Correct/Wrong object
game.checkAnswer = function () {
    console.log('hit')
}

game.displayWinner = () => {

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
    game.init();
})
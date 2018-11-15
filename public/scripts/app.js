const game = {
    correctAnswer: 0,
    wrongAnswer: 0,
    questionContainer: $('.question-container'),
    fieldsetContainer: $('.options-fieldset'),
    dataSource: triviaQuestionsData.data,
    questionsAnswered: [],
    difficulty: {
        easy: 'easy', questions: 10,
        medium: 'medium', quesitons: 20,
        hard: 'hard', questions: 40,
        selected: 'easy'
    },
};

// Get random question.data
game.getRandom = (array) => {
    const random = Math.floor(Math.random() * array.length + 1);
    return {
        item: array[random],
        index: random
    };
}

// Get piece of question.data array based on difficulty selected
game.filterDataOnDifficulty = (array) => {
    const filteredQuestions = array.filter((item) => {
        if (item.difficulty === game.difficulty.selected) {
            console.log(item)
            return item;
        }
    })
    console.log(filteredQuestions);
    game.getRandomQuestion(filteredQuestions);

}

//Display questions to page
game.getRandomQuestion = (filteredQuestions) => {
    const returnedQuestions = game.getRandom(filteredQuestions);
    {
        let question = returnedQuestions.question;
        let answer = returnedQuestions.answer;
        let options = returnedQuestions.options;
        // console.log(question, options, answer)
        game.displayQuestion(returnedQuestions)
    }

}

game.displayQuestion = (returnedQuestions) => {
    game.questionContainer.append(`<h2>Question</h2><p>${question}</p><form>`)
    for (let option of options) {

        // TODO: FIX issue where answer is shown as value of checkbox, need to grab [i] value from each option and add it to value
        const optionHTML = (`
        <label class="option-item" for="${option}">${option}</label>
        <input type="radio" name="quiz-options" class="visuallyhidden" id="${option}" value="${answer}">
        `)
        game.questionContainer.append(optionHTML)
        // game.addEventListeners();
    };


};

game.addEventListeners = function () {
    game.questionContainer.on('click', label, function () {
        // console.log($('this').event);
    })
    // $('.card').on('click', function () {

    //     $(this).toggleClass('selected');
    //     memoryGame.checkForMatch();
    //     console.log("clicked")
    //     memoryGame.moveCounter();

    // });
}


// Add Event Listender for answer clicks

// Check for winning answer + add to game.Correct/Wrong object

// Reset game wire up to button on page
game.reset = () => {
    game.questionReturned.html('');
}
game.init = () => {
    game.filterDataOnDifficulty(game.dataSource);
    game.getRandomQuestion();
}


$(function () {
    game.init();
})
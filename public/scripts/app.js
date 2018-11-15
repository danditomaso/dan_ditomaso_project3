const game = {
    correctAnswer: 0,
    wrongAnswer: 0,
    questionContainer: $('.question-container'),
    fieldsetContainer: $('.options-fieldset')
};

// Get random question.data
game.getRandomItem = (array) => {
    const random = Math.floor(Math.random() * array.length + 1);
    return {
        item: array[random],
        index: random
    };
}

//Display questions to page
game.getRandomQuestion = () => {
    const questionReturned = game.getRandomItem(gameQuestions.data);
    console.log(questionReturned.item);
    {
        const question = questionReturned.item.question;
        const answer = questionReturned.item.answer;
        const options = questionReturned.item.options;
        game.displayQuestion(question, options, answer)
    }
    // questionReturned.forEach(question => {
    //     console.log(question)
    // });
    // $('').html(`${questionReturned.name`);
    //     }

}

game.displayQuestion = (question, options, answer) => {
    // console.log(options)
    game.questionContainer.append(`<h2>Question</h2><p>${question}</p><form>`)
    for (let option of options) {
        console.log(answer);

        // TODO: FIX issue where answer is shown as value of checkbox, need to grab [i] value from each option and add it to value
        const optionHTML = (`
        <label class="option-item" for="${option}">${option}</label>
        <input type="radio" name="quiz-options" class="visuallyhidden" id="${option}" value="${answer}">
        `)
        game.questionContainer.append(optionHTML)
    };

    // game.questionContainer.append(`<h2>Question</h2><div>${question}</div>`)

};


// Add Event Listender for answer clicks

// Check for winning answer + add to game.Correct/Wrong object

// Reset game wire up to button on page
game.reset = () => {
    game.questionReturned.html('');
}
game.init = () => {
    game.getRandomQuestion();
}


$(function () {
    game.init();
})
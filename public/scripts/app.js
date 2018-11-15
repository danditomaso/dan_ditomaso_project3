const game = {
    correctAnswer: 0,
    wrongAnswer: 0,
    questionContainer: $('.question-container'),
};

// Get random question.data
game.getRandomItem = (array) => {
    const random = Math.floor(Math.random() * array.length * Math.random());
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
        game.displayQuestion(question, options)
    }
    // questionReturned.forEach(question => {
    //     console.log(question)
    // });
    // $('').html(`${questionReturned.name`);
    //     }

}

game.displayQuestion = (question, options) => {
    console.log(options)
    game.questionContainer.append(`<h2>Question</h2><p>${question}</p>`)
    game.questionContainer.append(`<ul></ul>`)
    for (let option of options) {
        console.log(option);
        game.questionContainer.append(`<li>${option}</li>`)
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
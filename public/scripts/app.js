const myApp = {
    correctAnswer: 0,
    wrongAnswer: 0,
};

// read in question/answer JSON object data

// Function found on the MDN website.  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

//Display questions to page

// Add Event Listender for answer clicks

// Check for winning answer + add to myapp.Correct/Wrong object

myApp.init = function () {
    $.getJSON('../public/assets/data.json')
        .then((res) => {
            console.log(res)

        }
        )
}


$(function () {
    myApp.init();
});
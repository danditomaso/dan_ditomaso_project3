const myApp = {};
myApp.snakeTail = {
    tailLength: 4,
};
// myApp.twitterHandle = 'thisishackeryou';
// myApp.numberOfTweets = 3;
myApp.debounce = (func) => {
    let timer
    return (event) => {
        if (timer) { clearTimeout(timer) }
        timer = setTimeout(func, 100, event)
    }
}

myApp.moveIt = function (event) {
    switch (event != undefined) {
        case (event.keyDown == 37): {
            console.log("LEFT")
        }
        case (event.keyDown == 38): {
            console.log("DOWN")
        }
        case (event.keyDown == 39): {
            console.log("RIGHT")
        }
        case (event.keyDown == 40): {
            console.log("UP")
        }
    }
}


// myApp.draw = function Shape(x, y, w, h, fill) {
//     // This is a very simple and unsafe constructor. 
//     // All we're doing is checking if the values exist.
//     // "x || 0" just means "if there is a value for x, use that. Otherwise use 0."
//     this.x = x || 0;
//     this.y = y || 0;
//     this.w = w || 5;
//     this.h = h || 5;  
//     this.fill = fill || '#AAAAAA';
// }


// window.addEventListener('resize', myApp.debounce(() => {
//     myApp.canvas.width = window.innerWidth
//     myApp.canvas.height = window.innerHeight
// }))

// myApp.getTweets = function () {
//     //retrieves tweets
// }

myApp.draw = function () {
    // let ctx = myApp.context.getContext('2d')
    // myApp.gameBoard.drawRect({
    //     fillStyle: '#fff',
    //     x: 150, y: 40,
    //     width: 10,
    //     height: 8,
    //     shadowColor: '#fff',
    //     cornerRadius: 0
    // });
    // myApp.gameBoard.drawRect({})
}

myApp.init = function () {
    myApp.gameBoard = $('#canvas');
    // setInterval(myApp.game, 1000 / 15);
    // $(myApp.board).keypress(myApp.moveIt(window.Event));
    document.onkeydown = checkKey;

    function checkKey(e) {

        e = e || window.event;

        if (e.keyCode == '38') {
            // up arrow
            console.log('up')
        }
        else if (e.keyCode == '40') {
            // down arrow
            console.log('down`')

        }
        else if (e.keyCode == '37') {
            // left arrow
            console.log('left')

        }
        else if (e.keyCode == '39') {
            // right arrow
            console.log('right')

        }

    }
}


$(function () {
    myApp.init();
});
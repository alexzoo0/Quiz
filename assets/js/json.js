var questionsP = document.querySelector("#container3");
var answers = document.querySelector("#answer");
var starter = document.querySelector("#start");
var start = document.querySelector("#starter");
var enterBtn = document.querySelector("#enter");
var times = document.querySelector("#timer");
var initials = document.querySelector("#init");
var checker = document.querySelector("#answer-check");
var high = document.querySelector("#highScores");
var score = document.querySelector("#scores");
var back = document.querySelector("#Back");
var Clear = document.querySelector("#Clears");
var lastScreen = document.querySelector("#last-screen");



var questions = [
    {
        title: 'What is semantic Html?',
        choices: [
            "The natrual orderly fashion of organazing your code to be readable.",
            "Putting html tags in order from 1 - infinate.",
            "Another type of programing language similar to HTML.",
            "An HTML extension for visual studio code."

        ],
        answer: "The natrual orderly fashion of organazing your code to be readable."
    },
    {
        title: 'Which is a function?',
        choices: [
            "Where you can store code to reuse it later on.", 
            "To function the whole javascript code.", 
            "To function a group of code.",
            "Where you can store away code.", 
        ],
        answer: "Where you can store code to reuse it later on."
    },
    {
        title: 'what are higher order functions?',
        choices: [
            "Functions that control the whole javascript page.", 
            "A Function that can control multiple functions.", 
            "A function that operates on other functions .",
            "You need to start with higher order functions before you start coding on you javascript page.", 
        ],
        answer: "A function that operates on other functions ."
    },
    {
        title: 'what are data attributes?',
        choices: [
            "Tags to store data.", 
            "Are used to store extra information in the DOM.", 
            "attributes you can add in css to store data.",
            "Types of data you can access in html.", 
        ],
        answer: "Are used to store extra information in the DOM."
    },
    {
        title: 'what is 1 WAY to get elements from the DOM?',
        choices: [
            "You start with a function.", 
            "Call the function with a variable.", 
            "Linking the DOM using link tag.",
            "Using the querySelector.", 
        ],
        answer: "Using the querySelector."
    },
    {
        title: 'what are data attributes1?',
        choices: [
            "Tags to store data.", 
            "Are used to store extra information in the DOM.", 
            "attributes you can add in css to store data.",
            "Types of data you can access in html.", 
        ],
        answer: "Are used to store extra information in the DOM."
      },
      {
        title: 'what are data attributes?2',
        choices: [
            "Tags to store data.", 
            "Are used to store extra information in the DOM.", 
            "attributes you can add in css to store data.",
            "Types of data you can access in html.", 
        ],
        answer: "Are used to store extra information in the DOM."
      },
      {
        title: 'what are data attributes3?',
        choices: [
            "Tags to store data.", 
            "Are used to store extra information in the DOM.", 
            "attributes you can add in css to store data.",
            "Types of data you can access in html.", 
        ],
        answer: "Are used to store extra information in the DOM."
      },
      {
        title: 'what are data attributes4?',
        choices: [
            "Tags to store data.", 
            "Are used to store extra information in the DOM.", 
            "attributes you can add in css to store data.",
            "Types of data you can access in html.", 
        ],
        answer: "Are used to store extra information in the DOM."
      },
    
];

var currentQuestion = 0;
var timeA = 100.0;
var timer;
var highScores = [];


start.onclick = clickStart;

initials.onkeyup = checkForEnter;
// works

function clickStart(){

    var bScreen = document.getElementById("start");
    bScreen.setAttribute("class", "hide");

    questionsP.removeAttribute("class");
    timer = setInterval(timeB, 1000);
    times.textContent = timeA;

    questionsB();
}



function timeB(){
    timeA--;
    times.textContent = timeA;

    if (timeA === 0) {
        gameOver();
    }
    
}



function questionsB(title){

    var currentQuestions = questions[currentQuestion];
    var titleEl = document.getElementById("questions");
    titleEl.textContent = currentQuestions.title;
    answers.innerHTML = "";
    
    currentQuestions.choices.forEach(function(choice, i){
        var choiceB = document.createElement("button");
        choiceB.setAttribute("class", "choice");
        choiceB.setAttribute("value", choice);
        choiceB.textContent = i + 1 + ". " + choice;
        choiceB.onclick = nextQtn;
        answers.appendChild(choiceB);
    });

}

function nextQtn(){
    if(this.value !== questions[currentQuestion].answer){
        timeA -= 30;

        if (timeA < 0){
            timeA = 0;
        }
        times.textContent = timeA;
        checker.textContent = "oops!";
        checker.style.color = "orange";
        checker.style.fontSzie = "50%";
    }
    else{
        checker.textContent = "correct!";
        checker.style.color = "green";
        checker.style.fontSzie = "50%";
    }
        checker.setAttribute("class", "answer-check");
        setTimeout(function() {
            checker.setAttribute("class", "answer-check hide");
        },1000);

        currentQuestion++;

        if (currentQuestion === questions.length){
            gameOver();
        }
        else{
            questionsB();
        }
}

function gameOver() {
    clearInterval(timer);
    var lastScreen = document.getElementById("last-screen");
    lastScreen.removeAttribute("class");

    var finalS = document.getElementById("score");
    finalS.textContent = timeA;
    questionsP.setAttribute("class", "hide");
}


function saveHighscore(){
    score.innerHTML = "";
    show(high);
    highScores = JSON.parse(localStorage.getItem("scores"));
    for(var i = 0; i < highScores.length; i++){
        var scoreItem = document.createElement("div");
        console.log(scoreItem);
        scoreItem.setAttribute("style", "background-color:PaleTurquoise;");
        scoreItem.textContent = `${(i + 1)}. ${highScores[i].username} - ${highScores[i].userScore}`;
        score.appendChild(scoreItem);
    }
}

enterBtn.addEventListener("click", function(){
    let initValue = initials.value.trim();
        if(initValue){
            var userScore = {username: initValue, userScore: score};
            initials.value = '';
            highScores = JSON.parse(localStorage.getItem("scores")) || [];
            highScores.push(userScore);
            localStorage.setItem("scores", JSON.stringify(highScores));
            saveHighscore();
        }
});

function hide(element){
    element.style.display = "none";
};

function show(element){
    element.style.display = "inline-block";
};

enterBtn.addEventListener("click", function(){
    var highS = document.getElementById("highScores");
    highS.removeAttribute("class")

    var final = documet.getElementById("last-screen");
    final.setAttribute("class", "hide");
});

back.addEventListener("click", function(){
    hide(high);
    hide(end);
    hide(questionsP);
    show(starter);

});


Clear.addEventListener("click", function(){
    localStorage.Clear();
    saveHighscore();
});


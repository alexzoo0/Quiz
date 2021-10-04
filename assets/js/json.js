var questionsP = document.querySelector("#container3");
var answers = document.querySelector("#answer");
var startBtn = document.querySelector("#starter");
var enterBtn = document.querySelector("#enter");
var times = document.querySelector("#timer");
var initials = document.querySelector("#init");
var checker = document.querySelector("#answer-check");

var questions = [
    {
        title: 'Which is a function ?',
        choices: [
        9,6,7,9
        ],
        answer: "7"
    },
    {
        title: 'Which is a function ?',
        choices: [
            "Where you can store code to reuse it later on.", 
            "to function the whole javascript code.", 
            "to function a group of code.",
            "Where you can store away.", 
        ],
        answer: "Where you can store code to reuse it later on."
    },
    
];

var currentQuestion = 0;
var timeA = 180.0;
var timer;
var scoreM = 0;
var highScores = [];


startBtn.onclick = clickStart;

function clickStart(){
    var bScreen = document.getElementById("start");
    bScreen.setAttribute("class", "hide");

    questionsP.removeAttribute("class");
    var time = setInterval(1000);
    times.textContent = timeA;

    questionsB()
}



function timeB(){
    timeA--;
    times.textContent = timeA;

    if (timeA <= 0) {
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
        timer -= 10;

        if (timer < 0){
            timer = 0;
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
        },2000);

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
    var lastScreen = document.getElementById("#last-screen");
    lastScreen.removeAttribute("class");
    
    var finalS = document.getElementById("score");
    finalS.textContent = timeA;
    questionsP.setAttribute("class", "hide");
}


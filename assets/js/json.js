var questionsP = document.querySelector("#container");
var answers = document.querySelector("#answer");
var startBtn = document.querySelector("#starter");
var enterBtn = document.querySelector("#enter");
var times = document.querySelector("#time");
var initials = document.querySelector("#init");
var questions = [
    {
        question: 'Which is a function ?',
        answers: [
        { text: 'funcion ()', correct: true },
        { text: 'method ()', correct: false },
        { text: 'variable ()', correct: false },
        { text: 'class ()', correct: false }
        ]
    },
];
startBtn.onclick = clickStart;
var time;

function clickStart(){
    var bScreen = document.getElementById("start");
    bScreen.setAttribute("class", "hide");

    questionsP.removeAttribute("class");
    var time = setInterval(2000);
    var timer = questions.length * 10;
    times.textContent = timer;

    questionsB()
}

function timeB(){
    var timer = questions.length * 10;
    times--;
    times.textContent = timer;

    if (timer <= 0) {
        endQuestions()
    }
    
}

function questionsB(){
    var currentQuestion = 0;
    var currentQuestions = questions[currentQuestion];
    var titleEl = document.getElementById(questions);
    titleEl.textContent = currentQuestion.title;
    answers.innerHTML = "";
    
    currentQuestions.answers.forEach(function(choice, i){
        var choiceB = document.createElement("button");
        choiceB.setAttribute("class", "choice");
        choiceB.setAttribute("value", choice);
        choiceB.textContent = i + 1 + ". " + choice;
        choiceB.onclick = onClick;
    });

}
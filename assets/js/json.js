var questions = document.querySelector("#container");
var answers = document.querySelector("#answer");
var startBtn = document.querySelector("#starter");
var enterBtn = document.querySelector("#enter");
var times = document.querySelector("#time");
var initials = document.querySelector("#init");

function clickStart(){
    var bScreen = document.getElementById("start");
    bScreen.setAttribute("class", "hide");

    questions.removeAttribute("class");

    var time = setInterval(2000);
    var timer = questions.length * 10;
    time.textContent = timer;

    questionsB()
}

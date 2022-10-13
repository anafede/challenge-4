var questions = [
    {
        question: "What does CSS stand for?",
            choices: ['Concrete Shin Splints', "Cascading Style Sheets" , "Constant Syrup Spill", "Condescending Style Sheets"],
            answer: 'B'
        },
        
{
    question: "What does HTML do for a webpage?",
        choices: ["HTML provides the webpage's structure", "HTML styles individual elements", "HTML makes a webpage interactive",  "None of the above"],
        answer: 'A'
    },
 
{
    question: "What does API stand for?",
        choices: ["All Purpose Industry", "Application Programming Interface", "Allocation Property Igloo", "Aligning Precise Interests"],
        answer: 'B'
    },
]
function setTime() {
    var timerInterval = setInterval(function() {
    if (secondsLeft>0){
        secondsLeft--;
        timer.textContent = secondsLeft + " seconds remaining";
    }
    if(secondsLeft === 0){
        timer.textContent = "GAME OVER";
        quizOver()
    }
    },1000)}
setTime();

function quizOver(){
    choiceList[0].textContent = "Final Score: " + points;
    choiceList[1].textContent = "";
    choiceList[2].textContent = "";
    choiceList[3].textContent = "";
    choiceList[0].style.backgroundColor='lightblue';
    choiceList[1].style.backgroundColor='lightblue';
    choiceList[2].style.backgroundColor='lightblue';
    choiceList[3].style.backgroundColor='lightblue';
    question.style.visibility = 'hidden';
    score.style.visibility = 'hidden';
    next.style.visibility = 'hidden';
}

var timer = document.querySelector(".seconds");
var quiz = document.querySelector(".quiz");
var start = document.querySelector(".start-btn button");
var question = document.getElementById("question");
var secondsLeft = 60;
var next = document.querySelector('.next-btn button');
var choices = document.querySelectorAll(".choice");
const questionTime = 15;
var score= document.querySelector('.score');
var points = 0;
var endQuiz = document.querySelector('.quiz-finish');

start.addEventListener('click', startGame)
function startGame(){
    start.style.display='none';
    quiz.style.display='block';
}

var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var choiceList = [choiceA, choiceB, choiceC, choiceD];

var lastQuestionIndex=questions.length-1;
var runningQuestionIndex=0;
 function renderQuestion(){
    var q=questions[runningQuestionIndex];
    question.innerHTML= "<p>"+ q.question+ "</p>";
        choiceA.innerHTML = q.choices[0];
        choiceB.innerHTML = q.choices[1];
        choiceC.innerHTML = q.choices[2];
        choiceD.innerHTML = q.choices[3];

        choiceA.setAttribute("onclick", "checkAnswer('A', 0)");
        choiceB.setAttribute("onclick", "checkAnswer('B', 1)");
        choiceC.setAttribute("onclick", "checkAnswer('C', 2)");
        choiceD.setAttribute("onclick", "checkAnswer('D', 3)");
        }
 
runningQuestionIndex = 0;
renderQuestion();

next.addEventListener('click', nextQuestion)
function nextQuestion(){
    choiceList[0].style.backgroundColor='lightblue';
    choiceList[1].style.backgroundColor='lightblue';
    choiceList[2].style.backgroundColor='lightblue';
    choiceList[3].style.backgroundColor='lightblue';
    runningQuestionIndex++
    renderQuestion();
}


function answerIsCorrect(i){
    choiceList[i].style.backgroundColor='green';
    points = points + 10;
    if(points == 30){
        timer.textContent = "GAME OVER";
        quizOver()
    }
    score.textContent = "Score: " + points;
}
function answerIsWrong(i){
    choiceList[i].style.backgroundColor='red';
    secondsLeft= secondsLeft-10;
    timer.textContent = secondsLeft + " seconds remaining";
}

function checkAnswer(correct, index){
    if(questions[runningQuestionIndex].answer === correct){
        answerIsCorrect(index)
    } else{
        answerIsWrong(index);
    }
    
}









//container for quiz
const containerEl = document.querySelector("#container");

//reusable answer buttons for each question
const answerButtons =[
    {btn: document.createElement("button")},
    {btn: document.createElement("button")},
    {btn: document.createElement("button")},
    {btn: document.createElement("button")},
];

//High Score Button
const highScoreButton = document.querySelector("#highScore");
highScoreButton.addEventListener("click", function(){
    clear();
   let highScore = document.createElement("p");
    containerEl.appendChild(highScore);
    highScore.textContent = score;
    container.appendChild(homeButton);
});

//timer elements
let timerEl = document.querySelector("#timer");

//home button
const homeButton = document.createElement("button");
homeButton.textContent = "Main Screen";
homeButton.addEventListener("click", function(){
    startScreen();
});

//array of questions
const questions = [
    {
        q: "What is the file extension for JavaScript?", 
        a: [".HTML",".js",".xml",".css"],
        c: ".js"
    },
    {
        q: "What does HTML stand for?", 
        a: ["Hyper text markup lasagna","Hippos talk my language","Hyper tool markup language","Hyper text markup language"],
        c: "Hyper text markup language"
    },
    {
        q: "What symbol do you use to end a line in JavaScript?", 
        a: [".","#",";","!"],
        c: ";"
    },
    {
        q: "What symbol is at the end of the function?", 
        a: ["}",")","!","]"],
        c: "}"
    },
    {
        q: "Which is not a proper way to create variable in JS?", 
        a: ["const","var","let","setVar"],
        c: "setVar"
    },
];

let score = 10;
let questionNumber = 0;
let highScore = localStorage.getItem("High Score");


//start screen elements
const h2El = document.createElement("h2");
const startButton = document.createElement("button");
const pEl = document.createElement("p");

//start screen that will display when the user is ready to take quiz
function startScreen() {    
    clear();
    containerEl.appendChild(h2El);
    containerEl.appendChild(pEl);
    containerEl.appendChild(startButton);
    h2El.textContent = "Coding Quiz Challenge";
    pEl.textContent = "Test your coding knowledge with these questions!";
    startButton.textContent = "Start Quiz";

    startButton.addEventListener("click", function(){
        checkAnswer();
    });
}

//clears container allowing more objects to be appended to
function clear() {
    containerEl.innerHTML = "";
    containerEl.appendChild(h2El);
}

//fills answerButtons depending on what question number the user is on
function nextQuestion(num){
    clear();

    if(num < questions.length){
        console.log(num);
        for(let i = 0; i < answerButtons.length; i++) {
            containerEl.appendChild(answerButtons[i].btn);
            answerButtons[i].btn.textContent = questions[num].a[i];
        }
        h2El.textContent = questions[num].q;
    }
    else {
        questionNumber = 0;
        score = 0;
        endQuiz();
    }
}

//checks answers 
function checkAnswer(){
    nextQuestion(questionNumber);
    
    for (let i = 0; i < answerButtons.length; i++){
        answerButtons[i].btn.addEventListener("click",function(){
            if (answerButtons[i].btn.textContent === questions[questionNumber].c){
                console.log(answerButtons[i].btn.textContent);
            }
            else {
                console.log(answerButtons[i].btn.textContent);   
                score--;    
            }
            nextQuestion(questionNumber);
            questionNumber++;

            checkAnswer();
        });
    }
}



//ends quiz and displays high score 
function endQuiz() {
    clear();
    h2El.textContent = "Congrats you got " + score;
    if (score > localStorage.getItem("High Screen")){
        localStorage.setItem("High Score", score);
    }
    containerEl.appendChild(homeButton);
    
}

startScreen();

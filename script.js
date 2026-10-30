const questions = [
    {
        question:"me is who?",
        answers: [
            {text: "dhrit", correct: true},
            {text: "shanu", correct: false},
            {text: "manu", correct: false},
            {text: "tanu", correct: false},
        ]
    },
    {
        question:"you is who?",
        answers: [
            {text: "user", correct: true},
            {text: "shanu", correct: false},
            {text: "manu", correct: false},
            {text: "tanu", correct: false},
        ]

    },
    {
        question:"how is anime popular?",
        answers: [
            {text: "its engaging", correct: true},
            {text: "its shit", correct: false},
            {text: "not popular", correct: false},
            {text: "idk", correct: false},
        ]

    }

];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList. add("btn");
        answerButtons.appendChild(button);
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);

    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
    }else{
        selectedBtn.classList.add("incorrect");
    }
}

startQuiz();
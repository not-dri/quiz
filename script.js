const questions = [
    {
        question:"Which of the following is the Grass/Poison-type starter Pokémon originating from the Kanto region?",
        answers: [
            {text: "Chikorita", correct: false},
            {text: "Treecko", correct: false},
            {text: "Bulbasaur", correct: true},
            {text: "Turtwig", correct: false},
        ]
    },
    {
        question:"Which Pokémon type is completely immune to Ghost-type attacks?",
        answers: [
            {text: "Steel", correct: false},
            {text: "Dark", correct: false},
            {text: "Fairy", correct: false},
            {text: "Normal", correct: true},
        ]

    },
    {
        question:"How does Eevee evolve into Sylveon in the main series Pokémon games?",
        answers: [
            {text: "Leveling up knowing a fairy-type move with high affection/friendship", correct: true},
            {text: "Exposing it to a shiny stone at night", correct: false},
            {text: "Leveling up next to mossy rock", correct: false},
            {text: "Trading it while holding a fairy feather", correct: false},
        ]

    },
    {
        question:"According to Johto region lore, the three legendary beasts—Raikou, Entei, and Suicune—were resurrected inside which landmark after it burned down?",
        answers: [
            {text: "Bell tower", correct: false},
            {text: "Sprout tower", correct: false},
            {text: "Brass tower", correct: true},
            {text: "Silver tower", correct: false},
        ]

    },
    {
        question:"Which Ability causes Ground-type moves to have no effect on the Pokémon possessing it?",
        answers: [
            {text: "Sand Veil", correct: false},
            {text: "Levitate", correct: true},
            {text: "Earth Eater", correct: false},
            {text: "Air Lock", correct: false},
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
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
    
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();
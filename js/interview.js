let type = localStorage.getItem("type");
let originalQuestions = questions[type];

// Shuffle function (Fisher–Yates Algorithm)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Copy + shuffle questions
let questionList = [...originalQuestions];
shuffle(questionList);

// Select only first 5 random questions
questionList = questionList.slice(0, 5);

let index = 0;
let score = 0;
let time = 60;
let timer;

const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const timerEl = document.getElementById("timer");

function loadQuestion() {
    questionEl.innerText = questionList[index];
    answerEl.value = "";
    time = 60;
    startTimer();
}

function startTimer() {
    timer = setInterval(() => {
        timerEl.innerText = "Time Left: " + time + "s";
        time--;
        if (time < 0) nextQuestion();
    }, 1000);
}

function nextQuestion() {
    clearInterval(timer);

    // Simple evaluation logic
    if (answerEl.value.trim().length >= 20) {
        score += 10;
    }

    index++;

    if (index < questionList.length) {
        loadQuestion();
    } else {
        localStorage.setItem("score", score);
        window.location.href = "result.html";
    }
}

loadQuestion();

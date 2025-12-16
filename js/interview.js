let type = localStorage.getItem("type");
let questionList = questions[type];
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

    if (answerEl.value.length > 20) {
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

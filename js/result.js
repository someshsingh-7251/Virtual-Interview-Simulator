const score = localStorage.getItem("score");
document.getElementById("score").innerText = "Your Score: " + score;

let feedback = "Needs Improvement";
if (score >= 20) feedback = "Good Performance";
if (score >= 30) feedback = "Excellent Performance";

document.getElementById("feedback").innerText = feedback;

function restart() {
    window.location.href = "index.html";
}

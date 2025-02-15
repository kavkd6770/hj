let answers = { 1: false, 2: false };

function selectAnswer(question, answer) {
    answers[question] = answer;
}

function checkAnswers() {
    if (answers[1] === true && answers[2] === true) {
        window.location.href = "love.html";
    } else {
        window.location.href = "sorry.html";
    }
}

function redirectToQuiz() {
    window.location.href = "quiz.html";
}

function redirectToNo() {
    window.location.href = "sorry.html";
}

const score = parseInt(prompt("Enter your score:"));
let grade;

if (score >= 88) {
    grade = 5;
} else if (score >= 76) {
    grade = 4;
} else if (score >= 64) {
    grade = 3;
} else if (score >= 52) {
    grade = 2;
} else if (score >= 40) {
    grade = 1;
} else {
    grade = 0;
}

document.body.innerHTML = `<p>Your grade is ${grade}.</p>`;

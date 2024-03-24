const number = parseInt(prompt("Enter a positive integer:"));
let sum = 0;
for (let i = 1; i <= number; i++) {
    sum += i;
}

document.body.innerHTML = `<p>The sum of all natural numbers up to and including ${number} is ${sum}.</p>`;

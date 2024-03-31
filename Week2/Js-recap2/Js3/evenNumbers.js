let numbers = [];
let input;
while (true) {
  input = prompt("Enter a number (or 'done' to finish):");
  if (input.toLowerCase() === "done") break;
  numbers.push(parseInt(input, 10));
}

let evenNumbers = numbers.filter(n => n % 2 === 0);
let evenNumbersContainer = document.createElement("div");
evenNumbersContainer.textContent = `Even Numbers: ${evenNumbers.length > 0 ? evenNumbers.join(", ") : "None"}`;
document.body.appendChild(evenNumbersContainer);

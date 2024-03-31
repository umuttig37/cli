let numbers = [];
for (let i = 0; i < 5; i++) {
  let num = parseInt(prompt(`Enter Number ${i + 1}:`), 10);
  numbers.push(num);
}

let numbersContainer = document.createElement("div");
numbersContainer.textContent = `Numbers: ${numbers}`;
document.body.appendChild(numbersContainer);

let searchNum = parseInt(prompt("Enter a Number to Search:"), 10);
let searchResult = document.createElement("div");
searchResult.textContent = `Number ${searchNum} is ${numbers.includes(searchNum) ? '' : 'not '}found in the array.`;
document.body.appendChild(searchResult);

numbers.pop();
let updatedNumbersContainer = document.createElement("div");
updatedNumbersContainer.textContent = `Updated Numbers: ${numbers}`;
document.body.appendChild(updatedNumbersContainer);

numbers.sort((a, b) => a - b);
let sortedNumbersContainer = document.createElement("div");
sortedNumbersContainer.textContent = `Sorted Numbers: ${numbers}`;
document.body.appendChild(sortedNumbersContainer);

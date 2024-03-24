const side1 = parseFloat(prompt("Enter the length of the first side:"));
const side2 = parseFloat(prompt("Enter the length of the second side:"));
const side3 = parseFloat(prompt("Enter the length of the third side:"));

let type;
if (side1 === side2 && side2 === side3) {
    type = "Equilateral";
} else if (side1 === side2 || side1 === side3 || side2 === side3) {
    type = "Isosceles";
} else {
    type = "Scalene";
}

document.body.innerHTML = `<p>The triangle is ${type}.</p>`;

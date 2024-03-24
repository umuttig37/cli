const input1 = prompt("Enter the coordinates of the first point (x,y):").split(',');
const input2 = prompt("Enter the coordinates of the second point (x,y):").split(',');
const x1 = parseFloat(input1[0]);
const y1 = parseFloat(input1[1]);
const x2 = parseFloat(input2[0]);
const y2 = parseFloat(input2[1]);
const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

document.body.innerHTML = `<p>The distance between the two points is ${distance}.</p>`;

const number = parseInt(prompt("Enter a positive integer:"));
let tableHtml = '<table border="1">';

for (let i = 1; i <= number; i++) {
    tableHtml += '<tr>';
    for (let j = 1; j <= number; j++) {
        tableHtml += `<td>${i * j}</td>`;
    }
    tableHtml += '</tr>';
}
tableHtml += '</table>';

document.body.innerHTML = tableHtml;

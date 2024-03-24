 const celsius = parseFloat(prompt("Enter temperature in Celsius:"));
const fahrenheit = (celsius * 9/5) + 32;
const kelvin = celsius + 273.15;

document.body.innerHTML = `<p>${celsius}°C is ${fahrenheit}°F or ${kelvin}K.</p>`;


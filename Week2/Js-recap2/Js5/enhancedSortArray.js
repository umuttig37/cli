function sortArray(numbers, order) {
    if (order === "asc") {
      return numbers.slice().sort((a, b) => a - b);
    } else if (order === "desc") {
      return numbers.slice().sort((a, b) => b - a);
    }
  }
  
  const numbers = [5, 2, 8, 1, 9];
  console.log("Ascending:", sortArray(numbers, "asc"));
  console.log("Descending:", sortArray(numbers, "desc"));
  
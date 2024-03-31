function sortArray(numbers) {
    return numbers.slice().sort((a, b) => a - b);
  }
  
  const testArray = [5, 3, 8, 1, 2];
  console.log("Original Array:", testArray);
  console.log("Sorted Array:", sortArray(testArray));
  
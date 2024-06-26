function frequencyOfMaxValue(numbers, queries) {
  const maxValues = [];
  const occurrences = [];

  // Find the maximum value in the segment from each index to the highest index
  let max = -Infinity;
  for (let i = numbers.length - 1; i >= 0; i--) {
    max = Math.max(max, numbers[i]);
    maxValues[i] = max;
  }

  // Count the number of times the maximum value occurs in each segment
  for (let i = 0; i < queries.length; i++) {
    const query = queries[i];
    let count = 0;

    // Iterate through the segment starting at the query index
    for (let j = query - 1; j < numbers.length; j++) {
      // Modify the loop to start from query - 1
      if (numbers[j] === maxValues[query - 1]) {
        // Modify the condition to compare with maxValues[query - 1]
        count++;
      }
    }

    occurrences.push(count);
  }

  return occurrences;
}

// Example usage
const arr = [2, 2, 2];
const queries = [1, 2, 3];
const result = frequencyOfMaxValue(arr, queries);
console.log(result); // Output: [3, 2, 1]

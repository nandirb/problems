function countPerms(length) {
  // Base cases
  if (length === 0) return 1;
  if (length === 1) return 5;

  // Initialize counts for each letter
  let aCount = 1;
  let eCount = 1;
  let iCount = 1;
  let oCount = 1;
  let uCount = 1;

  // Calculate counts for each length
  for (let i = 2; i <= length; i++) {
    const newACount = eCount;
    const newECount = aCount + iCount;
    const newICount = aCount + eCount + oCount + uCount;
    const newOCount = iCount + uCount;
    const newUCount = aCount;

    // Update counts
    aCount = newACount;
    eCount = newECount;
    iCount = newICount;
    oCount = newOCount;
    uCount = newUCount;
  }

  // Return the total count
  return aCount + eCount + iCount + oCount + uCount;
}

const length = 2;
const result = countPerms(length);
console.log(`Number of strings of length ${length}: ${result}`);

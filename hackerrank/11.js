function reassignedPriorities(queue) {
  // Create a copy of the original queue
  const sortedQueue = [...queue];

  // Sort the queue in ascending order based on priorities
  sortedQueue.sort((a, b) => a - b);

  let minPriority = 1;

  // Assign new priorities to each compliance issue
  for (let i = 0; i < sortedQueue.length; i++) {
    if (i > 0 && sortedQueue[i] !== sortedQueue[i - 1]) {
      minPriority++;
    }
    queue[queue.indexOf(sortedQueue[i])] = minPriority;
  }

  return queue;
}

// Example usage
const complianceQueue = [1, 3, 7, 3];

const updatedQueue = reassignedPriorities(complianceQueue);
console.log(updatedQueue);

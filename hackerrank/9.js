function processLogs(logs, threshold) {
  const userCounts = {};

  // Count the number of logs for each user
  for (const log of logs) {
    const [sender, recipient] = log.split(" ").slice(0, 2);

    if (!userCounts[sender]) {
      userCounts[sender] = 0;
    }
    if (!userCounts[recipient]) {
      userCounts[recipient] = 0;
    }

    userCounts[sender]++;
    userCounts[recipient]++;
  }

  // Filter out suspicious users
  const suspiciousUsers = [];
  for (const user in userCounts) {
    if (userCounts[user] >= threshold) {
      suspiciousUsers.push(user);
    }
  }

  // Sort the suspicious users in ascending order
  suspiciousUsers.sort((a, b) => a - b);

  return suspiciousUsers;
}

const logs = ["1 2 50", "1 7 70", "1 3 20", "2 2 17"];

const threshold = 2;
const suspiciousUsers = processLogs(logs, threshold);
console.log(suspiciousUsers);

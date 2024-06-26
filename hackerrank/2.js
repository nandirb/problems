let s = "aaeiouxa";

function findSubstring(s) {
  let substrings = new Set();
  let vowels = new Set(["a", "e", "i", "o", "u"]);

  for (let i = 0; i < s.length; i++) {
    let letters = new Set();

    for (let j = i; j < s.length; j++) {
      letters.add(s[j]);
      if (
        letters.size === 5 &&
        Array.from(letters).every((letter) => vowels.has(letter))
      ) {
        substrings.add(s.substring(i, j + 1));
      }
    }
  }

  return substrings.size;
}

// console.log(findSubstring(s)); // Output: 2

const set = new Set(1, 3, 4, 2, 1, 1);
const list = Array.from(set);
list.sort((a, b) => a - b);
console.log(list);

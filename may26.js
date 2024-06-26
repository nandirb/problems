var isSubsequenceOld = function (s, t) {
  let map = new Map();
  for (let i = 0; i < t.length; i++) {
    if (!map.has(t[i])) {
      map.set(t[i], i);
    }
  }

  for (let j = 0; j < s.length - 1; j++) {
    if (!map.has(s[j])) {
      return false;
    }

    const idxDiff = map.get(s[j + 1]) - map.get(s[j]);
    console.log({ t, s, idxDiff });

    if (idxDiff <= 0) {
      return false;
    }
  }

  return true;
};

var isSubsequence = function (s, t) {
  let sp = 0;
  let tp = 0;

  while (sp < s.length && tp < t.length) {
    if (s[sp] === t[tp]) {
      sp++;
    }
    tp++;
  }

  return sp === s.length;
};

// Check if s is a subsequence of t

const s = "bb";
const t = "ahbgdc";

isSubsequence(s, t);

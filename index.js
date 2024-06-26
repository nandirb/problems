let arr1 = [1, 7, 3, 6, 5, 6];
let arr2 = [1, 2, 3];

const set1 = new Set(arr1);
let res = [...set1];
for (let i of arr2) {
  if (!set1.has(i)) {
    res.push(i);
  }
}

console.log(res);

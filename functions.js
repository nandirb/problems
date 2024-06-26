// Check if all chars are unique

const checkStrings = (str) => {
  let chars = {};
  for (let i = 0; i < str.length; i++) {
    if (chars[str[i]]) {
      return false;
    } else {
      chars[str[i]] = true;
    }
  }
  return true;
};
const getRow = (rowIndex) => {
  let res = [1];
  let prev = 1;
  for (let i = 1; i <= rowIndex; i++) {
    let next_val = (prev * (rowIndex - i + 1)) / i;
    res.push(next_val);
    prev = next_val;
  }
  return res;
};

//Өгөгдсөн 2 массивийн огтлолцлыг олж буцаа.
function intersection(arr1, arr2) {
  const obj = {};

  for (let i = 0; i < arr1.length; i++) {
    if (!obj[arr1[i]]) {
      obj[arr1[i]] = 1;
    } else {
      obj[arr1[i]]++;
    }
  }

  const result = [];

  for (let i = 0; i < arr2.length; i++) {
    if (obj[arr2[i]]) {
      result.push(arr2[i]);
      obj[arr2[i]]--;
    }
  }

  return result;
}

//Өгөгдсөн N тооны өндөртэй пирамид ‘*’ ашиглан хэвлэ.
function pyramid(n) {
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "* ".repeat(i));
  }
}

//Өгөгдсөн N тооны факториалыг олж буцаа.
function factorial(n) {
  if (n === 0) return 1;
  for (let i = n - 1; i > 0; i--) n *= i;
  return n;
}

//Өгөгдсөн N тоо хүртэлх бүх тэгш тоог хэвлэ.
function evens(n) {
  for (let i = 2; i <= n; i += 2) console.log(i);
}

//Өгөгдсөн N тоо палиндром тоо эсэхийг шалгаад мөн бол true, биш бол false буцаа.
function isPalindrome(n) {
  let a = n;
  let b = 0;

  while (a > 0) {
    console.log(a, b);
    b = b * 10 + (a % 10);
    a = Math.floor(a / 10);
  }
  return n === b;
}

//Өгөгдсөн N тоо анхны тоо мөн эсэхийг шалгаад мөн бол true, биш бол false буцаа.
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
}

//Өгөгдсөн N тоо хүртэлх бүх анхны тоог хэвлэ.
function getPrimes(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) if (isPrime(arr[i])) result.push(arr[i]);

  return result;
}

//Өгөгдсөн N тоо хүртэлх бүх фибоначийн дарааллын тоог хэвлэ.
function fiboBelowN(n) {
  const result = [1, 1];

  while (result[result.length - 1] + result[result.length - 2] < n)
    result.push(result[result.length - 1] + result[result.length - 2]);

  return result;
}

//Өгөгдсөн массивийн давхцсан тоонуудыг арилгаад буцаа. ([1,2,2,3,4,3] -> [1,2,3,4])
function unique(arr) {
  const set = {};
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!set[arr[i]]) {
      set[arr[i]] = true;
      result.push(arr[i]);
    }
  }

  return result;
}

//Дараалсан бүхэл тоонуудаас бүрдсэн массив байв. Даанч нэг тоо нь алга болчиж. Алга болсон тоог ол.
function findMissingNumber(arr) {
  const min = Math.min(...arr);

  const sum = ((2 * min + arr.length - 1) * arr.length) / 2;

  let arrSum = 0;

  for (let i = 0; i < arr.length; i++) {
    arrSum += arr[i];
  }

  return sum - arrSum;
}

//N тоо өгөгдөв. Паскалын гурвалжны N дахь мөрийг хэвлэ.
function combination(n, k) {
  return factorial(n) / (factorial(k) * factorial(n - k));
}
function nthRowOfPascalTriangle(n) {
  const result = [];

  for (let i = 0; i < n; i++) {
    result.push(combination(n - 1, i));
  }

  return result;
}

//Өгсөн 2 тооны хамгийн их ерөнхий хуваагчийг ол.
function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

//Цифрүүдийн кубуудын нийлбэр нь өөртэйгөө тэнцүү байдаг бүх 3 оронтой тоог ол.
function armstrongNumbers() {
  for (let i = 100; i < 1000; i++) {
    const a = Math.floor(i / 100);
    const b = Math.floor((i % 100) / 10);
    const c = i % 10;

    if (a ** 3 + b ** 3 + c ** 3 === i) console.log(i);
  }
}

//N тоо болон массив өгөгдөв. Нийлбэр нь N байх 2 тоог олж index ийг нь буцаа. олдохгүй бол “Error” буцаа.
function solve(arr, target) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) return [i, j];
    }
  }

  return "Error";
}

//Өгөгдсөн массивийг өсөх эрэмбээр эрэмблэ.
function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;

    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }

    const temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }

  return arr;
}

export {
  checkStrings,
  getRow,
  intersection,
  pyramid,
  factorial,
  evens,
  isPalindrome,
  isPrime,
  getPrimes,
  fiboBelowN,
  unique,
  findMissingNumber,
  nthRowOfPascalTriangle,
  gcd,
  armstrongNumbers,
  solve,
  sort,
};

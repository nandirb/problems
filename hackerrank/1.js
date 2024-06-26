function decToBin(dec) {
  return (dec >>> 0).toString(2);
}

function flipNumbers(bin) {
  let flipped = "";
  for (let i = 0; i < bin.length; i++) {
    if (bin[i] === "0") {
      flipped += "1";
    } else {
      flipped += "0";
    }
  }
  return flipped;
}

function binToDec(bin) {
  return parseInt(bin, 2);
}

function changeAds(base10) {
  const bin = decToBin(base10);
  const flipped = flipNumbers(bin);
  return binToDec(flipped);
}

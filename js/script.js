// Poryadok
let num = 0;
while (num < 10) {
  num++;
  console.log(num);
}

// Parni
const min = 2;
const max = 20;
for (let i = min; i <= max; i += 1) {
  if (i === 0) {
    continue;
  }
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// Multiplication table
const numberMin = 7;
const numberMax = 70;

for (let i = numberMin; i <= numberMax; i += 1) {
  if (i % 7 === 0) {
    console.log(i);
  }
}

// Number n
const n = 100;
for (let i = 0; i <= 200; i++) {
  console.log(i);
  if (i >= n) {
    break;
  }
}

// Number 3
let numWhile = 0;
while (numWhile < 20) {
  if (numWhile % 3 === 0) {
    numWhile++;
    continue;
    }
    console.log(numWhile);
    numWhile++;
}

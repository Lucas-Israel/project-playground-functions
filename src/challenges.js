// Desafio 1
function compareTrue(v1, v2) {
  if (v1 && v2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(b, h) {
  let areaTotal = (b * h) / 2;
  return areaTotal;
}

// Desafio 3
function splitSentence(a) {
  let b = [];
  b = a.split('');
  return b;
}

// Desafio 4
function concatName(a) {
  let la = '';
  for (let i in a) {
    if (a[i]) {
      la = a[i];
    }
  }
  let fa = '';
  for (let i2 in a) {
    if (a[i2]) {
      fa = a[i2];
      break;
    }
  }
  let add = `${la}, ${fa}`;
  return add;
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};

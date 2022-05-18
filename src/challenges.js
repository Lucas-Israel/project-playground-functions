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
  return a.split(' ');
}

// Desafio 4
function concatName(a) {
  let fa = a[0];
  let la = a[a.length - 1];
  let add = la.concat(', ', fa);
  return add;
}

// Desafio 5
function footballPoints(w, t) {
  let a = w * 3;
  let b = a + t;
  return b;
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

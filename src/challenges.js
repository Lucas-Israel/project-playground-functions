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
  let a = w * 3 + t;
  return a;
}

// Desafio 6
function highestCount(a) {
  let mn = a[0];
  let con = 0;
  for (let i in a) {
    if (mn < a[i]) {
      mn = a[i];
    }
  }
  for (let i2 in a) {
    if (mn === a[i2]) {
      con += 1;
    }
  }
  return con;
}

// Desafio 7
function catAndMouse(m, c1, c2) {
  let con1 = Math.abs(m - c1);
  let con2 = Math.abs(m - c2);

  if (con1 === con2) {
    return 'os gatos trombam e o rato foge';
  }
  if (con1 > con2) {
    return 'cat2';
  }
  return 'cat1';
}

// Desafio 8
function fizzBuzz(a) {
  let mens = [];
  for (let i in a) {
    if (a[i] % 3 === 0 && a[i] % 5 === 0) {
      mens[i] = 'fizzBuzz';
    } else if (a[i] % 3 === 0) {
      mens[i] = 'fizz';
    } else if (a[i] % 5 === 0) {
      mens[i] = 'buzz';
    } else {
      mens[i] = 'bug!';
    }
  }
  return mens;
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

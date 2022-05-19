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
function highestCount(number) {
  let maioirNumero = number[0];
  let contador = 0;
  for (let index in number) {
    if (maioirNumero < number[index]) {
      maioirNumero = number[index];
    }
  }
  for (let index2 in number) {
    if (maioirNumero === number[index2]) {
      contador += 1;
    }
  }
  return contador;
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
function fizzBuzz(array) {
  let menssagem = [];
  for (let index in array) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      menssagem[index] = 'fizzBuzz';
    } else if (array[index] % 3 === 0) {
      menssagem[index] = 'fizz';
    } else if (array[index] % 5 === 0) {
      menssagem[index] = 'buzz';
    } else {
      menssagem[index] = 'bug!';
    }
  }
  return menssagem;
}

// Desafio 9
function strArr(str) {
  let strSplit = str.split('');
  return strSplit;
}

function arrStr(arr) {
  let strPush = arr.join('');
  return strPush;
}

const vogal = ['a', 'e', 'i', 'o', 'u'];
const arrayNumeros = ['1', '2', '3', '4', '5'];

function encode(frase) {
  let stringToArray = strArr(frase);
  for (let index in stringToArray) {
    for (let index2 in stringToArray) {
      if (stringToArray[index2] === vogal[index]) {
        stringToArray[index2] = arrayNumeros[index];
      }
    }
  }
  return arrStr(stringToArray);
}

function decode(frase) {
  let stringToArray = strArr(frase);
  for (let index in stringToArray) {
    for (let index2 in stringToArray) {
      if (stringToArray[index2] === arrayNumeros[index]) {
        stringToArray[index2] = vogal[index];
      }
    }
  }
  return arrStr(stringToArray);
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

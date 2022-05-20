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
      contador = 1;
    } else if (maioirNumero === number[index]) {
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
function splitFizz(ara) {
  if (ara % 15 === 0) {
    return 'fizzBuzz';
  } if (ara % 3 === 0) {
    return 'fizz';
  } if (ara % 5 === 0) {
    return 'buzz';
  } return 'bug!';
}

function fizzBuzz(array) {
  for (let index = 0; index < array.length; index += 1) {
    array[index] = splitFizz(array[index]);
  } return array;
}

// Desafio 9
const arrayVogais = ['a', 'e', 'i', 'o', 'u'];
const arrayNumeros = ['1', '2', '3', '4', '5'];

function encode(phrase) {
  for (let index = 0; index < phrase.length; index += 1) {
    phrase = phrase.replaceAll(arrayVogais[index], arrayNumeros[index]);
  } return phrase;
}

function decode(phrase) {
  for (let index = 0; index < phrase.length; index += 1) {
    phrase = phrase.replaceAll(arrayNumeros[index], arrayVogais[index]);
  } return phrase;
}

// Desafio 10
function techList(nomTec, nome) {
  let sort = nomTec.sort();
  if (nomTec[0] === undefined || nome === undefined || nome === '') {
    return 'Vazio!';
  }
  let arr = [];
  for (let index = 0; index < nomTec.length; index += 1) {
    arr.push({ tech: sort[index] });
    arr[index].name = nome;
  }
  return arr;
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

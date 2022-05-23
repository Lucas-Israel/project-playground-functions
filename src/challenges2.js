// Desafio 11
function isInvalid1(arr) {
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] > 9 || arr[index] < 0) {
      return 'invalid';
    }
  }
  return 'valid';
}

function isInvalid2(i, arr) {
  let contador = 0;
  for (let o = 0; o < arr.length; o += 1) {
    if (arr[i] === arr[o]) {
      contador += 1;
    }
  }
  if (contador > 2) {
    return true;
  }
}

function isInvalid3(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    if (isInvalid2(i, arr)) {
      return 'invalid';
    }
  }
  return 'valid';
}

function generatePhoneNumber(arr) {
  let formato = '(xx) xxxxx-xxxx';

  if (arr.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (isInvalid1(arr) === 'invalid' || isInvalid3(arr) === 'invalid') {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  if (arr.length === 11) {
    arr.forEach((numero) => {
      formato = formato.replace('x', numero);
    });
    return formato;
  }
}

// Desafio 12

function triangleCheck(a, b, c) {
  let d = b + c;
  let e = b - c;
  return (a < d && a > Math.abs(e));
}

// Desafio 13
function hydrate(frase) {
  let reg = /\d/g;
  let numeros = frase.match(reg);
  let sum = 0;
  for (let i in numeros) {
    if (numeros[i] > 0 && numeros[i] < 10) {
      sum += parseInt(numeros[i], 10);
    }
  }
  if (sum < 2) {
    return `${sum} copo de água`;
  }
  return `${sum} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};

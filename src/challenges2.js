// Desafio 11
function isInvalid1(arr) {
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] > 9 || arr[index] < 0) {
      return false;
    }
  }
  return true;
}

function isInvalid2(arr) {
  for (let index = 0; index < arr.length; index += 1) {
    let repete = 0;
    for (let index2 = 0; index2 < arr.length; index2 += 1) {
      if (arr[index] === arr[index2]) {
        repete += 1;
      }
    }
    if (repete > 2) {
      return false;
    }
  }
  return true;
}

function generatePhoneNumber(arr) {
  let formato = '(xx) xxxxx-xxxx';

  if (arr.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (isInvalid1(arr) === false || isInvalid2(arr) === false) {
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

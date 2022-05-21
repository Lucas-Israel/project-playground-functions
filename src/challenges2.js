// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
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

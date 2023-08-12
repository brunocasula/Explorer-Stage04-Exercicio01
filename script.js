// Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

// - [ ]  A soma dos dois números;
// - [ ]  A subtração dos dois números;
// - [ ]  A multiplicação dos dois números;
// - [ ]  A divisão dos dois números;
// - [ ]  O resto da divisão dos dois números;

// - [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
// - [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

let numberOne = Number(prompt('Digite o primeiro número:'));
let numberTwo = Number(prompt('Digite o segundo número:'));

function calc(numberOne, numberTwo, operator) {

  switch (operator) {
    case '+':
      return numberOne + numberTwo;
      break;
    case '-':
      return numberOne - numberTwo;
      break;
    case '*':
      return numberOne * numberTwo;
      break;
    case '/':
      return (numberOne / numberTwo).toFixed(2);
      break;
    case '%':
      return numberOne % numberTwo;
      break;

    default:
      return 'Operador inválido!';
      break;
  }

}

alert(`A soma dos dois números é: ${calc(numberOne, numberTwo, '+')}`);
alert(`A subtração dos dois números é: ${calc(numberOne, numberTwo, '-')}`);
alert(`A multiplicação dos dois números é: ${calc(numberOne, numberTwo, '*')}`);
alert(`A divisão dos dois números é: ${calc(numberOne, numberTwo, '/')}`);
alert(`O resto da divisão dos dois números é: ${calc(numberOne, numberTwo, '%')}`);

let pair = (calc(calc(numberOne, numberTwo, '+'), 2, '%') == 0);
let equal = numberOne === numberTwo;

if (pair)
  alert(`A soma dos dois números é par: ${calc(numberOne, numberTwo, '+')}`);
else
  alert(`A soma dos dois números é impar: ${calc(numberOne, numberTwo, '+')}`);

if (equal)
  alert(`Os números inseridos são iguais.`);
else
  alert(`Os números inseridos são diferentes.`);
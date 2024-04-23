let firstNumber = prompt('Digite o primeiro número')
let secondNumber = prompt('Digite o segundo número')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
let div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert('Soma: ' + sum)
alert('Subtração: ' + sub)
alert('Multiplicação: ' + multi)
alert('Divisão: ' + div.toFixed(2))
alert('Resto da divisão: ' + restDiv)

if (sum % 2 === 0) {
  alert('A soma é par')
} else {
  alert('A soma é ímpar')
}

if (firstNumber == secondNumber) {
  alert('Os números são iguais')
} else {
  alert('Os números são diferentes')
}
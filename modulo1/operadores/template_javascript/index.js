console.log ("Olá mundo!")
//Exercicios interpretação de cod
/* 1-
a. false
b. false
c. false
d. false
*/

/*2- No console serão impressos strings "numero x" "numero y"*/

/* 3-
let primeiroNumero = Number (prompt("Digite um numero!"))
let segundoNumero = Number (prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)*/

// Exercicio de escrita de código
console.log ('Exercicio 1')
//a.
let idadeDoUsuario = Number (prompt ("Qual sua idade?"))
//b.
let idadeMelhorAmigue = Number (prompt ("Qual idade do seu melhor amigue?"))
//c.
console.log ("Sua idade é maior que a do seu melhor amigue?")
let resultado = idadeDoUsuario > idadeMelhorAmigue
console.log (resultado)
//d
let diferencaDeIdade = idadeDoUsuario-idadeMelhorAmigue
console.log(diferencaDeIdade)

console.log ('Exercicio 2')
//a
let numeroPar = Number (prompt ("Insira um número par"))
let resto = numeroPar % 2
//b
console.log (resto)
//c
/* O Resto da operação sempre da 0, pois numeros pares divididos por 2 não possuem resto*/
//d
/* O resto diferente de 0 aparece, no console*/

console.log ('Exercicio 3')
//a
let idadeDoUsuarioEmMeses = Number (prompt ("Qual sua idade em meses?"))
console.log (`A idade do usuario em meses é ${idadeDoUsuarioEmMeses}`)
//b
let idadeDoUsuarioEmDias = Number (prompt ("Qual sua idade em dias?"))
console.log (`A idade do usuario em dias é ${idadeDoUsuarioEmDias}`)
//c
let idadeDoUsuarioEmHoras = Number (prompt ("Qual sua idade em horas?"))
console.log (`A idade do usuario em horas é ${idadeDoUsuarioEmHoras}`)

console.log ('Exercicio 4')

let numero1 = Number (prompt ("Digite um número"))
let numero2 = Number (prompt ("Digite mais um número"))

let maiorQue = numero1 > numero2
console.log (maiorQue)

let igual = numero1 === numero2
console.log (igual)

let divisivel = numero2 / numero1
console.log (divisivel)
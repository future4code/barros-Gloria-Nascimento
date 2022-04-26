console.log("Hello world");
/*Exercio 01
a. (10), (50).
b. Daria um erro pois não estaria invocando a função.
Exercicio 02
a. A função analisa se na resposta do usuario contem a palavra cenoura,
retornando o tru ou false
i-true
ii-true
iii-true
*/
console.log(`Exercicio escrita`);

function sobreMim () {
   console.log("Eu sou Glória, tenho 21 anos, moro em Campina Grande e sou Vendeora.");
}
sobreMim()

function quemSouEu(nome, idade, endereco, profissao) {
    nome = "Glória"
    idade = 21
    endereco = "Campia Grande"
    profissao = "Vendedora"
console.log (`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}.`)
}
quemSouEu ()

function a (numero1, numero2) {
    numero1 = 2
    numero2 = 4
    let soma = numero1 + numero2
    console.log( soma );
}
a()


function maiorOuIgual (numero1, numero2) {
    numero1 = 50
    numero2 = 1200
   let resposta = numero1 >= numero2
    console.log (resposta);
}
maiorOuIgual()


function parOuImpar(numero1, numero2) {
    numero1= 20
    numero2= 13
 operacao1 = numero1 % 2
 operacao2 = numero2 % 2
console.log (operacao1, operacao2);

}
parOuImpar ()

function soma (numero1, numero2) {
    numero1 = 30
    numero2 = 3
    let soma = numero1 + numero2
    console.log( soma );
}
soma()

function subtracao (numero1, numero2) {
    numero1 = 30
    numero2 = 3
    let subtracao = numero1 - numero2
    console.log( subtracao );
}
subtracao()

function divisao (numero1, numero2) {
    numero1 = 30
    numero2 = 3
    let divisao = numero1 / numero2
    console.log( divisao );
}
divisao()

function multplicacao (numero1, numero2) {
    numero1 = 30
    numero2 = 3
    let multplicacao = numero1 * numero2
    console.log( multplicacao );
}
multplicacao()
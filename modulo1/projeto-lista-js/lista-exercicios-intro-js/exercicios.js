// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
    altura= Number (prompt("Insira um numero"))
    largura = Number (prompt("insira um numero"))
  resultado = altura*largura
console.log (resultado)
  // implemente sua lógica aqui

}

// EXERCÍCIO 02
function imprimeIdade(anoAtual, anoDeNascimento) {
  anoAtual = Number (prompt(`Insira o ano atual`))
  anoDeNascimento = Number (prompt(`Em que ano nasceu?`))
  resultado = anoAtual - anoDeNascimento
  console.log(resultado);
  // implemente sua lógica aqui

}

// EXERCÍCIO 03
function calculaIMC() {
  peso = Number(prompt("insira seu peso"))
  altura = Number(prompt("insira sua altura"))
  resultado1 = altura*altura
  IMC =  peso / resultado1
  console.log (IMC) ;
  
  // implemente sua lógica aqui

}
// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome, idade, email) {
nome = prompt("Qual seu nome?")
idade = prompt ("Qual sua idade?")
email = prompt ("Qual seu email?")
console.log (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {

  cor1 = prompt("Digite uma cor")
cor2 = prompt ("Digite uma cor")
cor3 = prompt ("Digite uma cor")

let coresFavoritas = [cor1,cor2, cor3]
console.log (coresFavoritas)
  // implemente sua lógica aqui

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
string = (prompt("digite oi")).toUpperCase
console.log(string)
  // implemente sua lógica aqui

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  custo = []
  valorIngresso = []
  quantoPrecisaSerVendido = custo / valorIngresso
  console.log(quantoPrecisaSerVendido);

  // implemente sua lógica aqui

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}
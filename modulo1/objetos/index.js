console.log("Olá mundo");
/* Exercicios de interpretação
1.a) 
Matheus Nachtergaele
Virginia Cavendish
Globo 14hrs

2.a) 
juca, 3, srd
juba, 3, srd
jubo, 3, srd
b) Chama as especificações do objeto anterior.
 
3. a) 
false
indefinido (undefined)
b) Pois não foi atribuido um valor a variavel
*/

//Exercicio Escrito
//1. a)
const eu = {
    nome: "Glória",
    apelido: ["gogo" , "glorinha" , "xuxu"]
}
function apresentacao (nome, apelido) {
    console.log (`Eu sou ${nome}, mas pode me chamar de ${apelido}` )
}
apresentacao(eu.nome, eu.apelido)
//b)
const gogo = {... eu, apelido: ["cansada", "com fome", "com sono"]}
apresentacao(gogo.nome, gogo.apelido)
//2.a)
const pessoa1 ={
    nome: "Glória"
    ,idade: 21
    ,profissao: "Vendedora"
}
const pessoa2 ={
    nome: "Stenio"
    ,idade: 22
    ,profissao: "Contador"
}
//b)
function dados (objeto1, objeto2) {
    lista = [objeto1.nome , objeto1.nome.length, objeto1.idade, objeto1.profissao, objeto1.profissao.length]
    console.log (lista)    
    listaPessoa2 = [objeto2.nome , objeto2.nome.length, objeto2.idade, objeto2.profissao, objeto2.profissao.length]
    console.log (listaPessoa2)  

}
dados (pessoa1, pessoa2)

//3.a)
carrinho = []
//b)
const pinha = {
    nome: 'pinha',
    disponibilidade: true
}
const jaca = {
    nome: 'Jaca',
    disponibilidade: true
}
const graviola = {
    nome: "graviola",
    disponibilidade: true
}
//c)
function mercado (fruta1, fruta2, fruta3){
    carrinho =  [fruta1, fruta2, fruta3]
    console.log(carrinho)
}
mercado (pinha, jaca, graviola)
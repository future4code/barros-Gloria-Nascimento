/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Boas vindas ao projeto BlackJack");

if (confirm(`Quer iniciar uma nova rodada?`)) {
   console.log(`Bora lá`);
} else {
   console.log(`O jogo acabou`);
}
let carta1Usuario = comprarCarta()
let carta2Usuario = comprarCarta()
let pontuacaoUsuario = carta2Usuario.valor + carta2Usuario.valor

let carta1Computador = comprarCarta()
let carta2Computador= comprarCarta()
let pontuacaoComputador = carta2Computador.valor + carta2Computador.valor
   
console.log(`Usuário - cartas: ${carta1Usuario.texto} ${carta2Usuario.texto} - pontuação ${pontuacaoUsuario} `);   
console.log(`Computador - cartas: ${carta1Computador.texto} ${carta2Computador.texto} - pontuação ${pontuacaoComputador} `);

if ( pontuacaoUsuario <= 21 && pontuacaoUsuario > pontuacaoComputador ){
   console.log("O usuário ganhou!"); 
} else 
if (pontuacaoComputador <= 21 && pontuacaoComputador > pontuacaoUsuario ){
   console.log("O computador ganhou!");
} else 
if ( pontuacaoUsuario <= 21 && pontuacaoComputador > 21 ){
   console.log("O usuário ganhou!");
} else 
if (pontuacaoComputador <= 21 && pontuacaoUsuario > 21 ){
   console.log( "O computador ganhou!");
} else {
   console.log("Empate!");
}
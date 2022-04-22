console.log("Oi mundo!");
/*let array
console.log('a. ', array)
Resposta (vai aparecer no console (a e o array vai aparecer como indefinido))

array = null
console.log('b. ', array)
Resposta ( Vai aparecer o b. e o nulo)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
Resposta ( Vai aparecer o numero 11)

let i = 0
console.log ('d. ', array[i])
 (vai aparcer o numero 3)

array[i+1] = 19
console.log('e. ', array)
(11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
0: 3
1: 19
2: 5
3: 6
4: 7
5: 8
6: 9
7: 10
8: 11
9: 12
10: 13
length: 11

const valor = array[i+6]
console.log('f. ', valor)
resposta (9)

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
resposta (SUBI NUM ÔNIBUS EM MIRROCOS 27)*/

console.log(`Exercicio 2`);

let ListaDeTarefas = []
ListaDeTarefas[0] =prompt(`Uma atividade do dia-a-dia`)
ListaDeTarefas[1] =prompt(`Uma atividade do cotidiano`)
ListaDeTarefas[2] =prompt(`Uma atividade diaria`)

console.log(ListaDeTarefas);

let respostaDoUsuario= prompt(`escolha
 uma atividade 0, 1 ou 2`) 
 
 ListaDeTarefas.splice(respostaDoUsuario,1)

 console.log(ListaDeTarefas);
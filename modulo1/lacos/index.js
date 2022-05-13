console.log("olá mundo!");
/*
Exercicio interpretação
1.a) 
O cód. armazena uma variavel 0 e apartir dessa valiavel temos um laço que enquanto "i" for menor quer 5 ele vai adc um numero e imprimi no console o resultado.
2.a)
O cód. vai imprimir os numeros maiores que 18, do array
b)
Sim, bastava usar o length
3.
O cód. adiciona um "*" enquanto a quantidade de asteriscos for menor que a quantidadeAtua + 1 no caso 5
ex:
*
**
***
****
*/
//Exercicio escrita do cód.
//1. 
let pets = Number (prompt("Você tem quantos pets?"))
let nomesPet = []
//a) b) c)
if (pets === 0 ) {
    console.log("Que pena! Você pode adotar um pet!");}
else {
   for (let contadorPets = 0; contadorPets < pets; contadorPets++) {
       nomesPet[contadorPets] = prompt ("Digite o nome de seu pet")
       
   }
   
    console.log(nomesPet);
   } 
   
  //2.
let arrayOriginal = [1,2,3,4,5,6,7,8]
//a)
for (let posicaoArray = 0; posicaoArray < arrayOriginal.length; posicaoArray++) {

    console.log(arrayOriginal[posicaoArray]); 
}
//b) 
for (const valorArrayOriginal of arrayOriginal) {
    let arrayDivididoDez = valorArrayOriginal / 10
    console.log(arrayDivididoDez);
}
//c)
let pares = []
for ( let numPares of arrayOriginal) {
    if (numPares % 2 === 0)
    {pares.push (numPares)}
    
console.log (pares)
}
//d)


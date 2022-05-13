/*
1.a)
O item, a posião do item e o array orignal.
2.a)
O novo array chamado novoArrayB, que seria todos os nomes de cada item do array usuarios.
3.a)
Um array com os apelidos Mandi e Laura
*/ 
// 1.a)
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]
const nomePets = pets.map((item, index, array) => {
    return item.nome
})
// b)
const salsichaPets = pets.filter((item, index, array) => {
    return item.raca === "Salsicha"
})
// c)
const cupomPets = pets.filter((item, index, array) => {
    if (item.raca === "Poodle") {
       return console.log('Você ganhou um cupom de desconto de 10% para tosar o/a '+item.nome)
    }
})
console.log(nomePets);
console.log(salsichaPets);
console.log(cupomPets);
// 2.a)
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]
const nomesProdutos = produtos.map((item, index, array) => {
    return item.nome
})
// b)
const descontoProdutos = produtos.map((item, index, array) => {
    novoItem = {nome: item.nome, preco: (item.preco - (item.preco * (5 / 100)))}
    return novoItem
})
// c)
const bebidasProdutos = produtos.filter((item, index, array) => {
    return item.categoria === "Bebidas"
})
// d)
const ypesProdutos = produtos.filter((item, index, array) => {
    return item.nome.includes("Ypê")
})
// e)
const fraseProdutos = produtos.filter((item, index, array) => {
        return item.nome.includes("Ypê")
})
function frase(itens) {
    let novoArray = []
    for (let index = 0; index < itens.length; index++) {
        novoArray[index] = `Compre ${itens[index].nome} por ${itens[index].preco}`
    }
    return novoArray
}

console.log(nomesProdutos);
console.log(descontoProdutos);
console.log(bebidasProdutos);
console.log(ypesProdutos);
console.log(frase(fraseProdutos));
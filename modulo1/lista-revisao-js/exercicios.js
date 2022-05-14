// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
   
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a,b)=> {
        if (a>b) return 1;
        if (a<b) return -1;
        return 0;
    }) 
    
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  return array.filter((item)=>{
      return item % 2 == 0
  })
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let novoArray = []
    let contador = 0
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element % 2 == 0) {
            novoArray[contador] = element**2;
            contador++
        }
        
    }
    return novoArray
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = array[0]
    for (let index = 1; index < array.length; index++) {
        const element = array[index];
        if (element>maiorNumero) {
            maiorNumero = element  
        }
    }
    return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    const objetos = {
        maiorNumero:0,
        maiorDivisivelPorMenor:0,
        diferenca: 0
    }
    if (num1>num2) {
        objetos.maiorNumero = num1
        objetos.diferenca = (num1-num2)
        if (num1 % num2 == 0) {
            objetos.maiorDivisivelPorMenor = true
        } else {
            objetos.maiorDivisivelPorMenor = false
        }
    } else {
        objetos.maiorNumero = num2
        objetos.diferenca = (num2-num1)
        if (num2 % num1 == 0) {
            objetos.maiorDivisivelPorMenor = true
        } else {
            objetos.maiorDivisivelPorMenor = false
        }
    }
    return objetos
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let pares = []
    let par = 0
    while (pares.length < n) {
        pares.push(par)
        par += 2
    }
    return pares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    let triangulo = ""
    if (ladoA === ladoB & ladoB === ladoC & ladoC === ladoA) {
        triangulo = "Equilátero"
    } 
    if (ladoA !== ladoB & ladoB !== ladoC & ladoA !== ladoC) {
        triangulo = "Escaleno"
    }
    if ((ladoA === ladoB & ladoA != ladoC & ladoB != ladoC) || (ladoB === ladoC & ladoB != ladoA & ladoC != ladoA) || (ladoA === ladoC & ladoB != ladoC & ladoB != ladoA)){
        triangulo = "Isósceles"
    }
    return triangulo
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    novoArray = array.sort((a,b)=>{
        if (a>b) return 1;
        if (a<b) return -1;
        return 0;
    });
    segundoMaiorMenor = [novoArray[novoArray.length - 2], novoArray[1]]
    return segundoMaiorMenor
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor}, e estrelado por ${filme.atores}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   let anonimo = {...pessoa}
   anonimo.nome = "ANÔNIMO"
   return anonimo
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   let pode = pessoas.filter((cliente)=>{
       return (cliente.idade>14 & cliente.idade<60) & cliente.altura>=1.5
   })
   return pode
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let naoPode = pessoas.filter((cliente)=>{
        return (cliente.idade<=14 || cliente.idade>=60) || cliente.altura<1.5
    })
    return naoPode
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    for (const cliente of contas) {
        let gastos = 0
        for (let index = 0; index < cliente.compras.length; index++) {
            gastos += cliente.compras[index];
            //teste do git hub.
        }
        cliente.compras = []
        cliente.saldoTotal -= gastos
    }
    return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    consultas.sort((a,b) => {
        if (a.nome < b.nome) return -1
        if (a.nome > b.nome) return 1;
        return 0;
    });
    return consultas
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    consultas.sort((a,b) => {
        if (a.dataDaConsulta < b.dataDaConsulta) return -1
        if (a.dataDaConsulta > b.dataDaConsulta) return 1;
        return 0;
    });
    return consultas
}
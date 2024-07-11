function* contador (){
    let i = 0
    while(true){
        yield i++
    }
}

// Por se tratar de um loop infinito, independente de quantas vezes chamarmos nossa função, teremos um retorno

const itc = contador()
console.log(itc.next().value) // Outputs: 0
console.log(itc.next().value) // Outputs: 1
console.log(itc.next().value) // Outputs: 2
// etc...

// Ou seja, nós temos um iterador que sempre retorna o próximo valor incrementado.
function* contador (){
    let i = 0
    while(true){
        yield i++
    }
}

// Por se tratar de um loop infinito, independente de quantas vezes chamarmos nossa função, teremos um retorno

// Vamos deixar mais interessante utilizando também um for of

const itc = contador()
for (c of itc){
    console.log(c)
    if(c > 10) break // para interromper o loop após 10 iterações
}
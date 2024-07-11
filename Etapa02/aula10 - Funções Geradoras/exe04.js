function* contador (){
    let i = 0
    while(true){
        yield i++
    }
}

// Por se tratar de um loop infinito, independente de quantas vezes chamarmos nossa função, teremos um retorno

// Vamos deixar mais interessante utilizando também um for

const itc = contador()
for(let i = 0; i < 10; i++){
    console.log(itc.next().value)
}
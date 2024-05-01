//exemplo de condição composta para comparação
function verificarIdade (idade1){
    var idade1 = 22
    
    //condição composta
    if (idade1 < 18) {
        console.log('Menor de idade')
    } else {
        console.log('Maior de idade')
    }
}

//agora nossa condição aninhada
function verificarVoto (idade2){
    var idade2 = 16

    if (idade2 < 16) {
        console.log('Não vota')
    } else {
        if (idade2 >= 16 && idade2 <= 18 || idade2 > 65) {
            console.log('Voto opcional')
        } else {
            console.log('Voto obrigatório')
        }
    }
}

verificarIdade()
verificarVoto()
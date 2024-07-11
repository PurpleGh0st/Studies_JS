function aluno (nome, nota){
    this.nome = nome
    this.nota = nota

    this.dados_anonimos = function(){
        setTimeout(function(){
            this.nome = 'Sara'
            this.nota = 7
            console.log(this.nome)
            console.log(this.nota)
        }, 1000)
    }
    //Quando usadas funções anônimas tradicionais, há sim necessidade de nomear o this dentro das mesmas

    this.dados_arrow = function(){
        setTimeout(() => {
            console.log(this.nome)
            console.log(this.nota)
        }, 2000)
    }
    //Quando usadas funções arrow, não há necessidade de nomear o this dentro das mesmas(prefira sempre o uso delas)
}

const a1 = new aluno('Bruno', 10)

a1.dados_anonimos() // Mostra 'Sara' e 7 após 1 segundos
a1.dados_arrow() // Mostra 'Bruno' e 10 após 2 segundos
function* perguntas (){
    const nome = yield 'Qual seu nome?'
    const esporte = yield 'Qual seu esporte favorito?'
    return `seu nome é ${nome} e seu esporte favorito é ${esporte}`
}

const itp = perguntas()
console.log(itp.next().value)
console.log(itp.next('Vinicius').value)
console.log(itp.next('Basquete').value)
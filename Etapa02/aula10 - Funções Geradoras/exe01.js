function* cores(){
    yield 'Vermelho'
    yield 'Amarelo'
    yield 'Azul'
}

const iterador = cores() // Primeira chamada da função
/*
Quando você chama uma função geradora, ela não executa imediatamente o seu corpo. Em vez disso, ela retorna um objeto iterador.
 */

console.log(iterador.next().value) // Vermelho
console.log(iterador.next().value) // Amarelo
console.log(iterador.next().value) // Azul
console.log(iterador.next().value) // undefined, pois o generator terminou

/*
Cada chamada a next() retorna um objeto com duas propriedades:
value: o valor que foi "yielded".
done: um booleano que indica se a função geradora terminou.
*/
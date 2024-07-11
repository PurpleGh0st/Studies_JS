//Usando new

const f = new Function('n1', 'n2', 'return n1 + n2') // Função Construtor Anônima

console.log(f(2, 3)) // Retorna 5
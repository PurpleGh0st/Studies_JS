//Continue
let n = 0
let max = 50
let pares = 0

for (let i = n; i < max; i++) {
    if (i % 2 !== 0) {
        continue // pula para a próxima execução do código dentro do loop
    }
    pares++
    
}

console.log('Quantidade de pares:', pares)
console.log('Fim!')
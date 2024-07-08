//exemplo1 do Operador Spread (Clonagem de Arrays)
let arr1 = [1, 2, 3]
let arr2 = [...arr1]
console.log(arr2) // [1, 2, 3]

//exemplo2 do Operador Spread (Combinando Arrays)
let n1 = [10, 20, 30]
let n2 = [11, 22, 33]
let n3 = [...n1, ...n2]

console.log(`n1: ${n1}`)
console.log(`n2: ${n2}`)
console.log(`n3: ${n3}`) // [10, 20, 30, 11, 22, 33]

//exemplo3 do Operador Spread (Combinando Objetos)
const jogador1 = {nome: 'Bruno', energia: 100, vidas: 3, magia: 150}
const jogador2 = {nome: 'Bruce', energia: 100, vidas: 5, velocidade: 80}
const jogador3 = {...jogador1, ...jogador2}

console.log(jogador3) // { nome: 'Bruce', energia: 100, vidas: 5, magia: 150, velocidade: 80 }

//exemplo4 do Operador Spread (Passando Arrays como argumentos individuais)
const soma = (v1, v2, v3) => {
    return v1 + v2 + v3
}

let valores = [1, 5 ,4]

console.log(`Soma dos valores: ${soma(...valores)}`) // 10
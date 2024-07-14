// const collection = document.getElementsByTagName('div')
/* 
aqui acima estamos pegando uma coleção de elementos html, porém, para aproveitarmos de uma forma melhor, a transformamos em um array
*/

const collection = [...document.getElementsByTagName('div')] // usando spread e transformando em array

// outra maneira de fazer isso é:

let collection2 = document.getElementsByTagName('div')
collection2 = [...collection2]

console.log(collection)
console.log(collection2)
//o resultado será o mesmo, são apenas formas diferentes de se fazer
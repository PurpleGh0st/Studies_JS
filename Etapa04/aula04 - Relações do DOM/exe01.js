const caixa1 = document.querySelector('#caixa1')
const cursos = [...document.querySelectorAll('.c1')]
const c7_2 = document.querySelector('#curso7_2')

console.log(c7_2)
console.log(c7_2.parentElement) // pegando o elemento pai
console.log(c7_2.parentElement.parentElement) // pegando o elemento pai DO ELEMENTO PAI 

/*
console.log(caixa1.children) // pega os elementos da div 'caixa1'
console.log(caixa1.childElementCount) // retorna o número de elementos filhos
console.log(caixa1.children[4]) // pega o elemento que está na posição 4
console.log(caixa1.firstElementChild) // pega o primeiro elemento
console.log(caixa1.lastElementChild) // pega o último elemento
console.log(document.getRootNode()) // pega o nó raiz
console.log(caixa1.hasChildNodes()) // retorna um valor booleano informando se o elemento possui filhos ou não

console.log(caixa1.firstElementChild.innerHTML = 'TESTE') // interagi diretamente com o elemento para mudar seu valor
console.log(caixa1.children[4].innerHTML = 'MUDEI TAMBÉM') // peguei um elemento em uma posição específica para mudar seu valor
*/
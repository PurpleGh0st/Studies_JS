const query_primeiraDiv = document.querySelector('div') //pega somente o primeiro elemento pedido que ele encontrar, ou seja somente a primeira div com o id 'curso1'

const query_todasDiv = document.querySelectorAll('div') // retorna uma NodeList com todas as divs encontradas no código

const query_todasClasses = document.querySelectorAll('.curso') // usamos o '.' para indicarmos uma classe, e logo em seguida passamos seu nome

const query_cursosC1 = [...document.querySelectorAll('.c1')]

const query_cursosC2 = [...document.querySelectorAll('.c2')]

const query_idEspecifico = document.querySelector ('#curso4') // imprime o elemento cujo id é 'curso4'

const query_todosElementos = document.querySelectorAll('div, p') // além das div, agora também pegamos os parágrafos do código

const query_divComP = document.querySelectorAll('div > p') // imprime os elementos p que estão dentro de divs

console.log(query_primeiraDiv)
console.log(query_todasDiv)
console.log(query_todasClasses)
console.log(query_cursosC1)
console.log(query_cursosC2)
console.log(query_idEspecifico) 
console.log(query_todosElementos)
console.log(query_divComP) 
//Exemplo simples do uso do Operador Spread com DOM
const objs1 = document.getElementsByTagName('div')
const objs2 = [...document.getElementsByTagName('div')]

console.log(objs1)
console.log(objs2)

/*
No exemplo acima estamos convertendo uma NodeList em Array, assim podendo usar vários métodos arrays disponíveis
*/
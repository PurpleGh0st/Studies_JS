let n1 = 10
let n2 = 10
let n3 = 10

n1++ // incrementando em 1.
console.log(n1) // o console mostrará o valor 11

console.log('Pós Incremento')
console.log(n2++) // o console mostrará o valor 10
console.log(n2) // agora o console mostrará o valor 11
/*
explicação:
quando ultilizada a incrementação desta forma, utilizamos o valor de n2 e após isso incrementamos o valor de 1.
*/

console.log('Pré Incremento')
console.log(++n3) // o console mostrará o valor 11
/*
explicação:
quando ultilizada a incrementação desta forma, incrementamos o valor 1 e após isso utilizamos o valor final de n3, sendo 11.
*/
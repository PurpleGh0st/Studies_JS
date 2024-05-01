/*
.toFixed(0) = escolhe quantos números vão após o '.'
.replace('x' , 'y') = substitui um caractere por outro

Diferencial interessante:
.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) = 
'currency'( valor monetário )
currency: 'BRL' (moeda do Brasil)
*/

var n1 = Number(prompt("Digite um número:"))

alert(n1.toFixed(2).replace('.' , ','))

alert(n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))
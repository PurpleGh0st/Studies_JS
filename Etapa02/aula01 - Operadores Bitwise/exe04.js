let n1 = 10

// Operador de deslocamento à esquerda (<<)
let res = n1 << 1 // retornará 20
console.log(res)

/*
explicação:
10 em binário é 00001010, com esse deslocamento esse número come alguns a esquerda e preenche os que sobraram a direita(final) com 0. Assim ficando: 00010100 e resultando no valor 20.

esse operador é muito usado para dobrar valores, tente testar com outros e veja o resultado. 
Sempre que quiser dobrar seu valor, poderá usar a multiplicação ou apenas deslocar 1 bit a esquerda.
*/
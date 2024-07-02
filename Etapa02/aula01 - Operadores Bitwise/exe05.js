let n1 = 10

// Operador de deslocamento à direita (>>)
let res = n1 >> 1 
console.log(res)

/*
explicação:
10 em binário é 00001010, com esse deslocamento esse número come alguns a direita e preenche os que sobraram a esquerda(início) com 0. Assim ficando: 00000101 e resultando no valor 5.

esse operador é muito usado para quebrar valores pela metade, tente testar com outros e veja o resultado. 
Sempre que quiser quebrar seu valor, poderá usar a divisão ou apenas deslocar 1 bit a direita.
*/
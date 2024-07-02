let n1 = 10 //em binário: 00001010
let n2 = 11 //em binário: 00001011

//operador XOR (^) 
let res = n1 ^ n2 //retornará o valor 1
console.log(res)

/*
explicação:
pegando a tabela de números binários, esse operador apenas retornará bits 1 onde tiver o valor 1 isolado, sendo que se houver equivalência o retorno será 0.

no exemplo acima, a junção dos números binários, dariam um resultado igual a : 00000001. Assim retornando 1.
*/
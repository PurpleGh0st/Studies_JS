let n1 = 10 //em binário: 00001010
let n2 = 11 //em binário: 00001011

//operador AND (&) 
let res = n1 & n2 //retornará o valor 10 
console.log(res)

/*
explicação:
pegando a tabela de números binários, onde tiver equivalência de bits 1, ele retornará bit 1, caso contrário retornará 0.

no exemplo acima, a junção dos números binários, dariam um resultado igual a : 00001010. Assim retornando 10.
*/
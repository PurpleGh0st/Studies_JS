/*
! = negação (não)
&& = conjunção (e)
|| = disjunção (ou)

obs: já está na ordem de precedência
*/

//! = só aceita true ou false
//TABELA VERDADE ( && e || )

//Necessita que os dois sejam verdadeiros
true && true // true
true && false // false
false && true // false
false && false // false

//Basta que só um seja verdadeiro
true || true // true
true || false // true
false || true // true
false || false // false

//exemplos...

idade >= 15 && idade <= 17 // a idade está entre 15 e 17?
estado == 'RJ' || estado == 'SP' // o estado é RJ ou SP?
salário > 1500 && sexo != 'M' // o salário é acima de 1500 e não é homem?
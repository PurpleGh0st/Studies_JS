/*
Variáveis em JS:
1. var:
   - Escopo de função ou global.
   - Pode ser redeclarada e atualizada.
   - Não tem escopo de bloco.
2. let:
   - Escopo de bloco.
   - Pode ser atualizada, mas não redeclarada no mesmo escopo.
3. const:
   - Escopo de bloco.
   - Não pode ser reatribuída ou redeclarada no mesmo escopo após a inicialização.
   - No entanto, para objetos e arrays, os valores internos podem ser modificados.


 - Podem começar com letra, $ ou _
 - Não podem começar com números
 - Não podem conter espaços
 - Não podem ser palavras reservadas (function, alert, for, etc.)
 - É possível utilizar acentos ou símbolos
 - É possível utilizar números
*/ 

var nome = 'Júlia' // string
var idade = 19 // number (int)
var salário = 2500.59 // number (float)
var estudante = true // boolean
var telefone = "(00) 00000-0000" // string
var lista = [água, vinho, suco] // object 
var lista2 = {abacaxi, banana, cereja} // object
var função = function (){} // function 
var nada = undefined // undefined
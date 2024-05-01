/*
.length = conta quantos caracteres temos na variável
.toUpperCase() = deixa tudo em MAIÚSCULO 
.toLowerCase()= deixa tudo em minusculo
.trim() = ignora qualquer espaço antes ou depois do conteúdo digitado 
*/

var nome = prompt("Qual o seu nome?")
document.write(`Seu nome tem ${nome.length} letras! <br/>`) 
document.write(`Seu nome em maiúsculo fica ${nome.toUpperCase()} <br/>`)
document.write(`Seu nome em minusculo fica ${nome.toLowerCase()} <br/>`)
/*
Conversão para número:
Number(...) = converte para número int ou float 
parseFloat(...) = converte apenas para número float
parseInt(...) = converte apenas para número int

Caso queira converter number para string, use:
String(n) = converte para string 
ou n.toString() 
*/

var n1 = Number(prompt("Digite um número:"))
var n2 = Number(prompt("Digite outro número:"))

var soma = n1 + n2 

alert("A soma entre " + n1 + " e " + n2 + " é " + soma)


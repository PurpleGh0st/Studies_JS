// while: se uma condição for verdadeira, execute um bloco 
//enquanto uma condição for verdadeira, o loop se repete até que seja falsa.

/*
    while(condição) {
        ....
    }
*/

/*
console.log("oi, tudo bem?")
console.log("oi, tudo bem?")
console.log("oi, tudo bem?")
console.log("oi, tudo bem?")
console.log("oi, tudo bem?")
console.log("oi, tudo bem?")
*/
//vamos simplificar a execução acima usando while

var c = 1

while (c <= 6) {
    console.log("oi, tudo bem?")
    c++ // c = c + 1
}

//caso queira numerar seus passos... 
var c = 1

while (c <= 3) {
    console.log(`Passo ${c}`)
    c++ // c = c + 1
}
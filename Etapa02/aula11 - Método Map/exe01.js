/*
Map percorre uma array, logo retornado uma nova array. Ele não modifica a array original, mas retorna uma nova array com os valores transformados.
*/

const cursos = ['HTML', 'CSS', 'JS', 'PHP']

// sintaxe: array.map(função(elemento, indice))

cursos.map((el, i) => {
    console.log(`Curso ${i+1}: ${el}`)  // imprime o nome do curso e seu índice
})
// const cursos = document.getElementsByClassName('curso') 
// pega os elementos HTML que usam a classe que estamos especificando e nos retorna

const cursos = [...document.getElementsByClassName('curso')]
const cursosC1 = [...document.getElementsByClassName('c1')]
const cursosC2 = [...document.getElementsByClassName('c2')]
const cursoEspecial = [document.getElementsByClassName('curso')[6]] // como transformamos em um array, podemos também pegar um elemento de um indice específico, como mostrado

console.log(cursos)
console.log(cursosC1)
console.log(cursosC2)
console.log(cursoEspecial)

cursoEspecial.map((e) => {
    e.classList.add('destaque')
})
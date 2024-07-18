const caixa1 = document.querySelector('#caixa1')
const cursos = [...document.querySelectorAll('.c1')]
const novosCursos = ['PHP', 'Java', 'C++', 'C#', 'Python']

/*
const novoElemento = document.createElement('div') // criando um novo elemento

caixa1.appendChild(novoElemento) // anexando o novo elemento a div 'caixa1'
novoElemento.innerHTML = 'Python' // dando um texto para ele
novoElemento.setAttribute('id', 'curso7') // dando um novo atributo a ele (nesse caso um id)
novoElemento.setAttribute('class', 'curso c1') 
*/


//incluindo novos cursos usando um array
novosCursos.map((el, i) => {
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute('id', 'curso' + i)
    novoElemento.setAttribute('class', 'curso c1')
    novoElemento.innerHTML = el
    caixa1.appendChild(novoElemento) 
})
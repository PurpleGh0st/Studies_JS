const caixa1 = document.querySelector('#caixa1')
const cursos = [...document.querySelectorAll('.c1')]
const novosCursos = ['PHP', 'Java', 'C++', 'C#', 'Python']

novosCursos.map((el, i) => {
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute('id', 'curso' + i)
    novoElemento.setAttribute('class', 'curso c1')
    novoElemento.innerHTML = el

    const btn_lixeira = document.createElement('img')
    btn_lixeira.setAttribute('src', './trash_icon.png')
    btn_lixeira.setAttribute('class', 'btn_lixeira')
    novoElemento.addEventListener('click', (evt) =>{
        caixa1.removeChild(evt.target.parentNode)
    })
    novoElemento.appendChild(btn_lixeira)
    caixa1.appendChild(novoElemento) 
})
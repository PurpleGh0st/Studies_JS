const caixa1 = document.querySelector('#caixa1')
const btn_cursos = [...document.querySelectorAll('.c1')]

caixa1.addEventListener('click', (evt) => {
    console.log('clicou!')
    console.log(evt.target)
})

btn_cursos.map((el) => {
    el.addEventListener('click', (evt) => {
        evt.stopPropagation() // faz com que evento não propague
    })  
})
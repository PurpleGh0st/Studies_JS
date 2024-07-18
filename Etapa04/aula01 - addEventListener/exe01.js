/*
const c1 = document.getElementById('curso1')

function msg() {
    alert('Curso 1 clicado!')
}

c1.addEventListener('click', msg)
*/

const cursos = [...document.querySelectorAll('.curso')]

cursos.map((el) => {
    el.addEventListener('click', (evt) => {
        const el = evt.target
        el.classList.add('destaque')
        console.log(el.innerHTML, 'foi clicado')
    })
})
const caixa1 = document.getElementById('caixa1')
const caixa2 = document.getElementById('caixa2')
const btn1 = document.getElementById('btn_copiar')
const btn2 = document.getElementById('btn_voltar')
const cursos = [...document.querySelectorAll('.curso')]

cursos.map((el) => {
   el.addEventListener('click', (evt) => {
    const curso = evt.target
    curso.classList.toggle('selecionado')
   }) 
})

btn1.addEventListener('click', (evt) => {
    const selecionados = [...document.querySelectorAll('.selecionado')]
    selecionados.map((el) => {
        caixa2.appendChild(el)
    })
})

btn2.addEventListener('click', (evt) => {
    const selecionados = [...document.querySelectorAll('.selecionado')]
    selecionados.map((el) => {
        caixa1.appendChild(el)
    })
})
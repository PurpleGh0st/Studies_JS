// For Of = Pegar os Elementos
const objs = document.getElementsByTagName('div')

for (o of objs){
    console.log(o.innerHTML) // Para cada objeto, imprimos na tela
    console.log(o.innerHTML = 'Estudos') // Para cada objeto, alteramos seu conteúdo para 'Estudos'
}
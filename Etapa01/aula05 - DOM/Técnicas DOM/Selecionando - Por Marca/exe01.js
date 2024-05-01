// getElementsByTagName()

var p1 = document.getElementsByTagName('p')[0] // seleciona o paragráfo desejado
document.write('Está escrito assim: ' + p1.innerText) // imprime a frase na tela
p1.style.color = 'purple' // muda a cor do paragráfo 1
document.write(p1.innerText)
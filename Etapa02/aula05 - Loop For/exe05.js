// For In = Pegar as Posições (Indices)
const objs = document.getElementsByTagName('div')

for (o in objs){
    console.log(o) // imprime os indices dos objetos
    console.log(objs[o].tagName) // imprime o nome dos objetos
    console.log(objs[o].innerHTML) // imprime os objetos
}
const c1 = document.getElementById('curso1') // pegando o elemento 
console.log(c1) // imprimindo o elemento no console
console.log(c1.id) // imprimindo o nome do id do elemento no console
console.log(c1.innerHTML) // imprimindo seu conteúdo no console

c1.innerHTML = 'Novo conteúdo' // alterando seu conteúdo

console.log(c1.innerHTML) // imprimindo o novo conteúdo no console

// ... pegando o restante dos elementos
const c2 = document.getElementById('curso2') 
const c3 = document.getElementById('curso3')
const c4 = document.getElementById('curso4') 
const c5 = document.getElementById('curso5')
const c6 = document.getElementById('curso6') 

const arrayElementos = [c1, c2, c3, c4, c5, c6]

console.log(arrayElementos) // imprimindo o array criado com o conteúdo dos 6 elementos

/*
for (d of arrayElementos){
    d.innerHTML = "Novos conteúdos" //mudando todo conteúdo dos elementos usando o for...
}
*/ 

arrayElementos.map ((e) => {
    console.log(e.innerHTML) // imprimindo o conteúdo dos elementos novamente usando o map...
})
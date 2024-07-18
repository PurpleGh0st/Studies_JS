// podemos fazer dessa forma
// const ... = (valor, indice, array) => {}
const filtroMaior18 = (valor) => {
    if (valor >= 18)
        return valor
}

const idades = [12, 32, 45, 24, 78, 97, 16, 8]
const maiores = idades.filter(filtroMaior18)
// ou dessa forma
const menores = idades.filter((valor) =>{
    if (valor < 18) 
        return valor
})

console.log(idades)
console.log(maiores)
console.log(menores)
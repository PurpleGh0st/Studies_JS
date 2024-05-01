//na atividade anterior(exe03.js) pegamos uma hora fictícia, mas e se quisermos a hora exata?...

var agora = new Date() 
var horaAtual = agora.getHours()

console.log(`Agora são ${horaAtual} horas`)

if (horaAtual >= 6 && horaAtual < 12) {
    console.log('Bom dia!')
} else if (horaAtual > 12 && horaAtual <= 18) {
    console.log('Boa tarde!')
} else if (horaAtual > 18 && horaAtual <= 24) {
    console.log('Boa noite!')
} else {
    console.log('Boa madrugada!')
}
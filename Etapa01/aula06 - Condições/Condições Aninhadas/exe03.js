var hora = 8
console.log(`Agora são exatas ${hora} horas.`)

if (hora < 12) {
    console.log('Bom dia!')
} else if (hora > 12 && hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}
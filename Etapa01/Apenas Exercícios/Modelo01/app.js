function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('foto')
    var dataAtual = new Date()
    var horaAtual = dataAtual.getHours()

    msg.innerHTML = `Agora são ${horaAtual} horas.`
    if (horaAtual > 6 && horaAtual <= 12){
        img.src = 'img/manhã.jpg'
        document.body.style.background = '#fcc2a3'
    } else if (horaAtual > 12 && horaAtual <= 18){
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#c25f18'
    } else if (horaAtual > 18 && horaAtual <= 24){
        img.src = 'img/noite.jpg'
        document.body.style.background = '#280c47'
    } else {
        img.src = 'img/madrugada.jpg'
        document.body.style.background = '#2e393a'
    }
}
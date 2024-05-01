function verificarNacionalidade() {
    var txtp = document.getElementById('txtp')
    var res = document.querySelector('div#res')
    var nac = txtp.value

    res.innerHTML = `<p>Seu país de origem é ${nac}</p>`

    if (nac == 'Brasil') {
        res.innerHTML += '<p>Você é <strong>brasileiro!</strong></p>'
    } else {
        res.innerHTML += '<p>Você é <strong>estrangeiro!</strong></p>'
    }
}
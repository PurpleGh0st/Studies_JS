function verificarIdade() {
    var dataAtual = new Date()
    var anoAtual = dataAtual.getFullYear()
    var anoNascimento = document.querySelector('input#txtano')
    var resultado = document.querySelector('div#resultado')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (anoNascimento.value.length == 0 || anoNascimento > anoAtual){
        alert("[ERRO] Verifique os dados e tente novamente...")
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = anoAtual - Number(anoNascimento.value)
        resultado.innerHTML = `Idade calculada: ${idade}`
        var sexo = ``

        if (fsex[0].checked) {
            sexo = 'Masculino'

            if (idade >= 0 && idade < 12) {
                //criança
                img.setAttribute('src', 'img/criançaM.jpg')
            } else if (idade >= 12 && idade < 18) {
                //adolescente
                img.setAttribute('src', 'img/adolescenteM.jpg')
            } else if (idade >= 18 && idade < 25) {
                //jovem adulto
                img.setAttribute('src', 'img/jovemAdultoM.jpg')
            } else if (idade >= 25 && idade < 60) {
                //adulto
                img.setAttribute('src', 'img/adultoM.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'img/idosoM.jpg')
            }
        } else if (fsex[1].checked) {
            sexo = 'Feminino'
            
            if (idade >= 0 && idade < 12) {
                //criança
                img.setAttribute('src', 'img/criançaF.jpg')
            } else if (idade >= 12 && idade < 18) {
                //adolescente
                img.setAttribute('src', 'img/adolescenteF.jpg')
            } else if (idade >= 18 && idade < 25) {
                //jovem adulto
                img.setAttribute('src', 'img/jovemAdultoF.jpg')
            } else if (idade >= 25 && idade < 60) {
                //adulto
                img.setAttribute('src', 'img/adultoF.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'img/idosoF.jpg')
            }
        }
        resultado.innerHTML = `Detectamos uma pessoa do sexo ${sexo} com ${idade} anos.`
        resultado.appendChild(img)
    }
}
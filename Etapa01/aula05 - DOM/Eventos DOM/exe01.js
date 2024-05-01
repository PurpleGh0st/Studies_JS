var a = document.getElementById('area')
// cria uma variável buscando o ID da div html, para executarmos as funções com mais facilidade
a.addEventListener('click', clicar) 
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)
// vai ligar nosso js ao html, realizando as funcões sem bagunçar nosso html

function clicar(){
    a.innerText = 'Clicou!'
    a.style.background = 'grey' // muda a cor de fundo ao interagir
}

function entrar(){
    a.innerText = 'Entrou!'
}

function sair(){
    a.innerText = 'Saiu!'
}
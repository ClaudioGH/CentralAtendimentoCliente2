
function myFunction(){
    location.href = "/views/atdandamento.html"
}

function iniciarAtendimento(){
    location.href = "/iniciaratendimento.html"
}

function encerrarAtendimento(){
    location.href = "/atendimento.html"
}

function buscarSenha(){
    location.href = "/configuracao.html"
}


function salvar() {
            const bot = document.getElementById("campo-texto");
            localStorage.setItem("senha", bot.value)
            alert(localStorage.getItem("senha"))
}


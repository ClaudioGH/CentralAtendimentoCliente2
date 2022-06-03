document.addEventListener("DOMContentLoaded", function(evt){
    document.getElementById("btn-buscar").addEventListener("click", function(){
        const dia = document.getElementById("data-atendimento")
        buscarDia(dia.value)
    })
})

const buscarDia = function(dia){

    monitor = document.getElementById("progresso")
    monitor.innerHTML = " "

            
    const uri = `https://central-atendimento-cliente.herokuapp.com/api/atendimentos/dia/${dia}`
    fetch(uri).then(r => r.json().then(r => {
        r.forEach(r => {
            monitor.innerHTML += `<li class="list-group-item">${r.numero_atendimento}${r.sufixo_atendimento}</li>`
        });

    }))

}
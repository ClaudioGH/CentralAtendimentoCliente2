
document.addEventListener("DOMContentLoaded", function(evt){
    document.getElementById("btn-buscar-triagem").addEventListener("click", function(){
        const id = document.getElementById("buscar-triagem")
        buscarId(id.value)
    })
})

const buscarId = function(id){

    triagem = document.getElementById("requerimento")
    triagem.innerHTML = " "

            
    const uri = `https://central-atendimento-cliente.herokuapp.com/api/atendimento/id/${id}`
    fetch(uri).then(r => r.json().then(r => {

        requerimento.innerHTML += `<li class="list-group-item"> Senha:  ${r.numero_atendimento}${r.sufixo_atendimento}</li>`
        requerimento.innerHTML += `<li class="list-group-item"> CPF:  ${r.cpf}</li>`
        requerimento.innerHTML += `<li class="list-group-item"> Data e Hora da Emissao:  ${r.date_time_emissao_atendimento}</li>`
        requerimento.innerHTML += `<li class="list-group-item"> Estado:  ${r.inicio_atendimento}</li>`
        requerimento.innerHTML += `<li class="list-group-item"> Atendimento:  ${r.fim_atendimento}</li>`
        requerimento.innerHTML += `<li class="list-group-item"> ID Atendimento:  ${r.id_atendimento}</li>`
        requerimento.innerHTML += `<li class="list-group-item"> Observações:  ${r.observacoes}</li>`

    }))
 
}



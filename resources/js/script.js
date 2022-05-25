
function chamarSenha(){
    location.href = "atdandamento.html"
}

 function iniciarAtendimento(){
    location.href = "iniciaratendimento.html"
}

function encerrarAtendimento(){
    location.href = "atendimento.html"
}

function buscarSenha(){
    location.href = "/configuracao.html"
}


function salvar() {
            const bot = document.getElementById("campo-texto");
            localStorage.setItem("senha", bot.value)
            alert(localStorage.getItem("senha"))
}

function GetData() {

    const bot = document.getElementById("data-atendimento");
    //localStorage.setItem("senha", bot.value)
    //alert(bot.value)

    const uri = 'https://central-atendimento-cliente.herokuapp.com/api/atendimentos/dia/';
            const initDetails = {
                method: 'get',
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                mode: "cors"
            }

    fetch((uri +bot.value), initDetails )
        .then( response =>
        {
            if ( response.status !== 200 )
            {
                console.log( 'Looks like there was a problem. Status Code: ' +
                    response.status );
                return;
            }

            console.log( response.headers.get( "Content-Type" ) );
            return response.json();
        }
        ).then( myJson =>
        {
            console.log( JSON.stringify( myJson ) );
            alert( JSON.stringify( myJson ) )
            localStorage.setItem("requestResponse", JSON.stringify( myJson ));
        } )
        .catch( err =>
        {
            console.log( 'Fetch Error :-S', err );
        } );
}






function GetFila(){

    itemLista = document.getElementById("fila_espera"); 
    
    const dataAtendimento = document.getElementById("data-atendimento")
    const uri = '/proxy.php';

    itemLista.innerHTML = "";
    const proxyParm = dataAtendimento.value;

    console.log(proxyParm)

    const loader = document.getElementById("progresso")

    //console.log(loader)

   const btnBuscar = document.getElementById("btn-buscar")  
   btnBuscar.setAttribute("disabled", true)

    loader.classList.add("progresso");

    fetch(`${uri}?proxyParm=${proxyParm}`)

       .then( r => r.json().then( r => {     
        r.forEach(e => {

             itemLista.innerHTML += `<li class="list-group-item">${e.numero_atendimento}${e.sufixo_atendimento}</li>`;

             console.log(itemLista)
        
      
             loader.classList.remove("progresso");

             btnBuscar.removeAttribute("disabled");

        });

    })).catch(e => { 
         alert("Ocorreu um erro ao tentar selecionar os atendimentos do dia.")
         loader.classList.remove("progresso");
         btnBuscar.removeAttribute("disabled");
    })

    

}

function atendimentosqueueNext(){

        //localStorage.setItem("senha", bot.value)
        //alert(bot.value)
        itemLista = document.getElementById("proximo");
        const endPoint = 'https://central-atendimento-cliente.herokuapp.com/api/';
        const route = 'atendimentos/queue/next';
        itemLista.innerHTML = "";

        const initDetails = {
            method: 'get',
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            mode: "cors"
        }
        fetch((endPoint + route), initDetails )
            .then( response =>{
                itemLista.innerHTML += `<li class="list-group-item"> Senha:  ${response.numero_atendimento}${response.sufixo_atendimento}</li>`;
                itemLista.innerHTML += `<li class="list-group-item"> Data e Hora da Emissao:  ${response.date_time_emissao_atendimento}`;
                itemLista.innerHTML += `<li class="list-group-item"> CPF:  ${response.cpf}`;
                itemLista.innerHTML += `<li class="list-group-item"> Observacoes:  ${response.observacoes}`;
                if ( response.status !== 200 )
                {
                    console.log( 'Looks like there was a problem. Status Code: ' +
                        response.status );
                    return;
                }
                console.log( response.headers.get( "Content-Type" ) );
                return response.json();
            }
            ).then( myJson =>
            {   
                console.log( JSON.stringify( myJson ) );
            } )
        
}


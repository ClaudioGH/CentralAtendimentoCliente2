
function myFunction(){
    location.href = "/atdandamento.html"
}

function iniciarAtendimento(){
    location.href = "/iniciaratendimento.html"
}

function encerrarAtendimento(){
    location.href = "/atendimento.html"
}
function atualizarAatendimentoJS(){

        const endPoint = 'https://central-atendimento-cliente.herokuapp.com/api';
        const route = '/atendimentos/queue/next';


        const initDetails = {
            method: 'get',
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            mode: "cors"
        }
        
        fetch((endPoint + route), initDetails )
            .then( response =>
            {
                document.getElementById("senhaAtual").innerHTML = `${response.numero_atendimento}${response.sufixo_atendimento}`;

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
                document.getElementById("senhaAtual").innerHTML = `${myJson.numero_atendimento}-${myJson.sufixo_atendimento}`;
                console.log( JSON.stringify( myJson ) );
            } )
            .catch( err =>
            {
                console.log( 'Fetch Error :-S', err );
            } );
}

function fila(){
    const primeiraFila = document.getElementById("primeiroFila");
    primeiraFila.innerHTML = "";

    const uri = `https://central-atendimento-cliente.herokuapp.com/api/atendimentos/queue`
    fetch(uri).then(r=>r.json().then(r => {
       r.forEach(r1=> {

        primeiraFila.innerHTML += `<li class="list-group-item">${r1.numero_atendimento}${r1.sufixo_atendimento}</li>` + `<li class="n2">${r1.numero_atendimento}</li>`
           
       });
    }))
}

function callNext(){
    call = document.getElementById("senhaAtual");
    call.innerHTML = "";

    const uri = `https://central-atendimento-cliente.herokuapp.com/api/atendimento/to_call_next`

    fetch(uri).then(r=>r.json().then(r=>{
        call.innerHTML += `<a id="senhaAtual" class="senhaTelao">${r.numero_atendimento} - ${r.sufixo_atendimento}</a>`
    }))
}
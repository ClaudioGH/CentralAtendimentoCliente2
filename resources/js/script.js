
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
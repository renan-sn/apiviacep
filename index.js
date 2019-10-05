function getCep(e) {
    e.preventDefault();

    /* VARIAVEL RECEBE O VALOR DE ENTRADA DO CAMPO CEP */
    const cep = document.getElementById('cep').value;

    /* REQUISICAO À API */
    let req = new XMLHttpRequest();

    req.open('GET', `https://viacep.com.br/ws/${cep}/json/`, true);

    /* envia a solicitação como null */
    req.send(null);

    /* QUANDO A REQUEISIÇÃO CARREGAR OS DADOS DA API */
    req.onload = function() {  
        
        /* se a solicitação for 'ok' */
        if(req.status === 200) {
            /* variavel recebe os dados da API */
            const dados = req.response;
            console.log(dados);
        }
    }
}


/* EVENTO QUANDO CLICAR NO BOTÃO 'BUSCAR' */
const form = document.getElementById('formulario');
form.addEventListener('submit', getCep, false);
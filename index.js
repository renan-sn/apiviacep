$(function() {
    
    // Quando a página carrega, o campo recebe foco e variavel recebe o valor do cep digitado
    let cep = document.getElementById('cep');
    cep.focus();

    function getCep(event) {
        event.preventDefault();

        // Validar CEP antes da solicitação
        if(cep.value.length < 8 || cep.value.length > 8) {
            alert('O CEP deve conter 8 numeros');
            return;
        }

        // Limpa dados em tela
        $('div.dados').html('');


        /* VARIAVEL RECEBE O VALOR DE ENTRADA DO CAMPO CEP */
        

        /* REQUISICAO À API */
        let req = new XMLHttpRequest();

        req.open('GET', `https://viacep.com.br/ws/${cep.value}/json/`, true);

        /* envia a solicitação como null */
        req.send(null);

        /* QUANDO A REQUEISIÇÃO CARREGAR OS DADOS DA API */
        req.onload = function() {  
            
            /* se a solicitação for 'ok' */
            if(req.status === 200) {
                /* variavel recebe os dados da API */ 
                const data = JSON.parse(req.response);

                renderDados(data);
            } else {
                return;
            }

            // Tratamento dos dados e renderização em tela
            function renderDados(data) {
                setTimeout(function() {  
                    $('div.dados').append(`
                            <h3>Bairro: <strong>${data.bairro}</strong></h3> 
                            <h3> Cep: <strong>${data.cep}</strong></h3>
                            <h3> Complemento: <strong>${data.complemento}</strong></h3>
                            <h3> Ibge: <strong>${data.ibge}</strong></h3>
                            <h3> Localidade: <strong>${data.localidade}</strong></h3>
                            <h3> Logradouro: <strong>${data.logradouro}</strong></h3>
                            <h3> Uf: <strong>${data.uf}</strong></h3>
                    `);
                    
                  cep.value = '';
                  cep.focus();
                }, 1000);

            }
        }
    }


    /* EVENTO QUANDO CLICAR NO BOTÃO 'BUSCAR' CHAMA A FUNÇÃO 'getCep' */
    const form = document.getElementById('formulario');
    form.addEventListener('submit', getCep, false);
});
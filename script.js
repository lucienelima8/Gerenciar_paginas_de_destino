/*JavaScript para mensagem de erro caso o usuário digite um email inválido*/

function btn_enviar_email() {

    /*Pegar os dados digitados no input*/
    let email = document.getElementById("placeholder_input").value;

    /*Variável pra pegar a msgm de erro*/ 
    let msgm_erro = document.getElementById("msgm_erro_email");

    /*Expressão pra validar o email*/
    let caracter = /^[^\s@]+@]+\.^\s@]+$/;

    /*Verificando se o email é válido*/
    if (!caracter.test(email)) {
       
       /*Mensagem de erro*/
       document.getElementById("msgm_erro_email").innerHTML = "Por favor, insira um e-mail válido";

       msgm_erro.style.color = "red";
    
    } else {

        /*Limpar a msgm erro*/
        msgm_erro.innerHTML = '';
        /*document.getElementById("E-mail válido:" , email);*/
        
    }


    
}
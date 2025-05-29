//Obtém  o botão do Formulario 
var botaoEnviar = document.querySelector("#enviar");

botaoEnviar.addEventListener("click",function(event){
    event.preventDefault();
    
    //Captura o formulário
    var form = document.querySelector("#frmContato");

    //Verifica se o usuário preencheu um e-mail e/ou um telefone
    if(form.email.value=='' && form.telefone.value==''){
        return alert('Por favor, preencha um e-mail e/ou um telefone para que possamos retornar o contato');
  } else {
        //Monta o texto de retorno 
    msgRetorno=form.nomesobrenome.value + ", agradecemos o seu contato! <br><br>Vamos avaliar suas considerações e retornaremos"
    
        //Abre a div de retorno
       document.getElementById('formRetorno').style.display="block";
        //Efetua o retorno 
       document.getElementById('textoRetorno').innerHTML=msgRetorno;
        //Fecha o formulário
        document.getElementById('formulario').style.display="none";
        return;
  }
})


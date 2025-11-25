//aqui criaremos a função para buscar dentro da tabela
var campoBusca = document.querySelector("#buscar");

campoBusca.addEventListener("input", function(){
    var todosClientes = document.querySelectorAll(".cliente");

    //verifica se há critétio de busca
    if(this.value.length>0){
        for(var cli=0; cli < todosClientes.length; cli++){
            //captura a coluna do nome dos clientes 
            var tdNome=todosClientes[cli].querySelector(".nome").textContent;

            //aqui faremos com que ao buscar ele busque oque está sendo digitado, conforme for digitando ele já vai mostrando
            var comparavel = tdNome.substring(0, this.value.length);
            
            //verifica se o nome do cliente é o buscado 
            if(this.value.toLowerCase() != comparavel.toLowerCase()){
                todosClientes[cli].classList.add("invisivel");
            } else {
                todosClientes[cli].classList.remove("invisivel");
            }
        }
    } else {
        //Retorna a lista em visualização, quando apagar o campo de buscar 
        for (var cli=0; cli < todosClientes.length; cli++){
            todosClientes[cli].classList.remove("invisivel");
        }
    }
})
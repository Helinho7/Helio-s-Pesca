var botaoAdicionar = document.querySelector("#adicionar-encomenda");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    
    //Captura o formulário de encomendas
    var form = document.querySelector("#frmContato");

    //Captura os dados da nova encomenda
    var encomendaNova = obtemEncomenda(form);

    //Insere a encomenda na tabela
    addEncomendaTabela(encomendaNova);

    //Limpa o formulário
    form.reset();
});

//Função para inserir uma nova encomenda na tabela
function addEncomendaTabela(novaEncomenda){
    //Captura a tabela de encomendas
    var tabela = document.querySelector(".tabela-clientes");

    //Cria a nova linha na tabela
    tabela.appendChild(montaTR(novaEncomenda));
}

function obtemEncomenda(formulario){

    var encomenda = {
        nome: formulario.nome.value,
        produto: formulario.produto.value,
        qtde: formulario.qtde.value,
        unitario: formulario.unitario.value
    }
    return encomenda;
}
function montaTR(dadosEncomenda){
    var tr = document.createElement("tr");

    let qtde = parseInt(dadosEncomenda.qtde);
    let unit = parseFloat(dadosEncomenda.unitario.replace(",", "."));

    tr.appendChild(montaTD(dadosEncomenda.nome));
    tr.appendChild(montaTD(dadosEncomenda.produto));
    tr.appendChild(montaTD(qtde));
    tr.appendChild(montaTD(formatBRL(unit)));
    tr.appendChild(montaTD(calculaTotal(qtde, unit)));

    return tr;
}

function montaTD(dado){
    var td = document.createElement("td");
    td.textContent = dado;

    return td;
}


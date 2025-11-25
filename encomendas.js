//Códigopara calcular o total de 1 linha 
//document.querySelector(".total").textContent=document.querySelector(".qtde").textContent * document.querySelector(".unitario").textContent

//Captura todas as encomendas para calcular o total
var clientes = document.querySelectorAll(".cliente");

for (var count=0; count < clientes.length; count++){

    //Captura a quantidade da encomenda 
    var tab_qtde= clientes[count].querySelector(".qtde").textContent;

    //Captura o valor unitário da encomenda 
    var tab_unitario = clientes[count].querySelector(".unitario").textContent;
   
    
    
    //Calcula o valor total primeira forma
    clientes[count].querySelector(".total").textContent = tab_qtde * tab_unitario;

    //Calcula o valor total segunda forma
    //clientes[count].querySelector(".total").textContent=clientes[count].querySelector(".qtde").textContent * clientes[count].querySelector(".unitario").textContent
    
    //IF PARA VALIDAÇÃO DA QUANTIDADE, PARA QUE  SE FOR DIGITADO ALGO QUE NÃO SEJA UM NÚMERO ELE DA INVÁLIDO
    if(tab_qtde <1 || isNaN(tab_qtde)){
        //Quantidade é inválida
        clientes[count].querySelector(".qtde").textContent = "Quantidade inválida";
        
        //abaixo deixa o local com o campo branco e a escrita vermelha na quantidade dos produtos
        //clientes[count].querySelector(".qtde").style.backgroundColor="white";
        //clientes[count].querySelector(".qtde").style.color="red";

        //Abaixo a forma que vamos utilizar, a estilização é feita no css e puxamos ela aqui, estilização da quantidade invalida
        clientes[count].classList.add("info_invalida2");
        
    }else{
        //Calcula o valor total
        clientes[count].querySelector(".total").textContent = calculaTotal(tab_qtde,tab_unitario);

    }
        //////////////////////////////////// 

    if(tab_unitario <1 || isNaN(tab_unitario)){
        //Valor unitario é inválido
        clientes[count].querySelector(".unitario").textContent = "Valor unitario inválido";
        
        //abaixo fica com o fundo vermelho e a linha branca no valor unitario 
        //clientes[count].querySelector(".unitario").style.backgroundColor="red";
        //clientes[count].querySelector(".unitario").style.color="white";
        
        //OUTRA FORMA ABAIXO 
        //clientes[count].style.backgroundColor: "red";
        //clientes[count].style.color: "White";
        //forma que vamos utilizar, criamos uma classe no css e vamos "puxar" ela aqui 

        clientes[count].classList.add("info_invalida");

    }else{
        //mostra o valor unitario formatado
        clientes[count].querySelector(".unitario").textContent = formatBRL(parseFloat(tab_unitario));
        clientes[count].querySelector(".total").textContent = calculaTotal(tab_qtde,tab_unitario);
    }
}

//Função para cálculo do valor total
function calculaTotal(qtde_encomenda, unit_encomenda){
    var total = 0;

    total = qtde_encomenda * unit_encomenda;

    return total.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'});
}

//Função para formatação do valor únitario 
function formatBRL(unit){
    
    return unit.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'});
}

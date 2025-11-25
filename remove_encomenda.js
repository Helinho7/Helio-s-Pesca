var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){//dbl seria para duplo clique 
    //console.log(event.target);//target acha na tabela //o console seria para verificar oque aconteceu no console
    //Estiliza a exlusão //fizemos a estilização em si no encomenda.css e temos que chamar ela aqui 
    event.target.parentNode.classList.add("fadeOut");
    

    //
    setTimeout(function(){//utilizamos o setTimeout para criar um atraso, para que o efeito de transição na tabela seja visto
        event.target.parentNode.remove();//aqui ele vai escutar quem sofreu o duplo clique e vai exluir o nó inteiro, ou linha toda, por conta do parentNode
    }, 500);
    //função abaixo seria para excluir a linha da tabela 
    
    })
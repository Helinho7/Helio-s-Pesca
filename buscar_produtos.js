    const searchBar = document.getElementById("searchBar");
    const suggestions = document.getElementById("suggestions");

    // 1. Coletar todos os produtos
    const cards = document.querySelectorAll(".container .card");

    // 2. Pegar somente os nomes (h2)
    const productNames = [];
    cards.forEach(card => {
        productNames.push(card.querySelector("h2").textContent.trim());
    });

    // Normalizar texto (remove acentos)
    function normalizar(txt) {
        return txt.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    }

    // 3. Mostrar sugestões conforme digita
    searchBar.addEventListener("input", () => {
        const texto = normalizar(searchBar.value);

        suggestions.innerHTML = "";

        if (texto.length === 0) {
            suggestions.style.display = "none";
            filtrarProdutos("");
            return;
        }

        const filtrados = productNames.filter(nome =>
            normalizar(nome).startsWith(texto)
        );

        // Construir as sugestões
        filtrados.forEach(nome => {
            const li = document.createElement("li");
            li.textContent = nome;

            li.onclick = () => {
                searchBar.value = nome;
                suggestions.style.display = "none";
                filtrarProdutos(nome);
            };

            suggestions.appendChild(li);
        });

        suggestions.style.display = filtrados.length ? "block" : "none";

        filtrarProdutos(texto);
    });

    // 4. Filtrar produtos no grid
    function filtrarProdutos(texto) {
        const termo = normalizar(texto);

        cards.forEach(card => {
            const nome = normalizar(card.querySelector("h2").textContent);
            
            if (nome.startsWith(termo)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }


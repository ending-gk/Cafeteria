function mostrarPopup(mensagem, tipo = "info") {

    // Remove um pop-up anterior, caso exista
    let popupAntigo = document.querySelector(".popup-fundo");

    if (popupAntigo) {
        popupAntigo.remove();
    }

    // Títulos dos pop-ups
    let titulos = {
        sucesso: "Sucesso!",
        erro: "Ops! Algo deu errado.",
        aviso: "Atenção!",
        info: "Informação"
    };

    // Ícones dos pop-ups
    let icones = {
        sucesso: "bi-check-circle-fill",
        erro: "bi-x-circle-fill",
        aviso: "bi-exclamation-triangle-fill",
        info: "bi-info-circle-fill"
    };

    let titulo = titulos[tipo] || titulos.info;
    let icone = icones[tipo] || icones.info;

    // Cria o fundo do pop-up
    let fundo = document.createElement("div");
    fundo.classList.add("popup-fundo");

    // Cria a caixa do pop-up
    let caixa = document.createElement("div");
    caixa.classList.add("popup-caixa", "popup-" + tipo);

    caixa.innerHTML = `
        <div class="popup-icone">
            <i class="bi ${icone}"></i>
        </div>

        <h3>${titulo}</h3>

        <p class="popup-mensagem"></p>

        <button class="popup-botao">Entendi</button>
    `;

    caixa.querySelector(".popup-mensagem").textContent = mensagem;

    // Coloca a caixa dentro do fundo
    fundo.appendChild(caixa);

    // Adiciona o pop-up na página
    document.body.appendChild(fundo);

    // Função para fechar o pop-up
    function fecharPopup() {
        fundo.remove();
    }

    caixa.querySelector(".popup-botao").addEventListener("click", fecharPopup);

    fundo.addEventListener("click", function(evento) {
        if (evento.target === fundo) {
            fecharPopup();
        }
    });
}
const cafes = [
    {
        card_titulo: "Expresso Tradicional",
        card_texto: "Extraído na hora, encorpado e com crema densa.",
        card_preco: "R$ 7,50",
        card_imagem: "../img/cafe.jpeg"
    },
    {
        card_titulo: "Cappuccino Italiano",
        card_texto: "Equilíbrio perfeito entre expresso, leite vaporizado e canela.",
        card_preco: "R$ 12,00",
        card_imagem: "../img/expresso.jpeg"
    },
    {
        card_titulo: "Expresso Descafeinado",
        card_texto: "Todo o sabor e aroma do café tradicional, sem cafeína.",
        card_preco: "R$ 14,50",
        card_imagem: "../img/descafeinado.jpeg"
    }
];

const acompanhamentos = [
    {
        card_titulo: "Pão de Queijo Mineiro",
        card_texto: "Receita artesanal com queijo canastra, servido quentinho.",
        card_preco: "R$ 6,00",
        card_imagem: "../img/pao_queijo.jpg"
    },
    {
        card_titulo: "Croissant de Manteiga",
        card_texto: "Massa folhada francesa super crocante e amanteigada.",
        card_preco: "R$ 11,00",
        card_imagem: "../img/Croissant.jpeg"
    },
    {
        card_titulo: "Cookie Double Chocolate",
        card_texto: "Bolachinha sabor chocolate com pedaços de chocolate ao leite.",
        card_preco: "R$ 8,00",
        card_imagem: "../img/cookie.jpeg"
    }
];

const lista_cafe = document.getElementById('lista-cafes');
const lista_acompanhamentos = document.getElementById('lista-acompanhamentos');
const buscar_item = document.getElementById('buscar-item');

function criarCard(item, index) {
    return `
        <div class="col-12 col-md-6 col-lg-4">
            <div class="card h-100 card_item">
                <img class="card-img-top card_imagem" 
                     src="${item.card_imagem}" 
                     alt="${item.card_titulo}">

                <div class="card-body">
                    <h5 class="card-title card_titulo">${item.card_titulo}</h5>
                    <p class="card-text card_texto">${item.card_texto}</p>

                    <div class="d-flex justify-content-between align-items-center mt-3">
                        <span class="preco card_preco">${item.card_preco}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderizarCardapio(listaCafes, listaAcompanhamentos) {
    lista_cafe.innerHTML = '';
    lista_acompanhamentos.innerHTML = '';

    listaCafes.forEach((cafe, index) => {
        lista_cafe.innerHTML += criarCard(cafe, index);
    });

    listaAcompanhamentos.forEach((acompanhamento, index) => {
        lista_acompanhamentos.innerHTML += criarCard(acompanhamento, index);
    });
}

buscar_item.addEventListener('input', () => {
    const texto = buscar_item.value.toLowerCase().trim();

    const cafesFiltrados = cafes.filter(cafe =>
        cafe.card_titulo.toLowerCase().includes(texto)
    );

    const acompanhamentosFiltrados = acompanhamentos.filter(acompanhamento =>
        acompanhamento.card_titulo.toLowerCase().includes(texto)
    );

    renderizarCardapio(cafesFiltrados, acompanhamentosFiltrados);
});

renderizarCardapio(cafes, acompanhamentos);

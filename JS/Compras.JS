const comida = [
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
    },



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
const cupons = [
    {
        cupon_codigo: 'CAFE-X7K2-9P3M',
        cupon_nome: 'festa_em_mminas'
    },
    {
        cupon_codigo: 'DESC-R3K9-2M7P',
        cupon_nome: 'gratiscoffe'
    }
]
ul = localStorage.getItem('usuarioLogado');
cupomAplicado=false
function add(nome) {
    let carrinho = localStorage.getItem('carrinho_v')
    if (ul == null) {
        alert('faça o login ou crie uma conta para pedir algo')
    }
    else {
        for (let i = 0; i < comida.length; i++) {
            if (nome == comida[i].card_titulo) {
                if (carrinho == null) {
                    carrinho = [];
                }
                else {
                    carrinho = JSON.parse(carrinho)
                }

                carrinho.push(comida[i]);
                localStorage.setItem('carrinho_v', JSON.stringify(carrinho));
                somar()
            }
        }
    }

}
let total
function somar() {
    let carrinho = JSON.parse(localStorage.getItem('carrinho_v'))
    let soma = 0
    for (let i = 0; i < carrinho.length; i++) {
        let preco = carrinho[i].card_preco;
        preco = preco.replace("R$ ", "");
        preco = preco.replace(',', '.')
        preco = parseFloat(preco);
        soma += preco;
    }
    subtotal = document.getElementById('resumo-subtotal');
    subtotal.textContent = "R$ " + soma.toFixed(2);
    let entrega = 5
    total = entrega + soma;
    totala = document.getElementById('resumo-total');
    totala.textContent = "R$ " + total.toFixed(2);
    addi()
}
function aplicarCupom() {
    if(cupomAplicado==true){
        alert('esse cupom já foi usado anteriormente')
    }
    else{
        let carrinho = JSON.parse(localStorage.getItem('carrinho_v'))
        codigo = document.getElementById('input-cupom').value
        let achouCupom = false

        for (let i = 0; i < cupons.length; i++) {
            if (codigo == cupons[i].cupon_codigo) {
                achouCupom = true

                if(cupons[i].cupon_nome=='festa_em_mminas'){
                    for (let c = 0; c < carrinho.length; c++) {
                        if (carrinho[c].card_titulo == 'Pão de Queijo Mineiro') {
                            const desconto = total / 10;
                            total = total - desconto;
                            descontoa = document.getElementById('resumo-desconto');
                            descontoa.textContent = "R$ " + desconto.toFixed(2);
                            totala = document.getElementById('resumo-total');
                            totala.textContent = "R$ " + total.toFixed(2);
                            cupomAplicado=true
                        }
                    }
                }

                if (cupons[i].cupon_nome == 'gratiscoffe') {
                    if (total > 30) {
                        total = total - 5;
                        totala = document.getElementById('resumo-total');
                        totala.textContent = "R$ " + total.toFixed(2);
                        z=0
                        entregaa=document.getElementById('resumo-entrega');
                        entregaa.textContent= "R$ " + z.toFixed(2);
                        cupomAplicado=true
                    }
                    else {
                        alert('o valor do pedido dever ser maior do que 30 Reais');
                    }
                }
            }
        }

        if (achouCupom == false) {
            alert('voce não digitou nenhum cupom ou o cupom digitado não exite')
        }
    }
}
function addi(){
    let carrinho = JSON.parse(localStorage.getItem('carrinho_v'))
    document.getElementById('lista-carrinho').innerHTML ='';
    for(let p=0;p<carrinho.length;p++){
        document.getElementById('lista-carrinho').innerHTML += '<p>'+carrinho[p].card_titulo+'</p>'
        document.getElementById('lista-carrinho').innerHTML += '<button onclick="remover(\'' + carrinho[p].card_titulo + '\')">' +'retirar'+ '</button>'

    }
}
function remover(nome){
    let carrinho = JSON.parse(localStorage.getItem('carrinho_v'))
    for(let pe=0;pe<carrinho.length;pe++){
        if(carrinho[pe].card_titulo==nome){
            carrinho.splice(pe,1);
            localStorage.setItem('carrinho_v', JSON.stringify(carrinho));
            somar();
            addi();
        }
    }
}
function finalizarPedido() {
    let lista = document.getElementById('lista-carrinho');
    
    if (lista.innerHTML.trim() === '') {
        alert('faça um pedido primeiro');
    } 
    else {
        alert('pedido realizado com sucesso');
        lista.innerHTML = '';
        localStorage.removeItem('carrinho_v')
        location.reload()
    }
    
}

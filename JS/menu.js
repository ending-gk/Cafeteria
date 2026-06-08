let caminho;

if (window.location.pathname.includes('Pages')) {
    caminho = '../menu-lateral.html';
} else {
    caminho = '/menu-lateral.html';
}

fetch(caminho)
    .then(menu => menu.text())
    .then(html => {
        document.body.insertAdjacentHTML('afterbegin', html);
        const emPages = window.location.pathname.includes('Pages');
        //caminho para home//
        if (emPages) {
            document.getElementById('home').querySelector('a').href = '../index.html';
        }
        else {
            document.getElementById('home').querySelector('a').href = 'index.html';
        }
        //Caminho para cardápio//
        if (emPages) {
            document.getElementById('cardapio').querySelector('a').href = 'cardapio.html';
        }
        else {
            document.getElementById('cardapio').querySelector('a').href = 'Pages/cardapio.html';
        }
        //Caminho para Compra//
        if (emPages) {
            document.getElementById('compras').querySelector('a').href = 'compras.html';
        }
        else {
            document.getElementById('compras').querySelector('a').href = 'Pages/compras.html';
        }
        //caminho para contato//
        if (emPages) {
            document.getElementById('contato').querySelector('a').href = 'contato.html';
        }
        else {
            document.getElementById('contato').querySelector('a').href = 'Pages/contato.html';
        }
        //Caminho para Perfil//
        if (emPages) {
            document.getElementById('perfil').querySelector('a').href = 'perfil.html';
        }
        else {
            document.getElementById('perfil').querySelector('a').href = 'Pages/perfil.html';
        }
        const exp = document.getElementById("menu-id");
        const navm = document.getElementById("nav-menu");
        const fc = document.getElementById("fc");
        exp.addEventListener('click', () => {
            navm.classList.toggle('expandir')
            if (navm.classList.contains("expandir")) {
                fc.style.display = "block";
            }
            else {
                fc.style.display = "none";
            }
        })
        
            const claro = document.getElementById("claro-icone")
            const escuro = document.getElementById("escuro-icone")
            const fe = document.getElementById('tema')
            claro.style.display = 'block'
            fe.addEventListener('click',mudartema)
            function mudartema() {
                if ((claro.style.display == "block")) {
                    localStorage.setItem('fundo', 'escuro')
                    claro.style.opacity = 0
                    escuro.style.opacity = 1
                    document.documentElement.style.setProperty('--cor-header_footer', '#1a1a1a')
                    document.documentElement.style.setProperty('--cor-menu-lateral', '#2c2c2c')
                    document.documentElement.style.setProperty('--cor-texto', '#f0e6d3')
                    document.documentElement.style.setProperty('--cor-body', 'rgba(30, 20, 15, 0.95)')
                    document.documentElement.style.setProperty('--cor-saibamais', '#c08856')
                    escuro.style.display='block'
                    claro.style.display = 'none'
                }

                else {
                    localStorage.setItem('fundo', 'claro')
                    claro.style.opacity = 1
                    escuro.style.opacity = 0
                    document.documentElement.style.setProperty('--cor-header_footer', '#c08856')
                    document.documentElement.style.setProperty('--cor-menu-lateral', '#a0714f')
                    document.documentElement.style.setProperty('--cor-texto', '#f0e6d3')
                    document.documentElement.style.setProperty('--cor-body', 'rgba(206, 167, 140, 0.658)')
                    document.documentElement.style.setProperty('--cor-saibamais', '#6a3a20')
                    escuro.style.display='none'
                    claro.style.display = 'block'

                }
            }
            
                let cor = localStorage.getItem('fundo');
                if (cor == 'escuro') {
                    claro.style.opacity = 0
                    escuro.style.opacity = 1
                    document.documentElement.style.setProperty('--cor-header_footer', '#1a1a1a')
                    document.documentElement.style.setProperty('--cor-menu-lateral', '#2c2c2c')
                    document.documentElement.style.setProperty('--cor-texto', '#f0e6d3')
                    document.documentElement.style.setProperty('--cor-body', 'rgba(30, 20, 15, 0.95)')
                    document.documentElement.style.setProperty('--cor-saibamais', '#c08856')
                    claro.style.display = "none"
                    escuro.style.display = "block"
                }

                else {
                    claro.style.opacity = 1
                    escuro.style.opacity = 0
                    document.documentElement.style.setProperty('--cor-header_footer', '#c08856')
                    document.documentElement.style.setProperty('--cor-menu-lateral', '#a0714f')
                    document.documentElement.style.setProperty('--cor-texto', '#f0e6d3')
                    document.documentElement.style.setProperty('--cor-body', 'rgba(206, 167, 140, 0.658)')
                    document.documentElement.style.setProperty('--cor-saibamais', '#6a3a20')
                    claro.style.display = "block"
                    escuro.style.display = "none"
                }
            
        
    });


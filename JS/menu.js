let caminho;

 if(window.location.pathname.includes('Pages')){
    caminho = '../menu-lateral.html';
} else {
    caminho = '/menu-lateral.html';
}

fetch(caminho)
.then(menu=> menu.text())
.then(html=> {
    document.body.insertAdjacentHTML('afterbegin',html);
     const emPages = window.location.pathname.includes('Pages');
    //caminho para home//
    if(emPages){
        document.getElementById('home').querySelector('a').href = '../index.html';
    }
    else{
        document.getElementById('home').querySelector('a').href = 'index.html';
    }
    //Caminho para cardápio//
    if(emPages){
    document.getElementById('cardapio').querySelector('a').href = 'cardapio.html';
    } 
    else {
    document.getElementById('cardapio').querySelector('a').href = 'Pages/cardapio.html';
    }
    //Caminho para Compra//
    if(emPages){
    document.getElementById('compras').querySelector('a').href = 'compras.html';
    } 
    else {
    document.getElementById('compras').querySelector('a').href = 'Pages/compras.html';
    }
    //caminho para contato//
    if(emPages){
    document.getElementById('contato').querySelector('a').href = 'contato.html';
    } 
    else {
    document.getElementById('contato').querySelector('a').href = 'Pages/contato.html';
    }
    //Caminho para Perfil//
    if(emPages){
    document.getElementById('perfil').querySelector('a').href = 'perfil.html';
    } 
    else {
    document.getElementById('perfil').querySelector('a').href = 'Pages/perfil.html';
    }
    const exp = document.getElementById("menu-id");
const navm = document.getElementById("nav-menu");
const fc = document.getElementById("fc");
exp.addEventListener('click',()=>{
    navm.classList.toggle('expandir')
    if(navm.classList.contains("expandir")){
        fc.style.display="block";
    }
    else{
        fc.style.display="none";
    }
})
});


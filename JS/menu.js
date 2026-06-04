let caminho;

if(window.location.pathname.includes('Pages')){
    caminho = '../menu-lateral.html';
} else {
    caminho = '/menu-lateral.html';
}
console.log('caminho:', caminho);
fetch(caminho)
.then(menu=> menu.text())
.then(html=> {
    document.body.insertAdjacentHTML('afterbegin',html);
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


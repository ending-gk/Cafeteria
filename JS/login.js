const ap= document.getElementById('fl');
function aparecer(){
    ap.style.display='flex';
}
function fechar(){
    ap.style.display='none';
}
let nome=document.getElementById('nome');
let senha=document.getElementById('senha');
function login(){
    usuarios = JSON.parse(localStorage.getItem('usuarios'));
    let encontrado = false;

for(let usuario of usuarios){
    if(usuario.nome == nome.value && usuario.senha == senha.value){
        encontrado = true;
        break;
    }
}

if(encontrado){
    alert('Login concluído com sucesso!');
    window.location.href = 'index.html';
} else {
    alert('Usuário não encontrado...');
}

}
window.onload = function () {
            if (localStorage.getItem('usuarioLogado') != null) {
                let sumir = document.getElementById('login-s');
                sumir.style.display = 'none';
            }
        }

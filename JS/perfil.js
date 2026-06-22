let nomeu = document.getElementById('nome-u');
let emailu = document.getElementById('e-mail-u');
let telefoneu = document.getElementById('telefone-u');
let listaU = JSON.parse(localStorage.getItem('usuarios')) || [];
let nomeLog = localStorage.getItem('usuarioLogado');
const botaon= document.getElementById('bn')
const botaoe= document.getElementById('be')
const botaot= document.getElementById('bt')
for (let i = 0; i < listaU.length; i++) {
    if(nomeLog==listaU[i].nome){
        nomeu.textContent=listaU[i].nome;
        emailu.textContent=listaU[i].email;
        telefoneu.textContent=listaU[i].telefone;
        break;
    }
}
function mudarnome(){
    let nn = prompt('escreva seu novo nome aqui');
    nomeu.textContent=nn;
    localStorage.setItem('usuarioLogado',(nn));
    for (let i = 0; i < listaU.length; i++) {
        if(nomeLog==listaU[i].nome){
            listaU[i].nome=nn;
            localStorage.setItem('usuarios',JSON.stringify(listaU))
            break;
        }
    }
    
    
}
function mudaremail(){
    let en=prompt('digite seu novo email aqui');
    emailu.textContent=en;
    for (let i = 0; i < listaU.length; i++) {
        if(nomeLog==listaU[i].nome){
            listaU[i].email=en;
            localStorage.setItem('usuarios',JSON.stringify(listaU))
            break;
        }
    }
}
function mudartelefone(){
    let tn=prompt('digite seu novo telefone aqui');
    emailu.textContent=tn;
    for (let i = 0; i < listaU.length; i++) {
        if(nomeLog==listaU[i].nome){
            listaU[i].telefone=tn;
            localStorage.setItem('usuarios',JSON.stringify(listaU))
            break;

        }
    }
    
}
function sair(){
    localStorage.removeItem('usuarioLogado');
    window.location.href = 'login.html';
}
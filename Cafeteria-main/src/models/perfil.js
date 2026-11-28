let nomeu = document.getElementById('nome-u');
let emailu = document.getElementById('e-mail-u');
let telefoneu = document.getElementById('telefone-u');
let listaU = JSON.parse(localStorage.getItem('usuarios')) || [];
let nomeLog = localStorage.getItem('usuarioLogado');
const botaon = document.getElementById('bn');
const botaoe = document.getElementById('be');
const botaot = document.getElementById('bt');
const botaos = document.getElementById('bs')
function poslogin() {
     nomeLog = localStorage.getItem('usuarioLogado');
    if (nomeLog == null) {
        if (botaos) botaos.style.display = 'none';
        if (botaon) botaon.style.display = 'none';
        if (botaoe) botaoe.style.display = 'none';
        if (botaot) botaot.style.display = 'none';
    }
    else {
        if (botaos) botaos.style.display = 'block';
        if (botaon) botaon.style.display = 'block';
        if (botaoe) botaoe.style.display = 'block';
        if (botaot) botaot.style.display = 'block';
    }
    if (nomeu && emailu && telefoneu && listaU.length > 0){
    for (let i = 0; i < listaU.length; i++) {
        if (nomeLog == listaU[i].nome) {
            nomeu.textContent = listaU[i].nome;
            emailu.textContent = listaU[i].email;
            telefoneu.textContent = listaU[i].telefone;
            break;
        }   
    }
}
    if (localStorage.getItem('usuarioLogado') != null) {
        let sumir = document.getElementById('login-s');
        if (sumir) sumir.style.display = 'none';
    }

}
poslogin()
function mudarnome() {
    let nn = prompt('escreva seu novo nome aqui');
    if(nn === null){
        return;
    }
    for (let i = 0; i < listaU.length; i++) {
        if (nn == listaU[i].nome) {
            mostrarPopup('nome já existente', 'info');
            return;
        }
        if (nn == nomeLog) {
            mostrarPopup('nome digitado novamente', 'info');
            return;
        }
    }
    nomeu.textContent = nn;
    localStorage.setItem('usuarioLogado', (nn));
    for (let i = 0; i < listaU.length; i++) {
        if (nomeLog == listaU[i].nome) {
            listaU[i].nome = nn;
            localStorage.setItem('usuarios', JSON.stringify(listaU))
            break;
        }
        else {

        }
    }
    nomeLog = nn;


}
function mudaremail() {
    let en = prompt('digite seu novo email aqui');
    if(en === null){
        return;
    }
    emailu.textContent = en;
    for (let i = 0; i < listaU.length; i++) {
        if (nomeLog == listaU[i].nome) {
            listaU[i].email = en;
            localStorage.setItem('usuarios', JSON.stringify(listaU))
            break;
        }
    }
}
function mudartelefone() {
    let tn = prompt('digite seu novo telefone aqui');
    if(tn === null){
        return;
    }
    if(/^[0-9]+$/.test(tn)){
        telefoneu.textContent = tn;
    for (let i = 0; i < listaU.length; i++) {
        if (nomeLog == listaU[i].nome) {
            listaU[i].telefone = tn;
            localStorage.setItem('usuarios', JSON.stringify(listaU))
            break;

        }
    }
    }
    else{
        mostrarPopup('só é possivel numeros no seu telefone por favor digite no formato (XX)XXXXX-XXXX', 'info');
    }

}
function sair() {
    localStorage.removeItem('usuarioLogado');
    window.location.href = '../../index.html';
}

//função de login//

const ap = document.getElementById('fl');
function aparecer() {
    ap.style.display = 'flex';
}
function fechar() {
    ap.style.display = 'none';
}
let nome = document.getElementById('nome');
let senha = document.getElementById('senha');
function login() {
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    let encontrado = false;
    let valorU = ""
    for (let usuario of usuarios) {
        if (usuario.nome == nome.value && usuario.senha == senha.value) {
            encontrado = true;
            valorU = usuario.nome;
            break;
        }
    }

    if (encontrado) {
        localStorage.setItem('usuarioLogado', valorU)
        mostrarPopup('Login concluído com sucesso!', 'sucesso');
        fechar();
        poslogin();
    } else {
        mostrarPopup('Usuário não encontrado...', 'erro');
    }

}

if (localStorage.getItem('usuarioLogado') != null) {
    let sumir = document.getElementById('login-s');
    if (sumir) sumir.style.display = 'none';
}

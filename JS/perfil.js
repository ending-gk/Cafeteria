let nomeu = document.getElementById('nome-u');
let emailu = document.getElementById('e-mail-u');
let telefoneu = document.getElementById('telefone-u');
let listaU = JSON.parse(localStorage.getItem('usuarios'));
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
        sumir.style.display = 'none';
    }

}
poslogin()
function mudarnome() {
    let nn = prompt('escreva seu novo nome aqui');
    for (let i = 0; i < listaU.length; i++) {
        if (nn == listaU[i].nome) {
            alert('nome já existente');
            return;
        }
        if (nn == nomeLog) {
            alert('nome digitado novamente');
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


}
function mudaremail() {
    let en = prompt('digite seu novo email aqui');
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
    emailu.textContent = tn;
    for (let i = 0; i < listaU.length; i++) {
        if (nomeLog == listaU[i].nome) {
            listaU[i].telefone = tn;
            localStorage.setItem('usuarios', JSON.stringify(listaU))
            break;

        }
    }

}
function sair() {
    localStorage.removeItem('usuarioLogado');
    window.location.href = '../index.html';
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
    usuarios = JSON.parse(localStorage.getItem('usuarios'));
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
        alert('Login concluído com sucesso!');
        fechar();
        poslogin();
    } else {
        alert('Usuário não encontrado...');
    }

}

if (localStorage.getItem('usuarioLogado') != null) {
    let sumir = document.getElementById('login-s');
    sumir.style.display = 'none';
}

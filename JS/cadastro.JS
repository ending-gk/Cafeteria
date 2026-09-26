const form = document.getElementById('formulario');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const telefone = document.getElementById('telefone');
const senha = document.getElementById('senha');
const confirmar_senha = document.getElementById('confirmar_senha');
form.addEventListener('submit', validacao);
function validacao(event) {
    event.preventDefault();
    if (nome.value == '' || email.value == '' || telefone.value == '' || senha.value == '' || confirmar_senha.value == '') {
        alert('Preencha todos os campos para fazer o seu cadastro!')
        return;
    }
    if (/^[0-9]+$/.test(telefone.value) == false) {

        alert('Numero de telefone inválido')
        return
    }
    if (senha.value.length < 8) {
        alert('Sua senha deve conter pelo menos 8 caracteres');
        return;
    }
    if (senha.value != confirmar_senha.value) {
        alert('As digite sua senha novamente corretamente');
        return;
    }
    const usuario_novo = {
        nome: nome.value,
        email: email.value,
        telefone: telefone.value,
        senha: senha.value
    }
    let usuarios;
    if (localStorage.getItem('usuarios') == null) {
        usuarios = []
    }
    else {
        usuarios = JSON.parse(localStorage.getItem('usuarios'));
    }

    for (let i = 0; i < usuarios.length; i++) {
        if (usuario_novo.nome == usuarios[i].nome) {
            alert('Já existe um usuário com esse nome digite outro');
            return;
        }


    }
    usuarios.push(usuario_novo)
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    alert('Cadastro concluido com sucesso');
    localStorage.setItem('usuarioLogado', usuario_novo.nome);
    window.location.href = '../index.html';
    

}
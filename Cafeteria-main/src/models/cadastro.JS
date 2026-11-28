const form = document.getElementById('formulario');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const telefone = document.getElementById('telefone');
const senha = document.getElementById('senha');
const confirmar_senha = document.getElementById('confirmar_senha');
form.addEventListener('submit', validacao);
async function validacao(event) {
    event.preventDefault();
    if (nome.value == '' || email.value == '' || telefone.value == '' || senha.value == '' || confirmar_senha.value == '') {
        mostrarPopup('Preencha todos os campos para fazer o seu cadastro!', 'erro');
        return;
    }
    if (/^[0-9]+$/.test(telefone.value) == false) {

        mostrarPopup('Numero de telefone inválido', 'erro');
        return
    }
    if (senha.value.length < 8) {
        mostrarPopup('Sua senha deve conter pelo menos 8 caracteres', 'erro');
        return;
    }
    if (senha.value != confirmar_senha.value) {
        mostrarPopup('As senhas não coincidem. Digite sua senha novamente corretamente.', 'erro');
        return;
    }
    const usuario_novo = {
        nome: nome.value,
        email: email.value,
        telefone: telefone.value,
        senha: senha.value
    }
    const resposta = await fetch ('http://localhost:3000/cadastro',{
    method:'POST',
    headers:{
        'Content-type': 'application/json'
    },
    body:JSON.stringify(usuario_novo)

});
if(!resposta.ok){
    mostrarPopup('erro ao realizar o cadastro!', 'erro');
    return;
}
else{
    mostrarPopup('Cadastro concluido com sucesso', 'sucesso');
    localStorage.setItem('usuarioLogado', usuario_novo.nome);
    window.location.href = '../../index.html';
}

    
    
    
}

function validarFormulario() {
    var form = document.getElementById('formCadastro');
    var nome = document.getElementById('i_nome').value;
    var sobrenome = document.getElementById('i_sobrenome').value;
    var telefone = document.getElementById('i_telefone').value;
    var email = document.getElementById('i_email').value;
    var numero = document.getElementById('i_num').value;

    if (nome === '' || sobrenome === '' || telefone === '' || email === '' || numero === '') {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return false;
    }

    return true;
}

document.getElementById('formCadastro').addEventListener('submit', function(e) {
    if (!validarFormulario()) {
        e.preventDefault();
    }
});
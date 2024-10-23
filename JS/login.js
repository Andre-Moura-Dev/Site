document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('login-form').addEventListener('submit', function(event) {

        //Impedir o envio do formulário, caso algum dado esteja errado.
        event.preventDefault();

        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        //Tratamento de Erros do login, caso algo esteja errado
        if(username == 'admin' && password == '1234') {
            document.getElementById('login-message').textContent = 'Acesso Garantido';
            document.getElementById('login-message').style.color = 'green';
            alert("Bem vindo Administrador do site.");
            location.href = ('index.html');
        } else {
            document.getElementById('login-message').textContent = 'Acesso Negado';
            document.getElementById('login-message').style.color = 'red';
            alert("Voçe não é o Administrador do site.");
            location.href = ('login.html');
        }
    });
});
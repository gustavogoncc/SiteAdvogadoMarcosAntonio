// java.js

function abrirFormulario() {
    // Alteração aqui: Rolar até o formulário quando o botão/link for clicado
    document.getElementById('formulario').style.display = 'block';
    document.getElementById('formulario').scrollIntoView({ behavior: 'smooth' });
}

function enviarFormulario(event) {
    // Lógica para enviar o formulário, se necessário
    event.preventDefault(); // Para evitar o comportamento padrão do formulário
    // Restante da lógica de envio do formulário, se necessário
}
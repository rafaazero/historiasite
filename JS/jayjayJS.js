let respostas = {};

function responder(pergunta, resultado) {
    respostas[pergunta] = resultado;
}

function mostrarResultado() {
    let pontos = 0;

    for (let pergunta in respostas) {
        if (respostas[pergunta] === "certo") {
            pontos++;
        }
    }

    let mensagem;

    if (pontos === 0) {
        mensagem = "Desiste da vida";
    } else if (pontos === 1) {
        mensagem = "1? fala sério...";
    } else if (pontos === 2) {
        mensagem = "2? éééééééééééééééééééééééééé"
    } else if (pontos === 3) {
        mensagem = "3? o próprio socarates"
    } else if (pontos === 4) {
        mensagem = "4 de 5? ótimo, tá?";
    } else {
        mensagem = "5 de 5? pábéns paçóu!";
    }

    document.getElementById("resultado").innerHTML = mensagem;
}

const botoes = document.querySelectorAll('.resposta');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {

        const pergunta = botao.parentElement;

        pergunta.querySelectorAll('.resposta').forEach(b => {
            b.classList.remove('ativo');
        });

        botao.classList.add('ativo');
    });
});



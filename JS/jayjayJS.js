let pontos = 0;
let respondidas = {};

function responder(pergunta, resultado) {
    if (respondidas[pergunta]) return;

    respondidas[pergunta] = true;

    if (resultado === "certo") {
        pontos++;
    }
}

function mostrarResultado() {
    let mensagem;

    if (pontos === 0) {
        mensagem = "Desiste da vida";
    }
     else if (pontos === 1) {
        mensagem = "1 de 3? fala serio..."
    } else if (pontos === 2) {
        mensagem = "2 de 3? foi bem, tá?"
    } else if (pontos === 3) {
        mensagem = "3 de 3? Vai fazer o ITA é?"
    }
      else if (pontos === 4) {
        mensagem = "4 de 5? Ta bem, tá?"
      }
         else if (pontos === 5) {
        mensagem = "5 de 5? pábéns paçóu"
      }

    document.getElementById("resultado").innerHTML = `${mensagem}`;
}
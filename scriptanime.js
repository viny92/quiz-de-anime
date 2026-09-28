const perguntas = [
    {
        pergunta: "qual e o anime que famoso por causa de sua animação muito bem feita?",
        alternativas: [
            "Kimetsu no Yaiba",
            "One Piece",
            "Dragon Ball",
            "Naruto"
        ],
        correta: 0
    },

    {
        pergunta: "Qual e o anime famoso por ser conhecido como infinito?",
        alternativas: [
            "One Piece",
            "Jujutsu Kaizen",
            "Your name",
            "Bleach"
        ],
        correta: 0
    },

    {
        pergunta: "qual são os três animes conhecidos como Big Three?",
        alternativas: [
            "One Punch Man, One piece, Konosuba",
            "Neon Gênesis Evangelion, Boruto, Dragon Ball",
            "My hero academy, Bleach, Jujutsu Kaizen",
            "One Piece,  Naruto, Bleach"
        ],
        correta: 3
    },

    {
        pergunta: "Qual o maior evento de animes e cultura geek do Brasil?",
        alternativas: [
            "CCXP",
            "Anime Friends",
            "Technogame",
            "Comic Market"
        ],
        correta: 1
    },

    {
        pergunta: "Qual o objetivo do personagem Luffy de One Piece?",
        alternativas: [
            "Ser Hokage",
            "Ser o Rei dos Piratas",
            "Não foi revelado",
            "Ser o maior espadachim do mundo"
        ],
        correta: 2
    }
];

let perguntaAtual = 0;
let pontos = 0;

function mostrarPergunta() {

    const pergunta = perguntas[perguntaAtual];

    document.getElementById("pergunta").textContent =
        pergunta.pergunta;

    const alternativas = document.getElementById("alternativas");

    alternativas.innerHTML = "";

    pergunta.alternativas.forEach((alternativa, indice) => {

        const botao = document.createElement("button");

        botao.textContent = alternativa;

        botao.onclick = function () {
            verificarResposta(indice);
        };

        alternativas.appendChild(botao);
    });
}

function verificarResposta(indice) {

    if (indice === perguntas[perguntaAtual].correta) {
        pontos++;
    }

    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {
        mostrarPergunta();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {

    document.getElementById("pergunta").textContent =
        "Quiz finalizado!";

    document.getElementById("alternativas").innerHTML = "";

    document.getElementById("resultado").textContent =
        "Você acertou " + pontos +
        " de " + perguntas.length + " perguntas.";
}

function reniciarquizz() {
    botaoReiniciar = document.createElement("button");
    botaoReiniciar.textContent = "Jogar Novamente 🔄";
    botaoReiniciar.id = "btn-reiniciar";
}

mostrarPergunta();
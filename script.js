const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");



const perguntas = [
    {
        enunciado: "Qual seria o melhor presidente?",
        alternativas: [
            {
                texto: "Bolsonaro",
                afirmacao: "de acordo com varias pesquisas e de acordo com o povo bolsonaro seria a melhor opcao "
            },
            {
                texto: "Lula ladrao",
                afirmacao: "Ajudar por meio de comidas imoveis ou ate mesmo dinheiro"
            }
        ]
    },
    {
        enunciado: "O Brasil esta mal financeiramente por conta de quem?",
        alternativas: [
            {
                texto: "lula ladrao",
                afirmacao: "Bolsonaro lindo"
            },
            {
                texto: "Bolsonaro lindo",
                afirmacao: "todas opcao justas de acordo"
            }
        ]
    },
    {
        enunciado: "brasil sofrera danos graves ao governo por que?",
        alternativas: [
            {
                texto: "de acrodo com o povo o Lula que nao administra",
                afirmacao: "provas a favor"
            },
            {
                texto: "nao o pais esta bem financeiro, quase nao pagamos imposto",
                afirmacao: "nao o pais nao esta bem"
            }
        ]
    },
      
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = " Um ano depois...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
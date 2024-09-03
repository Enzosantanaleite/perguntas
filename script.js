const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");



const perguntas = [
    {
        enunciado: "qual seria o melhor presidente",
        alternativas: [
            {
                texto: "Bolsonaro
                 ",lula
                afirmacao: "de acordo com varias pesquisas e de acordo com o povo bolsonaro seria a melhor opcao "
            },
            {
                texto: "o melhor sentido de uma boa acao ao pais referente ao rio grande do sul seria",
                afirmacao: "Ajudar por meio de comidas imoveis ou ate mesmo dinheiro"
            }
        ]
    },
    {
        enunciado: "comidas",
        alternativas: [
            {
                texto: "dinheiro donativos",
                afirmacao: "melhores opcao"
            },
            {
                texto: "imoveis para conforto de suas casas",
                afirmacao: "todas opcao justas de acordo"
            }
        ]
    },
    {
        enunciado: "brasil sofrera danos ao esse governo",
        alternativas: [
            {
                texto: "de acrodo com o povo sim",
                afirmacao: "provas a favor"
            },
            {
                texto: "nao o pais esta bem financeiro",
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
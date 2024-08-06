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
                texto: "bolsonaro ou lula!",
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
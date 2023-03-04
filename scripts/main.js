//botões numerais

// const botaoUm = document.getElementById("um");
// const botaoDois = document.getElementById("dois");
// const botaoTres = document.getElementById("tres");
// const botaoQuatro = document.getElementById("quatro");
// const botaoCinco = document.getElementById("cinco");
// const botaoSeis = document.getElementById("seis");
// const botaoSete = document.getElementById("sete");
// const botaoOito = document.getElementById("oito");
// const botaoNove = document.getElementById("nove");
// const botaoZero = document.getElementById("zero");
// const botaoPonto = document.getElementById("ponto");
// const botaoIgual = document.getElementById("igual");

// botões operadores



// const botaoSoma = document.getElementById("soma");
// const botaoSubtracao = document.getElementById("subtracao");
// const botaoDivisao = document.getElementById("divisao");
// const botaomultiplicacao = document.getElementById("multiplicacao");
// const botaoClean = document.getElementById("clean");


//display

// const display = document.getElementById("display");


const calcu = document.getElementById("calculadora");
const botoes = calcu.getElementById("calcBotoes");

const apertar = e.target;
const acao = apertar.dataset.action;

botoes.addEventListener('click', e =>{
    if (e.target.matches('button')){ 
        if(!acao){
            console.log
        }
    }
})



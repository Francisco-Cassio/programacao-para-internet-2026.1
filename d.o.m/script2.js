let h1Saudacao = document.getElementById('saudacao');
let divResultado = document.getElementById('resultado');

divResultado.innerText = h1Saudacao.innerText;

let botao1 = document.getElementById('botao1');

botao1.addEventListener('click', () => {
    alert('Clicou no botão 1');
});

let contador = 0;

let botao3 = document.getElementById('botao3');
let resultado3 = document.getElementById('resultado3');

botao3.addEventListener('click', () => {
    contador++;
    resultado3.innerText = contador;
});

function getById(id) {
    return document.getElementById(id);
}

let num1 = getById('n1').value;
let num2 = getById('n2').value;
let somar = getById('somar');
let resultadoSoma = getById('resultadoSoma');

somar.addEventListener('click', () => {
    let num1 = getById('n1').value;
    let num2 = getById('n2').value;
    let soma = parseFloat(num1) + parseFloat(num2);
    resultadoSoma.innerText = soma;
});
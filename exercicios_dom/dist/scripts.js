function getById(id) {
    const elemento = document.getElementById(id);
    if (!elemento) {
        throw new Error(`Elemento com id "${id}" não encontrado.`);
    }
    return elemento;
}
function getByName(name) {
    return document.getElementsByTagName(name);
}
function ContadorParagrafos() {
    let contagemParagrafos;
    const botaoContador = getById('contador');
    const divContagem = getById('contagem');
    botaoContador.addEventListener('click', () => {
        contagemParagrafos = document.querySelectorAll('#aleatorio p').length;
        divContagem.innerText = 'Quantidade de parágrafos: ' + contagemParagrafos;
    });
}
function AlterarTexto() {
    const botao = getById('botao');
    const limpar = getById('limpar');
    const paragrafo = getById('paragrafo');
    botao.addEventListener('click', function () {
        paragrafo.innerText = 'O texto deste parágrafo foi alterado!';
    });
    limpar.addEventListener('click', () => {
        paragrafo.innerText = '';
    });
}
function AlterarCorTexto() {
    const alterarCor = getById('alterarCor');
    alterarCor.addEventListener('click', () => {
        document.body.style.color = 'pink';
    });
}
function TextoCaixaAlta() {
    const botaoTranferir = getById('transferir');
    const textoReferencia = getById('referencia');
    const caixaAlta = getById('caixa-alta');
    botaoTranferir.addEventListener('click', () => {
        caixaAlta.innerText = textoReferencia.innerText.toUpperCase();
    });
}
function AlterarCoresBody() {
    const botaoAlterar = getById('alterar-cores');
    const botaoResetar = getById('resetar-cores');
    botaoAlterar.addEventListener('click', () => {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    });
    botaoResetar.addEventListener('click', () => {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    });
}
function AlterarTamanhoFonte() {
    let tamanhoPadrao = 16;
    const botaoAumentar = getById('aumentar-textos');
    const botaoDiminuir = getById('diminuir-textos');
    botaoAumentar.addEventListener('click', () => {
        tamanhoPadrao++;
        document.body.style.fontSize = tamanhoPadrao + 'px';
    });
    botaoDiminuir.addEventListener('click', () => {
        tamanhoPadrao--;
        document.body.style.fontSize = tamanhoPadrao + 'px';
    });
}
function Calculadora() {
    const botaoCalcular = getById('calcular');
    const resultado = getById('resultado');
    const soma = getById('soma');
    const subtracao = getById('subtracao');
    const multiplicacao = getById('multiplicacao');
    const divisao = getById('divisao');
    const numero1 = getById('num1');
    const numero2 = getById('num2');
    botaoCalcular.addEventListener('click', () => {
        const val1 = Number(numero1.value);
        const val2 = Number(numero2.value);
        switch (true) {
            case soma.checked:
                resultado.innerText = `Resultado: ${val1 + val2}`;
                break;
            case subtracao.checked:
                resultado.innerText = `Resultado: ${val1 - val2}`;
                break;
            case multiplicacao.checked:
                resultado.innerText = `Resultado: ${val1 * val2}`;
                break;
            case divisao.checked:
                resultado.innerText = `Resultado: ${val1 / val2}`;
                break;
        }
    });
}
function AdicionarALista() {
    const botao = getById('add-button');
    const input = getById('text');
    const lista = getById('ul');
    botao.addEventListener('click', () => {
        const valor = input.value;
        if (valor.trim() !== "") {
            const novoItem = document.createElement('li');
            novoItem.innerText = valor;
            lista.appendChild(novoItem);
            input.value = "";
            input.focus();
        }
        else {
            alert("Digite algo antes de adicionar!");
        }
    });
}
function AdicionarAoSelect() {
    const botao = getById('add-button2');
    const input = getById('input-select');
    const select = getById('select');
    botao.addEventListener('click', () => {
        const valor = input.value;
        if (valor.trim() !== "") {
            const novaOpcao = document.createElement('option');
            novaOpcao.innerText = valor;
            novaOpcao.value = valor.toLowerCase();
            select.appendChild(novaOpcao);
            input.value = "";
            input.focus();
        }
    });
}
ContadorParagrafos();
AlterarTexto();
AlterarCorTexto();
TextoCaixaAlta();
AlterarCoresBody();
AlterarTamanhoFonte();
Calculadora();
AdicionarALista();
AdicionarAoSelect();
export {};

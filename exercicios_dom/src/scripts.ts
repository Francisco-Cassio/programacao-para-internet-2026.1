export{}
function getById<T extends HTMLElement>(id: string): T {
    const elemento = document.getElementById(id);
    if (!elemento) {
        throw new Error(`Elemento com id "${id}" não encontrado.`);
    }
    return elemento as T;
}

function getByName(name: string): HTMLCollectionOf<Element> {
    return document.getElementsByTagName(name);
}

function ContadorParagrafos(): void {
    let contagemParagrafos: number;
    const botaoContador = getById<HTMLButtonElement>('contador');
    const divContagem = getById<HTMLDivElement>('contagem');

    botaoContador.addEventListener('click', (): void => {
        contagemParagrafos = document.querySelectorAll('#aleatorio p').length;
        divContagem.innerText = 'Quantidade de parágrafos: ' + contagemParagrafos;
    });
}

function AlterarTexto(): void {
    const botao = getById<HTMLButtonElement>('botao');
    const limpar = getById<HTMLButtonElement>('limpar');
    const paragrafo = getById<HTMLParagraphElement>('paragrafo');

    botao.addEventListener('click', function(): void {
        paragrafo.innerText = 'O texto deste parágrafo foi alterado!';
    });

    limpar.addEventListener('click', (): void => {
        paragrafo.innerText = '';
    });
}

function AlterarCorTexto(): void {
    const alterarCor = getById<HTMLButtonElement>('alterarCor');

    alterarCor.addEventListener('click', (): void => {
        document.body.style.color = 'pink';
    });
}

function TextoCaixaAlta(): void {
    const botaoTranferir = getById<HTMLButtonElement>('transferir');
    const textoReferencia = getById<HTMLParagraphElement>('referencia');
    const caixaAlta = getById<HTMLParagraphElement>('caixa-alta');

    botaoTranferir.addEventListener('click', (): void => {
        caixaAlta.innerText = textoReferencia.innerText.toUpperCase();
    });
}

function AlterarCoresBody(): void {
    const botaoAlterar = getById<HTMLButtonElement>('alterar-cores');
    const botaoResetar = getById<HTMLButtonElement>('resetar-cores');

    botaoAlterar.addEventListener('click', (): void => {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    });

    botaoResetar.addEventListener('click', (): void => {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    });
}

function AlterarTamanhoFonte(): void {
    let tamanhoPadrao: number = 16;
    const botaoAumentar = getById<HTMLButtonElement>('aumentar-textos');
    const botaoDiminuir = getById<HTMLButtonElement>('diminuir-textos');

    botaoAumentar.addEventListener('click', (): void => {
        tamanhoPadrao++;
        document.body.style.fontSize = tamanhoPadrao + 'px';
    });

    botaoDiminuir.addEventListener('click', (): void => {
        tamanhoPadrao--;
        document.body.style.fontSize = tamanhoPadrao + 'px';
    });
}

function Calculadora(): void {
    const botaoCalcular = getById<HTMLButtonElement>('calcular');
    const resultado = getById<HTMLDivElement>('resultado');

    const soma = getById<HTMLInputElement>('soma');
    const subtracao = getById<HTMLInputElement>('subtracao');
    const multiplicacao = getById<HTMLInputElement>('multiplicacao');
    const divisao = getById<HTMLInputElement>('divisao');

    const numero1 = getById<HTMLInputElement>('num1');
    const numero2 = getById<HTMLInputElement>('num2');

    botaoCalcular.addEventListener('click', (): void => {
        const val1: number = Number(numero1.value);
        const val2: number = Number(numero2.value);

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

function AdicionarALista(): void {
    const botao = getById<HTMLButtonElement>('add-button');
    const input = getById<HTMLInputElement>('text');
    const lista = getById<HTMLUListElement>('ul');

    botao.addEventListener('click', (): void => {
        const valor: string = input.value;

        if (valor.trim() !== "") { 
            const novoItem: HTMLLIElement = document.createElement('li');
            novoItem.innerText = valor;
            lista.appendChild(novoItem);
            input.value = "";
            input.focus();
        } else {
            alert("Digite algo antes de adicionar!");
        }
    });
}

function AdicionarAoSelect(): void {
    const botao = getById<HTMLButtonElement>('add-button2');
    const input = getById<HTMLInputElement>('input-select');
    const select = getById<HTMLSelectElement>('select');

    botao.addEventListener('click', (): void => {
        const valor: string = input.value;

        if (valor.trim() !== "") { 
            const novaOpcao: HTMLOptionElement = document.createElement('option');
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
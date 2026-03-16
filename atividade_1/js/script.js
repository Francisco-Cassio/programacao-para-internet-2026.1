function button() {
    const botao = document.createElement('button');
    botao.textContent = 'Alternar Estilo';

    botao.style.display = 'block';
    botao.style.padding = '10px 20px';
    botao.style.margin = '20px auto';
    botao.style.cursor = 'pointer';
    botao.style.fontSize = '16px';

    document.body.appendChild(botao);

    let estiloAtual = 1;
    const link = document.querySelector('link[rel="stylesheet"]');
    const styles = ['css/style.css', 'css/style2.css', 'css/style3.css'];

    botao.onclick = function() {
        estiloAtual++;
        
        if (estiloAtual > 3) {
            estiloAtual = 1;
        }

        if (estiloAtual === 1) {
            link.href = styles[0];
        } else if (estiloAtual === 2) {
            link.href = styles[1];
        } else {
            link.href = styles[2];
        }
    };
}

button();
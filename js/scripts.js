//! Seleção de elementos

const formMultiplicacao = document.querySelector("#formMultiplicacao");
const numberInput = document.querySelector("#number");
const multiplicacaoInput = document.querySelector("#multiplicacao");

const tabelaMultiplicacao = document.querySelector("#operacoesMultiplicacao");
const tituloMultiplicacao = document.querySelector("#tituloMultiplicacao span")

//! Funções

const criarTabela = (numero, numeroMultiplicador) => {
    tabelaMultiplicacao.innerHTML = "";

    for (i = 1; i <= numeroMultiplicador; i++){
        const resultado = numero * i;

        const template = `
        <div class="row">
            <div class="operation">${numero} x ${i} = </div>
            <div class="resultado"> ${resultado}</div>
        </div>
        `;

        /* inicio o DOMParser */
        const parser = new DOMParser();

        /* Transformo a string do template para html */
        const htmlTemplate = parser.parseFromString(template, "text/html");

        /* Selecionando o row dinamico no html */
        const row = htmlTemplate.querySelector(".row");

        /* Adicionando ao html */
        tabelaMultiplicacao.appendChild(row);
    }

    tituloMultiplicacao.innerText = numero;
}




//! Eventos

formMultiplicacao.addEventListener("submit", (e)=> {
    // para não atualizar a pagina no submit
    e.preventDefault();

    const numeroMultiplicacao = +numberInput.value;

    const numeroMultiplicador = +multiplicacaoInput.value;

    /* Msg de erro */
    if(!numeroMultiplicacao || !numeroMultiplicador){
        console.log("Não há um dos dois campos ou nenhum");
        return;
    }

    criarTabela(numeroMultiplicacao, numeroMultiplicador);
})
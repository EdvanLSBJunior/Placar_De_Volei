const nomeTimeA = prompt('Digite o nome do time A');
const nomeTimeB = prompt('Digite o nome do time B');

//direciona os valores que queremos editar no DOM
const nomeA_HTML = document.getElementById('nomeTimeA');
const nomeB_HTML = document.getElementById('nomeTimeB');
const pontoA_HTML = document.getElementById('pontuacaoA');
const pontoB_HTML = document.getElementById('pontuacaoB');
const setA_HTML = document.getElementById('setA');
const setB_HTML = document.getElementById('setB');

//escreve no DOM os nomes dos times inseridos no prompt
nomeA_HTML.innerText = nomeTimeA;
nomeB_HTML.innerText = nomeTimeB;

//Variáveis para armazenar os valores iniciais dos pontos
let pontoA = 0;
let pontoB = 0;
let setA = 0;
let setB = 0;

// Apenas para certificar que o placar iniciará com a contagem 0 especificada acima. escreve no DOM os valores acima.
pontoA_HTML.innerText = pontoA;
pontoB_HTML.innerText = pontoB;
setA_HTML.innerText = setA;
setB_HTML.innerText = setB;

pontoA_HTML.addEventListener('click', function () {
    //o que estiver aqui dentro será executado
    //quando o pontoA_HTML for clicado
    pontoA++;
    pontoA_HTML.innerText = pontoA;
    verificarFimDoSet();
});

pontoB_HTML.addEventListener('click', function () {
    //o que estiver aqui dentro será executado
    //quando o pontoB_HTML for clicado
    pontoB++;
    pontoB_HTML.innerText = pontoB;
    verificarFimDoSet();
});

//Verifica o fim do set e escreve o novo valor do set
verificarFimDoSet = () => {

    if (pontoA >= 21 && pontoA - pontoB >= 2) {
        alert(nomeTimeA + ' venceu o set');
        setA++;
        setA_HTML.innerText = setA;
        zerarPlacarDoSetAnterior();
        verificarFimDoJogo();
        }
    
    if (pontoB >= 21 && pontoB - pontoA >= 2) {
        alert(nomeTimeB + ' venceu o set');
        setB++
        setB_HTML.innerText = setB;
        zerarPlacarDoSetAnterior();
        verificarFimDoJogo();
    }

}
zerarPlacarDoSetAnterior = () => {
    //Zera o placar
    pontoA = 0;
    pontoB = 0;
    //Atualiza na tela
    pontoA_HTML.innerText = pontoA;
    pontoB_HTML.innerText = pontoB;
}

verificarFimDoJogo = () => {

    if (setA >= 3 && setB <=2 ) {
        alert (nomeTimeA + ' venceu o jogo')
        document.location.reload(true); // Recarrega a página atual sem usar o cache
    }
    if (setB >= 3 && setA <= 2) {
        alert (nomeTimeB + ' venceu o jogo')
        document.location.reload(true);
    }
}
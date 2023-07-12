//OBJETIVO1: Quando passar o mouse em cima do personagemna listagem, devemos selecioná-lo.
const personagens = document.querySelectorAll('.personagem');

personagens.forEach(personagem => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
        removerSelecaoDoPersonagem();
        personagem.classList.add('selecionado');

        //OBJETIVO2: quando passar o mouse por cima do personagem na listagem, trocar a imagem, o nome e a descriç~çao do personagem grande.
        alterarImagemPersonagemSelecionado(personagem);
        alterarNomePersonagemSelecionado(personagem);
        alterarDescricaoPersonagemSelecionado(personagem);
    })
});

//Funcoes chamadas
function alterarDescricaoPersonagemSelecionado(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');

    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

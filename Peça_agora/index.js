document.addEventListener('DOMContentLoaded', () => {
    const concluirBtn = document.getElementById('concluirBtn');
    const homeBtn = document.getElementById('homeBtn');
    const cardapioBtn = document.getElementById('cardapioBtn');

    if (concluirBtn) {
        concluirBtn.addEventListener('click', () => {
            // abre em nova aba (como estava originalmente)
            window.open('../Concluir/concluir.html', '_blank');
        });
    }

    if (homeBtn) {
        homeBtn.addEventListener('click', () => {
            window.location.href = '../index.html';
        });
    }

    if (cardapioBtn) {
        cardapioBtn.addEventListener('click', () => {
            window.location.href = '../Cardápio/cardapio.html';
        });
    }
});
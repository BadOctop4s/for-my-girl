function mostrarMensagem() {
  const msg = document.getElementById('mensagem');
  msg.innerText = "Você é o melhor presente que a vida me deu! 💝";
  msg.classList.remove('oculto');
}

function abrirCarta(el) {
  el.classList.toggle('aberta');
}

// ❤️ Habilita corações voando em loop
function gerarCoracoes() {
  const fundo = document.querySelector('.fundo-cora');
  setInterval(() => {
    const novo = document.createElement('div');
    novo.classList.add('coracao');
    novo.style.left = Math.random() * 100 + 'vw';
    fundo.appendChild(novo);
    setTimeout(() => {
      fundo.removeChild(novo);
    }, 10000);
  }, 1000);
}

gerarCoracoes();

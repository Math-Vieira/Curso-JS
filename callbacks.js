function aleatorio(min, max) {
  min = min * 1000;
  max = max * 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function executaNaOrdem(mensagem, tempo, callback) {
  setTimeout(() => {
    console.log(mensagem);
    if (callback) callback();
  }, tempo);
}

executaNaOrdem("mensagem1", aleatorio(1, 4), function () {
  executaNaOrdem("mensagem2", aleatorio(1, 4), function () {
    executaNaOrdem("mensagem3", aleatorio(1, 4), function () {
      executaNaOrdem("mensagem4", aleatorio(1, 4));
    });
  });
});

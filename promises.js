function aleatorio(min, max) {
  min = min * 1000;
  max = max * 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

/* function executaNaOrdem(mensagem, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(mensagem)
      resolve(mensagem);
    }, tempo);
  });
} */
/* 
executaNaOrdem("mensagem1", aleatorio(1, 4))
  .then((mensagem) => {
    return executaNaOrdem("mensagem2", aleatorio(1, 4));
  })
  .then((mensagem) => {
    return executaNaOrdem("mensagem3", aleatorio(1, 4));
  })
  .then((mensagem) => {
    return executaNaOrdem("mensagem4", aleatorio(1, 4));
  })
  .then((mensagem) => {
    return executaNaOrdem("mensagem5", aleatorio(1, 4));
  })
  .then((mensagem) => {
    return executaNaOrdem("mensagem6", aleatorio(1, 4));
  });
 */


function executaNaOrdem ( msg, tempo ) {

  return new Promise ( (resolve, reject) => {
    setTimeout ( () => {
      console.log(msg);
    if (typeof msg === 'string') resolve(msg)
    reject ('erro encontrado : ' + msg);
    return;
      
    }, tempo );
  }) 
}



async function executando() {
  try {
  const fase1 = await executaNaOrdem(5, aleatorio(1, 3));
  const fase2 = await executaNaOrdem("fase2", aleatorio(1, 3));
  const fase3 = await executaNaOrdem("fase3", aleatorio(1, 3));
  const fase4 = await executaNaOrdem("fase4", aleatorio(1, 3));
} catch (e) {
  console.log(e)
}
}

executando();

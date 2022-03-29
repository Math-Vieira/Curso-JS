const container = document.querySelector('.container') ;

function minhafuncao () {
    const elementos = ['p', 'div', 'footer', 'section'];
    const frases = ['Frase 1', 'Frase 2', 'Frase 3', 'Frase 4'];

    for (let i = 0 ; i < elementos.length ; i++) {
    const elemento = elementos[i]
    const frase = frases[i]
    const create = document.createElement (elementos[i]);
    create.innerHTML = frase ;
    container.appendChild(create);
    
}
    

}



minhafuncao();
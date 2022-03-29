function meuEscopo(){
    /* fazendo uma seleção com SELETOR CSS */
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
  
    const pessoas = [];
    
    let contador = 0 ;
    function recebeEventoForm(evento){
       evento.preventDefault();
       const nome = form.querySelector('.nome');
       const sobrenome = form.querySelector('.sobrenome');
       const peso = form.querySelector('.peso');
       const altura = form.querySelector('.altura');
    
       const person = {
           nome: nome.value,
           sobrenome: sobrenome.value,
           peso: peso.value,
           altura: altura.value
       };

       pessoas[contador] = person;
       
       resultado.innerHTML += `${nome.value} `;
       resultado.innerHTML += `${sobrenome.value} `;
       resultado.innerHTML += `${peso.value} `;
       resultado.innerHTML += `${altura.value} <br>`;

       console.log(pessoas[contador]);
    }
    form.addEventListener('submit',recebeEventoForm);

    const nome = form.querySelector('.nome');
    nome.addEventListener('change', (evento) => {
        evento.preventDefault();
        console.log(nome.value);
    })
  }
  meuEscopo();
const cronometro = document.querySelector('.cronometro');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

iniciar.addEventListener('click', function(event){
    clearInterval(relogio);
    iniciaRelogio();
    cronometro.classList.remove('pausado')
});
pausar.addEventListener('click', function(event){
    clearInterval(relogio);
    cronometro.classList.add('pausado')
});
zerar.addEventListener('click', function(event){
    clearInterval(relogio);
    cronometro.innerHTML = '00:00:00'
    segundo = 0;
    cronometro.classList.remove('pausado')
});

let segundo = 0;
let relogio;

//retorna um relógio baseado nos segundos recebidos
function criaSegundos (segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
         timeZone: 'UTC'
    });
}


function iniciaRelogio () {
    relogio = setInterval (function(){
        segundo++;
        cronometro.innerHTML = criaSegundos(segundo);
    }, 1000);
}





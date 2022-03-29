// Capturar um evento de formulário
const form = document.querySelector('.form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputPeso = event.target.querySelector('.peso'); //event.target informa que o .peso deve ser pego do form
    const inputAltura = event.target.querySelector('.altura');
    
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    

    if (!peso) { // Se o peso retorna falsy
        setResultado('Peso inválido', false);
        return ;
    }  

    
    if (!altura) {
        setResultado('Altura inválida', false);
        return ;
    }

    const IMC = (peso / (altura**2)).toFixed(2);

    if ( IMC < 18.5 ) {
        setResultado(`Seu imc é ${IMC} (Abaixo do peso)`, true);
    } else if ( IMC >= 18.5 && IMC <= 24.9){
        setResultado(`Seu IMC é ${IMC} (Peso normal)`, true);
    } else if ( IMC >= 25 && IMC <= 29.9){
        setResultado(`Seu IMC é ${IMC} (Sobrepeso)`, true);
    } else if ( IMC >= 30 && IMC <= 34.9){
        setResultado(`Seu IMC é ${IMC} (Obesidade grau 1)`, true);
    } else if ( IMC >= 35 && IMC <= 39.9){
        setResultado(`Seu IMC é ${IMC} (Obesidade grau 2)`, true);
    } else {
        setResultado(`Seu IMC é ${IMC} (Obesidade grau 3)`, true);
    }
    

});

function criaParagrafo() {
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isvalid) {
    const resultadohtml = document.querySelector('.resultado');
    resultadohtml.innerHTML = '';
    const p = criaParagrafo();
    if (isvalid){
        p.classList.add('valido')
    } else {
        p.classList.add('invalido')
    }
    p.innerHTML = msg ;
    resultadohtml.appendChild(p);
}

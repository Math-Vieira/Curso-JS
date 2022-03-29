function imc() {

    const form = document.querySelector('.form');
    const resultadohtml = document.querySelector('.resultado');
    

    function conta(evento){
        evento.preventDefault();
        let peso = form.querySelector('.peso');
        let altura = form.querySelector('.altura');
        let pesoNumber = Number(peso.value);
        let alturaNumber = Number(altura.value);
        let IMC = (pesoNumber / (alturaNumber**2));
        let resultado;
        IMC = IMC.toFixed(2);
        IMC = Number(IMC);

        if ( IMC < 18.5 ){
            resultado = `Seu IMC é ${IMC} (Abaixo do peso)`;
        } else if ( IMC >= 18.5 && IMC <= 24.9){
            resultado = `Seu IMC é ${IMC} (Peso normal)`;
        } else if ( IMC >= 25 && IMC <= 29.9){
            resultado = `Seu IMC é ${IMC} (Sobrepeso)`;
        } else if ( IMC >= 30 && IMC <= 34.9){
            resultado = `Seu IMC é ${IMC} (Obesidade grau 1)`;
        } else if ( IMC >= 35 && IMC <= 39.9){
            resultado = `Seu IMC é ${IMC} (Obesidade grau 2)`;
        } else if ( IMC >= 40) {
            resultado = `Seu IMC é ${IMC} (Obesidade grau 3)`;
        } else if ( pesoNumber = undefined ){
            resultado = `Peso inválido`;
        } 
        console.log(pesoNumber);
        
        resultadohtml.innerHTML = `${resultado} <br>`;
        
    }
    form.addEventListener('submit',conta);
    
}

imc();

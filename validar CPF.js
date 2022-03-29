//pegar o cpf *
//tirar os caracteres do cpf *
//fazer o teste 1*
//se o teste 1 der certo*
//fazer o teste 2 *
//se o teste 2 der certo *
//cpf validado *

const multiplicador1 = [10, 9, 8, 7, 6, 5, 4, 3, 2];
const multiplicador2 = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];

const cpf = '723.086.950-48';
const cpfLimpo = limpaCpf(cpf); //13008755429

const teste1 = primeiroTeste (cpfLimpo, multiplicador1);

if (teste1) {
    const teste2 = segundoTeste (cpfLimpo, multiplicador2);
    console.log(teste2);
}

function limpaCpf (cpf) {
    let cpfVazio = [];
    let arrayDoCpf = cpf.split('');
    arrayDoCpf.forEach( elemento => {
        if (Number(elemento) || elemento === '0'  ) {
            cpfVazio.push(elemento);
        }
    } )
    return cpfVazio.join('');
}

function primeiroTeste (cpfLimpo, multiplicador) {
    const arrayCpfLimpo = cpfLimpo.split('');
    const penultimoNumero = arrayCpfLimpo[ arrayCpfLimpo.length - 2 ];
    let multiplicacaoResultado = [];
    const multiplicadores = multiplicador;
    arrayCpfLimpo.forEach( (valor, index) => {
        if (index < 9) {
            multiplicacaoResultado.push(valor * multiplicadores[index])
        }
    } )
    const soma = multiplicacaoResultado.reduce ( (contador, elemento) => {
        contador = contador + Number(elemento);
        return contador;
    }, 0 )

    const testeDaSoma = 11 - (soma % 11);
    if (testeDaSoma === Number(penultimoNumero)) {
        console.log('primeiro teste OK');
        return true;
    }
    console.log('Falha no primeiro Teste');
    console.log('CPF inválido');
    return false;
}

function segundoTeste (cpfLimpo, multiplicador) {
    const arrayCpfLimpo = cpfLimpo.split('');
    const ultimoNumero = arrayCpfLimpo[ arrayCpfLimpo.length - 1 ];
    let multiplicacaoResultado = [];
    const multiplicadores = multiplicador;
    arrayCpfLimpo.forEach( (valor, index) => {
        if (index < 10) {
            multiplicacaoResultado.push(valor * multiplicadores[index])
        }
    } )
    const soma = multiplicacaoResultado.reduce ( (contador, elemento) => {
        contador = contador + Number(elemento);
        return contador;
    }, 0 )

    const testeDaSoma = 11 - (soma % 11);
    if (testeDaSoma === Number(ultimoNumero)) {
        console.log('Segundo teste OK');
        return 'CPF validado';
    }
    console.log('Falha no Segundo Teste')
    return 'CPF inválido';
}
                    
                    
                    
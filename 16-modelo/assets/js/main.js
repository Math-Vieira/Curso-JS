

function data() {
    const semana = ['domingo', 'segunda-feira','terça-feira' ,
    'quarta-feira' ,'quinta-feira' ,'sexta-feira' ,'sábado'];
    const mes = ['janeiro', 'fevereiro', 'março', 'abril',
    'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro',
    'novembro', 'dezembro'];
    const dataHTML = document.querySelector('.data');
    const data = new Date();
    const diaDaSemana = semana[data.getDay()];
    const mesDoAno = mes[data.getMonth()];
    const diaDoMes = data.getDate();
    const ano = data.getFullYear();
    const hora = data.getHours();
    const minuto = data.getMinutes();
    const texto = `${diaDaSemana}, ${diaDoMes} de ${mesDoAno} de ${ano} <br>
    ${hora}:${minuto}`;
    dataHTML.innerHTML = texto;
}

data();
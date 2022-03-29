const altura1 = document.querySelector('#altura1');
const largura1 = document.querySelector('#largura1');
const altura2 = document.querySelector('#altura2');
const largura2 = document.querySelector('#largura2');
/* altura2.value=50 */
function calcula () {

    if (altura2.value) {
        largura2.value = ((largura1.value*altura2.value)/(altura1.value)).toFixed(2);
    } else if (largura2.value) {
        altura2.value = ((altura1.value*largura2.value)/(largura1.value)).toFixed(2);
    }

    if (!altura2.value) {
        alert('Altura2 inválida')
    } else if (!largura2.value) {
        alert('largura2 inválida')
    }

}

const limpar = () => altura1.value=largura1.value=altura2.value=largura2.value='';


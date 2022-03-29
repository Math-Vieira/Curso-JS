/* let points = 0;

const guess = (Numb) => {
  const number = Numb;
  const random = Math.round(Math.random() * (6 - 1) + 1);
  if (number === random) {
    points = points + 2;
  } else if ((number+1) === random || (number-1) === random) {
    points = points + 1;
  }
};

 */

function retorna(a) {
  return new Promise ( (resolve, reject) => {
    if (typeof a !== 'string') {
      resolve('é um número')
    } else {
      reject('erro')
    }
  } )
}

async function teste () {
  try {
  const teste1 = await retorna(5);
  console.log(teste1);

  const teste2 = await retorna(8);
  console.log(teste2);

  const teste3 = await retorna('oi');
  console.log(teste3);  
  } catch (e) {
    console.log(e);
  }
}

teste();
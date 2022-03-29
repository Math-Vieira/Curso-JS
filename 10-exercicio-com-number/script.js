const num1= Number(prompt('digite seu número'));
const numeroTitulo=document.getElementById('num');
const raizQuadrada=document.getElementById('raiz');
const inteiro=document.getElementById('inteiro');
const Not=document.getElementById('NaN');
const baixo=document.getElementById('baixo');
const cima=document.getElementById('cima');
const casas=document.getElementById('casas');

numeroTitulo.innerHTML=num1;
raizQuadrada.innerHTML=(num1**(1/2));
inteiro.innerHTML=Number.isInteger(num1);
Not.innerHTML=Number.isNaN(num1);
baixo.innerHTML=Math.floor(num1);
cima.innerHTML=Math.ceil(num1);
casas.innerHTML=num1.toFixed(2);

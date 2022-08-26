const input1 = document.getElementById('calculo1--1');
const input2 = document.getElementById('calculo1--2');
const btn = document.querySelector('#btnCalcular');
const h1 = document.querySelector('h1');
const container = document.querySelector('.container');
const input3 = document.getElementById('calculo2--1');
const input4 = document.getElementById('calculo2--2');
const btn2 = document.querySelector('#btnCalcular2');
const h2 = document.querySelector('h2');
const container2 = document.querySelector('#container');

//se agrega el codigo a realizar dentro de la funcion para que sea llamada desde HTML
btn2.addEventListener('click', btnOnClickjs);

function btnOnClickjs() {
    container2.innerHTML += "La concatenacion es: " + input3.value + " " + input4.value + "<br>";  
}
input3.addEventListener('click', inputOnChange2);

function btnOnClick () {
    container.innerHTML += "La concatenacion es: " + input1.value + " " + input2.value + "<br>";  
}

function inputOnChange() {
    input2.placeholder = "ahora aqui";
}
function inputOnChange2() {
    input4.placeholder = "ahora aqui";
}


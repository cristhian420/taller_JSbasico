//asignas variables a cada elemento de HTML para que pueda ser leido por JS

const h1 = document.querySelector("h1");
const p = document.querySelector('p');
const pId = document.getElementById('id');
const input = document.querySelector('input');
const piD = document.querySelector('#iD')

//getElementsByClassName nos regresa un array con los distintos elementos con esa clase
const pClass = document.getElementsByClassName('clase');
console.log(pClass);

let arrayModificado = pClass[1];
console.log(arrayModificado.outerText);


console.log({
    h1,
    p,
    pClass,
    pId,
    input
});



//transforma el valor de elemento sustituyendolo con HTML
p.innerHTML = 'se cambio el parrafo con JS <br> con innerHTML';

//transforma el valor de elemento sustituyendolo solamente con texto
h1.innerText = 'se cambio el titulo con JS, solamente el texto';

//para obtener un atributo de algun elemento (podemos asignarle un atributo propio)
console.log(pId.getAttribute('id'));
console.log(p.getAttribute('atributo'));

//asignar atributos algun elemento en HTML
piD.setAttribute('class', 'claseAgregada');

//metodo para modificar clases con Js dentro de HTML
pClass[0].classList.add('claseClassList');
pClass[0].classList.remove('clase');
console.log(pClass[0].getAttribute('class'));

//asignar un valor directamente a un elemento
input.placeholder = "placeholder cambiado con JS";

//crear un elemento HTML (puede ser cualquier etiqueta html) entre parentesis la etiqueta en string

const img = document.createElement('img');
img.setAttribute('src','https://i.pinimg.com/originals/86/40/07/8640075b19f31d1bc14058bc734912cd.png');
img.setAttribute('width','150px');
console.log(img);
pId.innerHTML = "";
pId.append(img);

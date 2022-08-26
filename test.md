## Variables

### 1️⃣ Preguntas
que es una variable y para que sirve?
-una variable es un estado en la memoria que almacena un parametro, hay diferentes tipos de datos que pueden ser almacenados.
Para declarar una variable es necesario utilizar las palabras reservadas por JS var, let, o const despues se le asigna un nombre a dicha variable. Puede ser inicializada en ese momento o despues sin necesidad de usar las palabras reservadas.

difetencia entre declarar e inicializar una variable?
-el declarar una variable solo la apartes en la memoria indicando qeu existira un valor con ese nombre. El inicializar la variable es el asignarle un valor a esa variable que pueden ser varios tipos de valores

diferencia entre sumar numeros y concatenar strings?
-la suma de dos numeros es la operacion matematicas y como resultado nos otorga el valor de la suma de ambos. Concatenar strings es para unir dos cadenas de una texto y se uso el simbolo + para hacerlo.

cual operador me permite sumar y concatenar?
- el simbolo de +

### 2️⃣ Tipo de datos
Determina el nombre y tipo de dato para almacenar:
-nombre : string
-apellido: string
-nombre de usuario de platzo: string
-edad: number
-email: string
-mayor de edad: boolean (true or false)
-dinero ahorrado: number
-deudas: number

### 3️⃣ Variables en JS
traduce a JS el codigo anterior:
```js
let name = "cristhian"
let lastname= "salas"
let usernamePlatzi = "cristhian420"
let edad = 31;
let email = "cristhian.sm@hotmail.com"
let adult = true;
let savedMoney = 2000;
let debtMoney = 5000;
```

### 4️⃣ Calcula e imprime las variables:
Nombre completo:
``` js
let fullname = name + " " + lastname;
```
Dinero real:
```js
let realMoney = savedMoney - debtMoney;
```

## Funciones

### ❔ Preguntas
Que es una funcion?
-pieza de codigo que realiza una tarea en especifico, suele ser separado para reutilizar el codigo con piezas de condigo que hacen esa funcion

Cuando me sirve usar una funcion en mi codigo?
-cuando tenemos una pieza de codigo que pueder ser reutilizada para otra funcion y siempre devuleve un resultado.

Cual es la diferencia entre paremetros y argumenteos de una funcion?
-la diferencia los parametros son las valores que reciben las funciones y los argumentos es lo que le asignamos para que sutituya ese parametros establecido.

### Crear una funcion 
```js
function saludo(name,lastname, nickname) {
	const completeName = name + " " +  lastname;
	console.log("mi nombre es " + completeName + ", pero prefiero que me digas " + nickname);
}

saludo("cristhian","salas","chino");
```

## Condicionales

### ❔ Preguntas
Que es un codicional?
-es una pieza de codigo que toma deciciones en base al estado de cierta variable(admite solo valores booleanos -true or false)y esta ejecuta un codigo u otro dependiendo el resultado.

Tipos de condicionales que existen en JS y diferencias?
-existen dos tipos if..else o while..do
con condicional if esnecesario que lafuncion sea true para que realice la pieza de codigo que se encuentra dentro de los corchetes, en caso de tener otra pieza de codigo es necesario el else.
Con switch es cuando tienes varios casos y para que no sea necesario un anidado de muchos else.

Puedo combinar funciones y condicionales?
-Si se puede utilizar, puede ejecutar una funcion al validar un valor o viceversa.

### Codigo 
Replica el comportamiento de swithc a if else

```js
	let tipoSub = prompt("¿Cual es tu tipo de subscripcion?: ");

if(tipoSub === "free"){
		console.log("Solo puedes tomar los cursos gratis");
	} 
	else if (tipoSub == "Basic") {
		console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
	} 
	else if (tipoSub == "Expert") {
		console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
	} 
	else if (tipoSub == "Plus") {
		console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
	} 
	else {
		console.log("Si no tienes usuario suscribete");
	}
}
```
### Creacion solo con if
```js
	function saberSuscripcion(tipoSub) {


if(tipoSub === "Free"){
		console.log("Solo puedes tomar los cursos gratis");
		return;
	} 

	if (tipoSub == "Basic") {
		console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
		return;
	} 

	if (tipoSub == "Expert") {
		console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
		return;
	}

	if (tipoSub == "Plus") {
		console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
		return;
	} 
	
		console.warn("Si no tienes usuario suscribete");
	
	}
}
```


### Replica con arrays y objects
```js
const tiposDeSuscripciones = {
	free: "Solo puedes tomar los cursos gratis",
	basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
	expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
	expertduo: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
	};

function tipoDeSuscripcion (suscripcion){
	if (tiposDeSuscripciones[suscripcion]){
    console.log(tiposDeSuscripciones[suscripcion]);
        return;
    }

    console.warn("No existe esa suscripcion");
};

```

## Ciclos

### Preguntas

 ¿Que es un ciclo?

	Es un bucle que se recorre e interactua con codigo hasta que se cumpla cierta condicion.

 Tipos de ciclos que existen?
	-For
	-While
	-Do While

 Que es un ciclo infinito y porque es un problema?
	Se le llama un ciclo infinito cuando no tiene una terminacion y la maquina entra en un bucle la cual no se puede parar ya que esa intruccion no se encentra y hace que nuestra computadora se realentice.

 Puedo mezclar ciclos y condicionales
	Si se puede realizar para generar una iteraccion y que confirme ciertos datos atraves de condicionales en cada elemento dentro del array.

### Replica el comportamiento de for con while:

 For
```js
for (let i = 0; i < 5; i++) {
	console.log("el valor de i es: " + i);
}

for (let i = 10; i = 2; i--) {
	console.log("el valor de i es: " + i);
}
```
While
```js
	let i = 0;
	while (i < 5 ) {
console.log("el valor de i es: " + i);
	i ++;
}

        let i = 10;
        while (i = 2 ) {
console.log("el valor de i es: " + i);
        i --;
}
```

### Funcion suma dos valores aleatorio(entre 1-10), el usuario responde si la respuesta es correcta lo felicita si no se repite

```js
	let numero1 = Math.round(Math.random()*10);
	let numero2 = Math.round(Math.random()*10);
    let resultado = numero1 + numero2;
    let respuestaUser = parseInt(prompt(`cuanto es el resultado de ${numero1} + ${numero2}`));
	

while(respuestaUser != resultado) {
    
    respuestaUser = parseInt(prompt(`cuanto es el resultado de ${numero1} + ${numero2}`));
    if(resultado == respuestaUser){
        console.log("Felicidades");
    } else {
        alert("Respuesta incorrecta");
    }
    
};

```

## Listas

### Preguntas
Que es un array?
-Se puede intrerpretar como una caja en la cual podemos poner diversos parametros, separados por su indice. Cada valor de array puede contener distintos tipos de datos. Se escriben entre [] y para separar cada lugar es necesario una coma.
```
const array1 = [1,3,true,"hola"];
```

Que es un objeto?
-Objeto es un conjunto de tipo de  datos en los cuales incluye ditinto tipos de clase que podemos crear y puden ser agregados al objeto
```js
let perro = {
	raza: "bulldog",
	color: "cafe",
	sexo: "hembra"
	comida: ["croquetas", "carne seca", "sobre"]
};
```
Cuando es mejor usar objetos o arrays?
-El array se usa cuando tenemos distintos tipos de datos y queremos meterlos dentro de un gran contenedor y nos permite interactuar con cada uno de esos datos internos y un objeto cuando los nombes son elementos importantes para al algoritmo.

Puedo mezclar arrays y objetos?
-Si se puede de echo e muy comun meter objetos dentro de un contenedor mas grande con valores de difente tipo.


### Crea una funcion que reciba un array como parametro e imprima su primer elemento:
```js
let array1 = [23,"doctor",true,459,"whats?"];

function primerElemento(array1) {
	console.log(array1[0]);
} 

primerElemento(array1);
```

### Crea una funcion que reciba un array e imprima todos los elementos 

```js
let array1 = [23,"doctor",true,459,"whats?"];

function impElement(parametro){
parametro.forEach(elemento = console.log (elemento));
};
```

### Crea una funcion que reciba un objeto e imprima todos sus elementos uno por uno.

```js
let perros = {
	color: "red",
	raza: "chihuahua",
	edad: 1
}

function printElement(objeto) {
	for (let i in objeto) {
	console.log(objeto[i]);
}
}
 
printElement(perros);
```
Otra forma de hacerlo en con la propiedad Object.values() que nos retorna los valores de un objeto transformado en un array
```js
function imprimirElemento(obj) {
	const elementos = Object.values(obj)
	for (let i = 0; i < elementos.length; i++){
		console.log(elementos[i]);
    }
}
```
// 1.1	Usa querySelector para mostrar por consola el botón con la clase .showme
const boton = document.querySelector('.showme');
console.log(boton);

// 1.2	Usa querySelector para mostrar por consola el h1 con el id #pillado
const titulo1 = document.querySelector('#pillado');
console.log(titulo1);

// 1.3	Usa querySelector para mostrar por consola todos los p
const Allparrafos = document.querySelectorAll('p');
console.log(Allparrafos);

// 1.4	Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
const Allpokemons = document.querySelectorAll('.pokemon');
console.log(Allpokemons);

// 1.5	Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".
const elementosTest = document.querySelectorAll('[data-function="testMe"]');
console.log(elementosTest);

// 1.6	Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".
const personajes = document.querySelectorAll('[data-function="testMe"]');
console.log(personajes[2]);
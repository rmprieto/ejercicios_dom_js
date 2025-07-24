// 3.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises. 
//     const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const contenedor = document.querySelector('div[data-function="printHere"]');
const lista = document.createElement('ul');
countries.forEach(country => {
  const elementos = document.createElement('li');
  elementos.textContent = country;
  lista.appendChild(elementos);
});
contenedor.appendChild(lista);

// 3.2 Elimina el elemento que tenga la clase .fn-remove-me.
const elementoEliminar = document.querySelector('.fn-remove-me');

if (elementoEliminar) {
  elementoEliminar.remove();
}

// 3.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
//     en el div de html con el atributo data-function="printHere".
//     const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const contenedor2 = document.querySelector('div[data-function="printHere"]');
const listaCoches = document.createElement('ul');

cars.forEach(car => {
  const elementoCoche = document.createElement('li'); 
  elementoCoche.textContent = car;                    
  listaCoches.appendChild(elementoCoche);             
});

contenedor.appendChild(listaCoches);


// 3.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
//     h4 para el titulo y otro elemento img para la imagen.
//     const countries = [
//	    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
//  	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
//	    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
//  	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
//  	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
//     ];



const countries2 = [ 
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},  
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'}, 
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'}, 
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'}, 
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'} 
]

const contenedor3 = document.createElement('div');
document.body.appendChild(contenedor3);

countries2.forEach(country2 => {
    const divCountry = document.createElement('div');
    const h4CountryTitle = document.createElement('h4');
    h4CountryTitle.textContent = country2.title;

    const imgCountry = document.createElement('img');
    imgCountry.src = country2.imgUrl;
    imgCountry.alt = country2.title;

    divCountry.appendChild(h4CountryTitle);
    divCountry.appendChild(imgCountry);

    contenedor3.appendChild(divCountry);
});

//3.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
//    elemento de la serie de divs.

const botonEliminar = document.createElement('button');
botonEliminar.textContent = 'Eliminar último elemento';
document.body.appendChild(botonEliminar);

botonEliminar.addEventListener('click', () => {
  const ultDiv = contenedor3.lastElementChild;
  if (ultDiv) {
   contenedor3.removeChild(ultDiv);
  }
 });

//3.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
//    divs que elimine ese mismo elemento del html.

const countries3 = [ 
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},  
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'}, 
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'}, 
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'}, 
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'} 
];

const contenedor4 = document.createElement('div');
document.body.appendChild(contenedor4);

countries3.forEach(country3 => {
    const divCountries = document.createElement('div');
    
    const h4CountriesTitle = document.createElement('h4');
    h4CountriesTitle.textContent = country3.title;

    const imgCountries = document.createElement('img');
    imgCountries.src = country3.imgUrl;
    imgCountries.alt = country3.title;

    const btnEliminarDiv = document.createElement('button');
    btnEliminarDiv.textContent = 'Eliminar este elemento';
    
    btnEliminarDiv.addEventListener('click', () => {
      divCountries.remove();
    });

    divCountries.appendChild(h4CountriesTitle);
    divCountries.appendChild(imgCountries);
    divCountries.appendChild(btnEliminarDiv);

    contenedor4.appendChild(divCountries);
});




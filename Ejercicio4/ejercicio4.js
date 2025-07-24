// 4.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click

const boton1 = document.getElementById('btnToClick');
boton1.addEventListener('click', (event) => {
    console.log('Información del evento:', event);
});

// 4.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

const inputFocus = document.querySelector('.focus');
inputFocus.addEventListener('focus', (event) => {
    console.log('Valor del input en focus:', event.target.value);
});

// 4.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

const inputValue = document.querySelector('.value');
inputValue.addEventListener('input', (event) => {
    console.log('Valor actual del input:', event.target.value);
});

// 4.4 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los albums.
//     const albums = [
//         "De Mysteriis Dom Sathanas",
//         "Reign of Blood",
//         "Ride the Lightning",
//         "Painkiller",
//         "Iron Fist",
//     ];

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const listaAlbums = document.createElement('ul');
albums.forEach(album => {
  const elementoAlbums = document.createElement('li');  
  elementoAlbums.textContent = album;                   
  listaAlbums.appendChild(elementoAlbums);                       
});

document.body.appendChild(listaAlbums);
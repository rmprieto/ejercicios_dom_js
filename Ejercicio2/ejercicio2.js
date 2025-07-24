// 2.1-Inserta dinamicamente en un html un div vacio con javascript.
const Div1 = document.createElement('div');
document.body.appendChild(Div1);

// 2.2-Inserta dinamicamente en un html un div que contenga una p con javascript.
const Div2 = document.createElement('div');
const nuevoParrafo = document.createElement('p');
Div2.appendChild(nuevoParrafo);
document.body.appendChild(Div2);

// 2.3-Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const Div3 = document.createElement('div');
for (let i = 1; i <= 6; i++) {
    const p = document.createElement('p');
    Div3.appendChild(p); // Insertamos cada párrafo en el div
}
document.body.appendChild(Div3);

// 2.4-Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const Parrafo1 = document.createElement('p');
Parrafo1.textContent = 'Soy dinámico!';
document.body.appendChild(Parrafo1);


// 2.5-Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2InsertHere = document.querySelector('h2.fn-insert-here');
h2InsertHere.textContent = 'Wubba Lubba dub dub';

// 2.6-Basandote en el siguiente array crea una lista ul > li con los textos del array. const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const lista = document.createElement('ul');
  apps.forEach(app => {
    const elemento = document.createElement('li'); 
    elemento.textContent = app; 
    lista.appendChild(elemento); 
  });
document.body.appendChild(lista);


// 2.7-Elimina todos los nodos que tengan la clase .fn-remove-me 
const elementosEliminar = document.querySelectorAll('.fn-remove-me');
elementosEliminar.forEach(elemento => elemento.remove());

// 2.8-Inserta una p con el texto 'Voy en medio!' entre los dos div.  Recuerda que no solo puedes insertar elementos con .appendChild.
const allDivs = document.querySelectorAll('div');
const Parrafo2 = document.createElement('p');
Parrafo2.textContent = 'Voy en medio!';
document.body.insertBefore(Parrafo2, allDivs[1]);

// 2.9-Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase  .fn-insert-here
const divsInsertHere = document.querySelectorAll('div.fn-insert-here');
divsInsertHere.forEach(div => {
    const Parrafo3 = document.createElement('p');
    Parrafo3.textContent = 'Voy dentro!';
    div.appendChild(Parrafo3);
  });
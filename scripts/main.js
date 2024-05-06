'use strict';

// - Creo una variabile array che contiene gli elementi della lista
// - inizializzo un contantore
// - creo un ciclo while che mi cicla per la lunghezza della lista
// - dentro il ciclo creo gli elementi lista con createElement
// - inizializzo una variabile li che continete l'elemento corrente dell'array
// - vado ad inserire dentro una lista non ordinata gli elementi della lista

const lista = ['Chitarra', 'Processore', 'Bagnoschiuma', 'Vernice', 'Botte in PVC', 'Acido Fosforico'];
//inizializzo il contatore
let contatore = 0;

//creo il ciclo while
while (contatore < lista.length) {
    const liSta = document.createElement('li');//creo l'elemento lista
    liSta.innerText = lista[contatore]; //inserisco dentro all'elemento lista il testo della mia lista
    const ul = document.getElementById('spesa');//seleziono l'ul tramite id
    ul.append(liSta);//"appendo" l'elemento li all'elemento ul
    contatore++;//aumento il contatore per uscire fuori dal loop
    console.log(contatore);
}
console.log(contatore);
console.log(lista);
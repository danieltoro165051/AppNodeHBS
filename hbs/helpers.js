const hbs = require('hbs');

/*  Helpers  */
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {

    let nombre = texto.toString();
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabra[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');
});
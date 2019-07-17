const express = require('express');
const app = express();
const hbs = require('hbs');


/* Definicion de puerto  */
const port = process.env.PORT || 3000;

/* Requires*/
require('./hbs/helpers');


app.use(express.static(__dirname + '/public'));



hbs.registerPartials(__dirname + '/views/parciales');
/*  Express HBS Engine  */
app.set('view engine', 'hbs');



/*Render ruta home */
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'dAnIel',
    })
})

/*Render ruta about */
app.get('/about', (req, res) => {
    res.render('about')
});



app.listen(port, () => {
    console.log('Escuchando en el puerto 3000');
})
require('./config/config');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extend: false }));
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.send('Hola Mundo');
});
app.get('/usuario', (req, res) => {
    res.send('Get Usuarios');
});
app.post('/usuario', (req, res) => {
    let body = req.body;
    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El Nombre Completo es Necesario.'
        })
    } else {
        res.json({
            body
        });
    }

});
app.put('/usuario/:id', (req, res) => {
    let id = req.params.id;
    res.json({
        id
    });
});
app.delete('/usuario/:id', (req, res) => {
    let id = req.params.id;
    res.send('Dlete Usuarios');
});
app.listen(process.env.PORT, () => {
    console.log('escuchando al puerto 3000');
});
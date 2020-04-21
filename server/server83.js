/*
EL GET se utiliza para actualizar datos, obtener datos
EL POST se utiliza para crear nuevos registros
EL PUT se utiliza para actualizar registros
*/
require('./config/config')
const express = require('express');
const app = express();
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
//Cuando se vea el app.use, son como middleware ya que cada vez que pase por ahi el codigo se van a disparar esas funciones
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


app.get('/usuario', function (req, res) {
  res.json('get Usuario')
});

app.post('/usuario', function (req, res) {
  let body = req.body;
  if(body.nombre === undefined){
    res.status(400).json({
      ok: false,
      mensaje: 'El nombre es necesario'
    })
  }else {
    res.json({
      persona: body
    });
  }
 
});

app.put('/usuario/:id', function (req, res) {
  let id = req.params.id;
  res.json({
    id
  });
});

app.delete('/usuario', function (req, res) {
  res.json('delete Usuario')
});
 
app.listen(process.env.PORT, () => {
    console.log('Escuchando epuerto: ', 3000);
});
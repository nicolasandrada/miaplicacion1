var express = require('express');
var router = express.Router();

const {Usuario} = require('../models')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
                      title: 'Clases de siste comp', 
                      clase: 'Rutas y vistas'});
});

router.get('/alumno', function(req, res, next){
  Usuario.create({nombre:'Nico', apellido:'Andrada'})
  .then(usuario=>{
    res.render('alumno')
  })
})

module.exports = router;

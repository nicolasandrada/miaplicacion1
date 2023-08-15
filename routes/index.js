var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
                      title: 'Clases de Andrada', 
                      clase: 'Rutas y vistas'});
});

// router.get('/alumno', function(req, res, next){
//   res.render('alumno')
// })

module.exports = router;

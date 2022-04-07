var express = require('express');
var router = express.Router();
const getRandomMiesmuschelStatement = require('../services/miesmuschelService').getRandomMiesmuschelStatement

/* GET Aussage magische Miesmuschel
    URL-Parameter q: Fragen an die magische Miesmuschel
*/
router.get('/api', function(req, res, next) {
  const frage = req.query.q

  // Validation Parameter 
  if(!frage){
    return res.status(400).json({error: "Frage muss angegeben werden über URL-Parameter q"})
  }

  try{
    randomStatment = getRandomMiesmuschelStatement()
  }
  catch(e){
    return res.status(500).json({error: "Interner Fehler"})
  }
  
  return res.status(200).json({
    frage: frage, 
    antwort: randomStatment
  });
});

/* GET Only Test-Service für Testzwecke
*/
router.get('/api/test', function(req, res, next) {
  const frage = req.query.q

  
  return res.status(200).json({
    purpose: "Test"
  });
});

/*
  Zeige als Startseite /views/index.pug
*/
router.get('/', function(req, res, next){
  res.render('index', {title: "Magische Miesmuschel"});
})

module.exports = router;

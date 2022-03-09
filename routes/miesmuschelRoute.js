var express = require('express');
var router = express.Router();
const getRandomMiesmuschelStatement = require('../services/miesmuschelService').getRandomMiesmuschelStatement

/* GET Aussage magische Miesmuschel
    URL-Parameter q: Fragen an die magische Miesmuschel
*/
router.get('/', function(req, res, next) {
  const frage = req.query.q

  if(!frage){
    return res.status(500).json({error: "Frage muss angegeben werden über URL-Parameter q"})
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

module.exports = router;

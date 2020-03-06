const { calculoDose } = require('./model')
let doseCerta = [];
let principioAtivo = '';

exports.getIndex = (req, res, next) => {
    res.render('index');
};


exports.calculoDose = (req, res, next) => {
    const pesoCrianca = req.body.pesoCrianca;
    principioAtivo = req.body.principioAtivo;
    doseCerta = calculoDose(principioAtivo, pesoCrianca);
    res.redirect('/resultados');
    
  };

exports.getResultados = (req, res, next) => {
    doseMin = doseCerta[0];
    doseMax = doseCerta[1];
    res.render('resultados', { doseMin, doseMax, principioAtivo });
};
const { calculoDose, getListaPrincipiosAtivos, getListaDoses, selectDose } = require('./model')


let dose;
let principioAtivo;
let pesoCrianca;
let doseCerta;
let doseMin;
let doseMax;
let listaDoses;
// to do list:
// dropdown of escolher dose must be disabled and populate only when principioAtivo is selected


exports.getIndex = (req, res, next) => {
    const listaPrincipiosAtivos = getListaPrincipiosAtivos();
    principioAtivo = listaPrincipiosAtivos[0];
    listaDoses = getListaDoses(principioAtivo);
    res.render('index', { listaPrincipiosAtivos, principioAtivo, listaDoses, selectDose });
    
};

exports.addDrug = (req, res, next) => {
    
};

exports.removeDrug = (req, res, next) => {

};

exports.calculoDose = (req, res, next) => {
    dose = req.body.escolherDose;
    principioAtivo = req.body.escolherPrincipioAtivo;
    pesoCrianca = req.body.pesoCrianca;
    doseCerta = calculoDose(principioAtivo, pesoCrianca, dose);
    res.redirect('/resultados');
    
  };



exports.getResultados = (req, res, next) => {
    doseMin = doseCerta[0];
    doseMax = doseCerta[1];
    res.render('resultados', { principioAtivo, doseMin, doseMax, dose });
};
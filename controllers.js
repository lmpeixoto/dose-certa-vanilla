const { calculoDose,
        getListaPrincipiosAtivos,
        getListaDoses,
        updatePrincipioAtivo,
        medicamentosDosesRecomendadas } = require('./model')


let dose;
let principioAtivo;
let pesoCrianca;
let doseCerta;
let doseMin;
let doseMax;
let listaDoses;
let pAtivo;
// to do list:
// dropdown of escolher dose must be disabled and populate only when principioAtivo is selected


exports.getIndex = (req, res, next) => {
    const listaPrincipiosAtivos = getListaPrincipiosAtivos();
    principioAtivo = listaPrincipiosAtivos[0];
    res.render('index', { listaPrincipiosAtivos, principioAtivo });
    
    
};


exports.getSelectEditPA = (req, res, next) => {
    listaPrincipiosAtivos = getListaPrincipiosAtivos();
    res.render('selectEditPA', { listaPrincipiosAtivos })
}

exports.postSelectEditPA = (req, res, next) => {
    pAtivo = req.body.principioAtivo;
    listaDoses = medicamentosDosesRecomendadas[pAtivo];
    console.log('listadoses:', listaDoses)
    res.render('editPA', { pAtivo, listaDoses, medicamentosDosesRecomendadas });
    
}

exports.getEditPA = (req, res, next) => {
    pAtivoUpdate = req.body.principioAtivo;
    listaDoses = medicamentosDosesRecomendadas[pAtivo];
    res.render('editPA', { pAtivo: pAtivoUpdate, listaDoses, medicamentosDosesRecomendadas })
}



exports.postEditPA = (req, res, next) => {
    pAtivoUpdate = req.body.principioAtivo;
    listaDoses = medicamentosDosesRecomendadas[pAtivo];
    const concUpdate = req.body.dose;
    const doseMaxUpdate = req.body.doseMax;
    const doseMinUpdate = req.body.doseMin;
    console.log(pAtivo, concUpdate, doseMaxUpdate, doseMinUpdate);
    updatePrincipioAtivo(pAtivo, [concUpdate, doseMaxUpdate, doseMinUpdate]);
    console.log('alterado com sucesso!');
    console.log(medicamentosDosesRecomendadas);
    res.redirect('/' );


}

exports.postDose = (req, res, next) => {
    principioAtivo = req.body.principioAtivo;
    pesoCrianca = req.body.pesoCrianca;
    listaDoses = getListaDoses(principioAtivo);
    res.render('dose', { listaDoses });

}



exports.calculoDose = (req, res, next) => {
    dose = req.body.dose;
    doseCerta = calculoDose(principioAtivo, pesoCrianca, dose);
    doseMin = doseCerta[0];
    doseMax = doseCerta[1];
    res.redirect('/resultados');
    
  };


exports.getResultados = (req, res, next) => {

    res.render('resultados', { principioAtivo, dose, doseMin, doseMax })
};




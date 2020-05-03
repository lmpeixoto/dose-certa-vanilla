const {
  calculoDose,
  getListaPrincipiosAtivos,
  getListaDoses,
  updatePrincipioAtivo,
  savePrincipioAtivo,
  removePrincipioAtivo,
  medicamentosDosesRecomendadas,
} = require("./model");

let dose;
let principioAtivo;
let pesoCrianca;
let doseCerta;
let doseMin;
let doseMax;
let listaDoses;
let pAtivo;
let pAtivoUpdate;
// to do list:
// dropdown of escolher dose must be disabled and populate only when principioAtivo is selected

exports.getIndex = (req, res, next) => {
  res.render("index");
};

exports.getMedicamentos = (req, res, next) => {
  res.send(medicamentosDosesRecomendadas);
};

exports.getSelectEditPA = (req, res, next) => {
  listaPrincipiosAtivos = getListaPrincipiosAtivos();
  res.render("selectEditPA", { listaPrincipiosAtivos });
};

exports.postSelectEditPA = (req, res, next) => {
  pAtivo = req.body.principioAtivo;
  listaDoses = medicamentosDosesRecomendadas[pAtivo];
  res.render("editPA", { pAtivo, listaDoses, medicamentosDosesRecomendadas });
};

exports.getEditPA = (req, res, next) => {
  pAtivoUpdate = req.body.principioAtivo;
  listaDoses = medicamentosDosesRecomendadas[pAtivo];
  res.render("editPA", {
    pAtivo: pAtivoUpdate,
    listaDoses,
    medicamentosDosesRecomendadas,
  });
};

exports.postEditPA = (req, res, next) => {
  let typeRequest = req.params.type;
  pAtivo = req.body.principioAtivo;
  dose = req.body.dose;
  doseMinUpdate = req.body.doseMin;
  doseMaxUpdate = req.body.doseMax;
  if (typeRequest === 'edit') {
    updatePrincipioAtivo(pAtivo, dose, [doseMinUpdate, doseMaxUpdate]);
    console.log("alterado com sucesso!");
    res.redirect("/editPA");
  } else {
    removePrincipioAtivo(pAtivo, dose);
    res.redirect("/editPA");
  }
};

exports.calculoDose = (req, res, next) => {
  dose = req.body.dose;
  principioAtivo = req.body.principioAtivo;
  pesoCrianca = req.body.pesoCrianca;
  doseCerta = calculoDose(principioAtivo, pesoCrianca, dose);
  doseMin = doseCerta[0];
  doseMax = doseCerta[1];
  res.redirect("/resultados");
};

exports.getResultados = (req, res, next) => {
  res.render("resultados", { principioAtivo, dose, doseMin, doseMax });
};

exports.getAddDrug = (req, res, next) => {
  res.render("addDrug");
};

exports.postAddDrug = (req, res, next) => {
  dose = req.body.dose;
  principioAtivo = req.body.nameDrug;
  doseMin = req.body.doseMin;
  doseMax = req.body.doseMax;
  console.log(principioAtivo, dose, doseMin, doseMax);
  savePrincipioAtivo(principioAtivo, dose, doseMax, doseMin);
  res.redirect("/");
};

// drug: [concentration_1, minimum, maximum, ntakes]
// const medicamentosDosesRecomendadas = {
//     "paracetamol" : [40, 10, 20],
//     "ibuprofeno" : [20, 20, 30]
// };

const fs = require("fs");

const loadMedicamentos = () => {
  const medicamentos = "medicamentos.json";
  try {
    return fs.readFileSync(medicamentos);
  } catch (err) {
    console.log(err);
  }
};

let medicamentosDosesRecomendadas = JSON.parse(loadMedicamentos());

const saveMedicamentos = (medicamentosUpdated) => {
  try {
    fs.writeFileSync("medicamentos.json", JSON.stringify(medicamentosUpdated));
  } catch (err) {
    console.log(err);
  }
};

const updatePrincipioAtivo = (pAtivo, conc, entry) => {
  if (checkExistingDrug(pAtivo)) {
    medicamentosDosesRecomendadas[pAtivo][conc] = entry;
    saveMedicamentos(medicamentosDosesRecomendadas);
    console.log("Base de dados atualizada com sucesso!");
  } else {
    console.log("Nada foi alterado!");
  }
};

const savePrincipioAtivo = (pAtivo, dose, doseMax, doseMin) => {
  if (!checkExistingDrug(pAtivo)) {
    let entry = [doseMax, doseMin];
    medicamentosDosesRecomendadas[pAtivo] = {};
    medicamentosDosesRecomendadas[pAtivo][dose] = entry;
    console.log(medicamentosDosesRecomendadas);
    saveMedicamentos(medicamentosDosesRecomendadas);
    console.log("Base de dados atualizada com sucesso!");
  } else {
    console.log("Substância ativa já existente!");
  }
};

const removePrincipioAtivo = (pAtivo, dose) => {
  if (checkExistingDrug(pAtivo)) {
    if (Object.keys(medicamentosDosesRecomendadas[pAtivo]).length === 1) {
      delete medicamentosDosesRecomendadas[pAtivo];
    } else {
      delete medicamentosDosesRecomendadas[pAtivo][dose];
    }
    saveMedicamentos(medicamentosDosesRecomendadas);
    console.log("Base de dados atualizada com sucesso!");
  } else {
    console.log("Substância ativa não existente!");
  }
};

const checkExistingDrug = (drugName) => {
  if (drugName in medicamentosDosesRecomendadas) {
    return true;
  } else {
    return false;
  }
};

const getListaPrincipiosAtivos = () => {
  return Object.keys(medicamentosDosesRecomendadas);
};

const getListaDoses = (principioAtivo) => {
  return Object.keys(medicamentosDosesRecomendadas[principioAtivo]);
};

const calculoDose = (principioAtivo, pesoCrianca, dose) => {
  let doseMin =
    medicamentosDosesRecomendadas[principioAtivo][dose][0] * pesoCrianca;
  let doseMax =
    medicamentosDosesRecomendadas[principioAtivo][dose][1] * pesoCrianca;
  return [doseMin, doseMax];
};

module.exports = {
  calculoDose,
  getListaPrincipiosAtivos,
  getListaDoses,
  updatePrincipioAtivo,
  savePrincipioAtivo,
  removePrincipioAtivo,
  medicamentosDosesRecomendadas,
};

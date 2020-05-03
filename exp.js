const fs = require("fs");

const loadMedicamentos = () => {
  const medicamentos = "medicamentos.json";
  try {
    return fs.readFileSync(medicamentos);
  } catch (err) {
    console.log(err);
  }
};

const medicamentosDosesRecomendadas = JSON.parse(loadMedicamentos());

const saveMedicamentos = (medicamentosUpdated) => {
  try {
    fs.writeFileSync("medicamentos.json", JSON.stringify(medicamentosUpdated));
  } catch (err) {
    console.log(err);
  }
};

const updatePrincipioAtivo = (pAtivo, entry) => {
  for (principioAtivo in medicamentosDosesRecomendadas) {
    if (principioAtivo === pAtivo) {
      medicamentosDosesRecomendadas[pAtivo] = entry;
      saveMedicamentos(medicamentosDosesRecomendadas);
      console.log("Base de dados atualizada com sucesso!");
    } else {
      console.log("Nada foi alterado!");
    }
  }
};

let newPAtivo = "paracetamol";
let newEntry = { "20": [20, 10] };

updatePrincipioAtivo(newPAtivo, newEntry);

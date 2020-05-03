const fetchMedicamentosDosesRecomendadas = async () => {
  let response = await fetch("/medicamentos");
  let data = await response.json();
  return data;
};

const medicamentosDosesRecomendadas = fetchMedicamentosDosesRecomendadas();

const paSelector = document.getElementById("paSelector");
const doseSelector = document.getElementById("doseSelector");
const saveButton = document.getElementById("saveButton")
const removeButton = document.getElementById("removeButton");
const formPAtivo = document.getElementById("pAtivo-form");

function populatePA(med) {
  const listaPrincipiosAtivos = Object.keys(med);
  console.log(listaPrincipiosAtivos);
  listaPrincipiosAtivos.forEach((principioAtivo) => {
    let option = document.createElement("option");
    option.value = principioAtivo;
    option.text = principioAtivo;
    paSelector.add(option);
  });
  selectDose(med);
  changeDoseAndFillEdit();
}

medicamentosDosesRecomendadas.then((result) => populatePA(result));

paSelector.addEventListener("change", changeDoseAndFillEdit);
doseSelector.addEventListener("change", fillEdit);
saveButton.addEventListener("click", editDrug);
removeButton.addEventListener("click", removeDrug);

function removeDrug() {
  formPAtivo.setAttribute('action', '/editPA/remove');
  formPAtivo.setAttribute('onsubmit', "return confirm('Tem a certeza que deseja remover o registo?')");
  

}

function editDrug() {
  formPAtivo.setAttribute('action', '/editPA/edit')
  formPAtivo.setAttribute('onsubmit', "return confirm('Tem a certeza que deseja alterar o registo?')");
}


function changeDose() {
  medicamentosDosesRecomendadas.then((result) => selectDose(result));
}

function fillEdit() {
  medicamentosDosesRecomendadas.then((result) => fillEditDose(result));
}

function changeDoseAndFillEdit() {
  changeDose();
  fillEdit();
}

function selectDose(meds) {
  paSelected = paSelector.value;
  const listaDoses = Object.keys(meds[paSelected]);
  let length = doseSelector.options.length;
  if (length > 0) {
    for (i = length - 1; i >= 0; i--) {
      doseSelector.remove(i);
    }
  }
  listaDoses.forEach((dose) => {
    let option = document.createElement("option");
    option.text = dose;
    doseSelector.add(option);
  });
}

function fillEditDose(meds) {
  paSelected = paSelector.value;
  doseSelected = doseSelector.value;
  doseMax = document.getElementById("doseMax");
  doseMin = document.getElementById("doseMin");
  doseMin.value = meds[paSelected][doseSelected][0];
  doseMax.value = meds[paSelected][doseSelected][1];
}

const fetchMedicamentosDosesRecomendadas = async () => {
    let response = await fetch('/medicamentos');
    let data = await response.json();
    return data;
}

const medicamentosDosesRecomendadas = fetchMedicamentosDosesRecomendadas()

const paSelector = document.getElementById('paSelector')
const doseSelector = document.getElementById('doseSelector');


function populatePA(med) {
    const listaPrincipiosAtivos = Object.keys(med);
    console.log(listaPrincipiosAtivos);
    listaPrincipiosAtivos.forEach(principioAtivo => {
    let option = document.createElement('option');
    option.value = principioAtivo;
    option.text = principioAtivo;
    paSelector.add(option);
});
    selectDose(med);

}


medicamentosDosesRecomendadas.then(result => populatePA(result));

paSelector.addEventListener('change', changeDose);

function changeDose() {
    medicamentosDosesRecomendadas.then(result => selectDose(result));
}


function selectDose(meds) {
    paSelected = paSelector.value
    const listaDoses = Object.keys(meds[paSelected])
    console.log(listaDoses)
    let length = doseSelector.options.length;
    if (length > 0) {
        for (i = length - 1; i >= 0; i--) {
            doseSelector.remove(i)
        }
    }
    listaDoses.forEach(dose => {
        let option = document.createElement('option');
        option.text = dose;
        doseSelector.add(option);
    });

}


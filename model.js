// drug: [concentration_1, minimum, maximum, ntakes]
// const medicamentosDosesRecomendadas = {
//     "paracetamol" : [40, 10, 20],
//     "ibuprofeno" : [20, 20, 30]
// };



const medicamentosDosesRecomendadas = {
    "paracetamol": {
        40: [10, 20]
    },

    "ibuprofeno": {
        20: [20, 30],
        40: [20, 30]
    }
};

const getListaPrincipiosAtivos = () => {
    return Object.keys(medicamentosDosesRecomendadas);
}

const getListaDoses = (principioAtivo) => {
    return Object.keys(medicamentosDosesRecomendadas[principioAtivo])
}



const calculoDose = (principioAtivo, pesoCrianca, dose) => {
    
    let doseMin = medicamentosDosesRecomendadas[principioAtivo][dose][0] * pesoCrianca;
    let doseMax = medicamentosDosesRecomendadas[principioAtivo][dose][1] * pesoCrianca;
    return [doseMin, doseMax];
};

const selectDose = () => {
    let paSelector = document.getElementById('paSelector');
    let doseSelector = document.getElementById('doseSelector');
    paSelected = paSelector.value;
    const listaDoses = getListaDoses(paSelected);
    let length = doseSelector.options.length;
    if (length > 0) {
        for (i = length - 1; i >= 0; i--) {
            doseSelector.remove(i);
        }
    }
    listaDoses.forEach(dose => {
        let option = document.createElement('option');
        option.text = dose;
        doseSelector.add(option);
    });
};

module.exports = { 
    calculoDose,
    getListaPrincipiosAtivos,
    getListaDoses,
    selectDose
};
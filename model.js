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
    return Object.keys(medicamentosDosesRecomendadas[principioAtivo]);
}

const updatePrincipioAtivo = (pAtivo, conc, arr) => {
    medicamentosDosesRecomendadas[pAtivo][conc] = arr; 
}



const calculoDose = (principioAtivo, pesoCrianca, dose) => {
    
    let doseMin = medicamentosDosesRecomendadas[principioAtivo][dose][0] * pesoCrianca;
    let doseMax = medicamentosDosesRecomendadas[principioAtivo][dose][1] * pesoCrianca;
    return [doseMin, doseMax];
};

const selectDose = function() {
    console.log('funciona!')
    // listaDoses = getListaDoses(principioAtivo);
    // return listaDoses;
    
};

module.exports = { 
    calculoDose,
    getListaPrincipiosAtivos,
    getListaDoses,
    selectDose,
    updatePrincipioAtivo,
    medicamentosDosesRecomendadas
};
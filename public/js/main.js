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



window.onload = function () {
    const paSelector = document.getElementById('paSelector')
    const doseSelector = document.getElementById('doseSelector');
    const listaPrincipiosAtivos = getListaPrincipiosAtivos();
    listaPrincipiosAtivos.forEach(principioAtivo => {
        let option = document.createElement('option');
        option.value = principioAtivo;
        option.text = principioAtivo;
        paSelector.add(option);
    });
}


function selectDose() {
    paSelected = paSelector.value
    const listaDoses = getListaDoses(paSelected)
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
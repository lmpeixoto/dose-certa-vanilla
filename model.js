// drug: [concentration_1, minimum, maximum]
const medicamentosDosesRecomendadas = {
    "paracetamol" : [40, 10, 20],
    "ibuprofeno" : [20, 20, 30]
};



const calculoDose = (principioAtivo, pesoCrianca) => {
    let doses = medicamentosDosesRecomendadas[principioAtivo];
    let doseMin = doses[1] * pesoCrianca;
    let doseMax = doses[2] * pesoCrianca;
    return [doseMin, doseMax];
};

module.exports = { calculoDose };
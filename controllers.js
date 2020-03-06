let doseCerta = 0;

exports.getIndex = (req, res, next) => {
    res.render('index');
};


exports.calcularDose = (req, res, next) => {
    const pesoCrianca = req.body.pesoCrianca;
    const principioAtivo = req.body.principioAtivo;
  
    if (principioAtivo.toLowerCase() === 'paracetamol') {
      doseCerta = pesoCrianca * 20;
      console.log('Dose certa: ' + doseCerta + ' mg de 8 em 8 horas');
    }
    res.redirect('/resultados');
     
  };

exports.getResultados = (req, res, next) => {
    res.render('resultados', { doseCerta });
};
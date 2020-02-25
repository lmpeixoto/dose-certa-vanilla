const  express = require('express')

const app = express()
const port = 3000

const doseParacetamol = 20 // mg/Kg
const concBenURon = 40 // mg/mL

const calcDoseParacetamol = (peso) => {
    return peso * doseParacetamol
}


const calcQuantBenURon = (dose) => {
    return dose/concBenURon
}

const dose1 = calcDoseParacetamol(10)
console.log(dose1)
console.log(calcQuantBenURon(dose1))


app.listen(port, () => console.log('Node server initialized on port ' + port))
const paName = document.getElementById("nameDrug");
const addButton = document.getElementById("pa-add-button");
const formAddContainer = document.querySelector(".form-add-container");

addButton.addEventListener('click', addDose);

function addDose() {
    if (paName.value !== '') {
        // adicionar o html c os campos da sa
        addButton.disabled = true;
        let query = `
            <hr />
            <label for="dose">Dose</label>
            <input type="number" name="dose" id="dose"></input>
            <label for="doseMax">Dose Máxima</label>
            <input type="number" name="doseMax" id="doseMax">
            <label for="doseMin">Dose Mínima</label>
            <input type="number" name="doseMin" id="doseMin">
            <hr />
            <button type="submit" id="saveButton">Save</button>`;
        formAddContainer.innerHTML = query;
        
    } else {
        alert('Nome de Substância ativa vazio!');
    }

}
const form = document.querySelector('#form-habits') 
const nlwSetup = new NLWSetup(form) // iniciando a biblioteca com o elemento form
const button = document.querySelector('header button')

button.addEventListener('click', add) 
form.addEventListener("change", save)

function add() {

    const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
    const dayExists = nlwSetup.dayExists(today)

    if(dayExists) {
        alert("Dia já incluso")
        return
    } else {

        nlwSetup.addDay("01/01")
        nlwSetup.addDay("02/01")
        nlwSetup.addDay("03/01")
        nlwSetup.addDay("04/01")
        nlwSetup.addDay("05/01")
        nlwSetup.addDay("06/01")
        nlwSetup.addDay("07/01")
        nlwSetup.addDay("08/01")
        nlwSetup.addDay("09/01")
        nlwSetup.addDay("10/01")
        nlwSetup.addDay("11/01")
        nlwSetup.addDay("12/01")
        nlwSetup.addDay("13/01")
        nlwSetup.addDay("14/01")
        nlwSetup.addDay("15/01")
        nlwSetup.addDay("16/01")
        nlwSetup.addDay("17/01")
        nlwSetup.addDay("18/01")
        nlwSetup.addDay("19/01")
        nlwSetup.addDay("20/01")
        nlwSetup.addDay("21/01")
        nlwSetup.addDay("22/01")
        nlwSetup.addDay("23/01")
        nlwSetup.addDay("24/01")
        nlwSetup.addDay("25/01")
        nlwSetup.addDay("26/01")
        nlwSetup.addDay("27/01")
        nlwSetup.addDay("28/01")
        nlwSetup.addDay("29/01")
        nlwSetup.addDay("30/01")
        nlwSetup.addDay("31/01")
    }
}

function save() {
    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
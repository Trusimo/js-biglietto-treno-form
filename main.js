const submit = document.getElementById("submit-btn");

submit.addEventListener("click", function() {

    var nome = document.getElementById("username").value;
    var eta = document.getElementById("userage").value;
    var chilometri = document.getElementById("userkm").value;
    var carrozza = Math.floor(Math.random() * 11);
    var numerobiglietto = Math.floor(Math.random() * 101);

    if (isNaN(eta) || isNaN(chilometri)) {
        alert("Inserire dati validi")
    }

    if (chilometri > 200 || chilometri < 10) {
        alert ("Non esistono tratte per il chilometraggio selezionato")
    }

    if (eta < 14) {
        alert ("Non puoi viaggiare da solo")
    }

    if (eta < 18) {
        var prezzo = 0.168 * (chilometri);
    } else if (eta > 65) {
        var prezzo = 0.126 * (chilometri);
    } else {
        var prezzo = 0.21 * (chilometri);
    }

    document.getElementById("nome").innerHTML = (nome);
    document.getElementById("prezzo").innerHTML = (prezzo).toFixed(2);
    document.getElementById("carrozza").innerHTML = (carrozza);
    document.getElementById("numerobiglietto").innerHTML = (numerobiglietto)
})

const reset = document.getElementById("reset-btn");

reset.addEventListener('click', function() {
    document.getElementById("nome").innerHTML = "";
    document.getElementById("prezzo").innerHTML = "";
    document.getElementById("carrozza").innerHTML = "";
    document.getElementById("numerobiglietto").innerHTML = "";
})
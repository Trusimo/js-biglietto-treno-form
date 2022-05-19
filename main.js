var nome = document.getElementById("username").value;
var eta = document.getElementById("userage").value;
var chilometri = document.getElementById("userkm").value;

const submit = document.getElementById(submit-btn);

submit.addEventListener("click", function() {
    if (eta < 17) {
        var prezzo = 0.168 * (chilometri);
    } else if (eta > 65) {
        var prezzo = 0.126 * (chilometri);
    } else {
        var prezzo = 0.21 * (chilometri);
    }
    document.getElementById("nome").innerHTML = (nome)
})
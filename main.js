var chilometri = prompt("Quanti chilometri devi percorrere?");
var eta = prompt ("Quanti anni hai?");

if (eta < 17) {
    var prezzo = 0.168 * (chilometri);
} else if (eta > 65) {
    var prezzo = 0.126 * (chilometri);
} else {
    var prezzo = 0.21 * (chilometri);
}

document.getElementById("userage").innerHTML = (eta);
document.getElementById("userkm").innerHTML = (chilometri);
document.getElementById("userprice").innerHTML = (prezzo);
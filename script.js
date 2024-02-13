let USD = document.getElementById('USD');
let EGP = document.getElementById('EGP');
let m = document.getElementById('m');


USD.onkeyup = function() {
    EGP.value = USD.value * 45;
}

EGP.onkeyup = function() {
    USD.value = EGP.value / 45;
    m.value = USD.value / 0.01;


}
m.onkeyup = function() {
    USD.value = m.value * 0.01;
    EGP.value = USD.value * 45;

}

USD.onkeyup = function() {
    m.value = USD.value / 0.01;
    EGP.value = USD.value / 45;

}
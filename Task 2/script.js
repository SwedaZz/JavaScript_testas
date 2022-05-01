/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

let button = document.getElementById("btn__element");

let number = parseInt(document.getElementById("btn__state").innerHTML);

button.addEventListener("click", addOne);

function addOne() {
    number += 1;
    return document.getElementById("btn__state").innerHTML = number;
}
/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

// function kgToLbs(x) { x * 2.2046; };

// function kgToG(x) { x / 1000};

// function kgToOz(x) { x * 35.274};

// let weight = document.getElementById("search").value;

document.querySelector("form").addEventListener("submit", mainFunction);

function mainFunction(event) {
    event.preventDefault();
    const weight = document.getElementById("search").value;
    let kgToLbs = weight * 2.2046;
    let kgToG = weight * 1000;
    let kgToOz = weight * 35.274;
    return document.getElementById("output").textContent = 
    `${weight} Kg. = ${kgToLbs} Lbs., ${kgToG} g., ${kgToOz} Oz.`;
}



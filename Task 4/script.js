/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

fetch(ENDPOINT)
        .then((myData) => myData.json())
        .then((getData) => {
          let output = "";

          getData.forEach((item, index) => {
            output += `
    <div class="card">
        <h2 class="brand"> ${item.brand} </h2>
        <p class="models"> ${item.models} </p>
    </div>`;
          });

          console.log(output)

          document.getElementById("output").innerHTML = output;
        });
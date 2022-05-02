/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

const displayCars = (cars) => {
    const output = document.getElementById("output");
    cars.forEach(car => {
        const cardDiv = document.createElement("div");

        const brand = document.createElement("h1");
        brand.innerText = car.brand;

        const modelList = document.createElement("ul");

        let numberofModels = car.models.length;

        for (let i = 0; i < numberofModels; ++i) {
            
            model = document.createElement('li');
    
            model.innerHTML = car.models[i];
    
            modelList.appendChild(model);
        }

        cardDiv.append(brand, modelList);

        output.append(cardDiv);
    });
}

const fetchCarCards = async () => {
    try {
      const response = await fetch(ENDPOINT);
      if (response.ok) {
        const cars = await response.json();
        displayCars(cars);
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  fetchCarCards();
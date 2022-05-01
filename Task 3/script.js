/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

button = document.getElementById("btn");

button.addEventListener("click", fetchUsers);

function fetchUsers() {

    fetch(ENDPOINT)
        .then((myData) => myData.json())
        .then((getData) => {
          let output = "";

          getData.forEach((item, index) => {
            output += `
    <div class="card">
        <h2 class="login"> ${item.login} </h2>
        <img class="userImg" src="${item.avatar_url}" alt="foto_${item.login}">
    </div>`;
          });

          document.getElementById("output").innerHTML = output;
        });
    }

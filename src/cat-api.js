const BASE_URL = "https://api.thecatapi.com/v1/";
const API_KEY =
  "live_egpF2PAPEBVhu3HyyeTIg9WBCAEYPCR0rSPh7cGn6wiVteBIvwrTNWq6M5BnZuMN";

const selectElement = document.querySelector(".breed-select");
const loader = document.querySelector(".loader");

loader.toggleAttribute("data-loader");

/* ?api_key=${API_KEY}

{
  method: "GET",
  headers: {
    "x-api-key":
      "live_egpF2PAPEBVhu3HyyeTIg9WBCAEYPCR0rSPh7cGn6wiVteBIvwrTNWq6M5BnZuMN",
  },

  `${BASE_URL}breeds?api_key=${API_KEY}`

  "https://api.thecatapi.com/v1/images/search?api_key=live_egpF2PAPEBVhu3HyyeTIg9WBCAEYPCR0rSPh7cGn6wiVteBIvwrTNWq6M5BnZuMN"
*/

function fetchBreeds() {
  fetch(`${BASE_URL}breeds?api_key=${API_KEY}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.status);
      }

      return res.json();
    })
    .then((data) => {
      console.log(data);

      fillSelect(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

// fetch(`${BASE_URL}breeds?api_key=${API_KEY}`)
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error(res.status);
//     }

//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);

//     fillSelect(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

function fillSelect(data) {
  data.forEach((element) => {
    const newOption = document.createElement("option");
    newOption.textContent = element.name;
    newOption.setAttribute("value", element.id);

    selectElement.append(newOption);

    // optionsArray.push(`document.querySelector(option[value=${element.id}]`);
  });

  selectElement.toggleAttribute("data-select");
  loader.toggleAttribute("data-loader");
}

fetchBreeds();

const BASE_URL = "https://api.thecatapi.com/v1/";
const API_KEY =
  "live_egpF2PAPEBVhu3HyyeTIg9WBCAEYPCR0rSPh7cGn6wiVteBIvwrTNWq6M5BnZuMN";

const catInfo = document.querySelector(".cat-info");
export const selectElement = document.querySelector(".breed-select");
export const loaderElement = document.querySelector(".loader");
const errorElement = document.querySelector(".error");

export function fetchBreeds() {
  return fetch(`${BASE_URL}breeds?api_key=${API_KEY}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.status);
      }

      loaderElement.toggleAttribute("data-loader");

      return res.json();
    })
    .catch((error) => {
      errorElement.toggleAttribute("data-error");

      console.log(error);
    });
}

export function fillSelect(data) {
  data.forEach((element) => {
    const newOption = document.createElement("option");
    newOption.textContent = element.name;
    newOption.setAttribute("value", element.id);

    selectElement.append(newOption);
  });
}

export function fetchCatByBreed(breedId) {
  return fetch(`${BASE_URL}images/search?breed_ids=${breedId}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.status);
      }

      loaderElement.toggleAttribute("data-loader");

      return res.json();
    })
    .catch((error) => {
      loaderElement.toggleAttribute("data-loader");
      errorElement.toggleAttribute("data-error");

      console.log(error);
    });
}

import { fetchBreeds, fillSelect, fetchCatByBreed } from "./cat-api";
import { selectElement, loaderElement } from "./cat-api";

export const catInfo = document.querySelector(".cat-info");
const catPhoto = document.querySelector(".cat-photo");
const breedName = document.querySelector(".breed-name");
const breedDesc = document.querySelector(".breed-description");
const temperamentDesc = document.querySelector(".temperament-description");
const temperament = document.querySelector(".temperament");

function fillCatInfo(catObj) {
  breedName.textContent = catObj.name;
  breedDesc.textContent = catObj.description;
  temperamentDesc.textContent = catObj.temperament;
  temperament.textContent = "Temperament:";
}

function addCatPhoto(photoObj, breedName) {
  catPhoto.src = photoObj.url;
  catPhoto.alt = breedName;
}

fetchBreeds().then((data) => {
  fillSelect(data);

  selectElement.toggleAttribute("data-select");
  loaderElement.toggleAttribute("data-loader");
});

catInfo.removeAttribute("data-div");

selectElement.addEventListener("change", (event) => {
  catInfo.toggleAttribute("data-div");

  const selectedValue = event.currentTarget.value;

  fetchCatByBreed(selectedValue).then((data) => {
    addCatPhoto(...data, selectedValue);
  });

  loaderElement.toggleAttribute("data-loader");

  fetchBreeds().then((data) => {
    fillCatInfo(data.find((element) => element.id == selectedValue));
    catInfo.toggleAttribute("data-div");
  });

  loaderElement.toggleAttribute("data-loader");
});

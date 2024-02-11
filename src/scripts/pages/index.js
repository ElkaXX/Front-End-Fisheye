import Api from "../api/api";

const displayData = async (photographers) => {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const card = photographer.getUserCardDOM();
    photographersSection.appendChild(card);
  });
};

const init = async () => {
  const photographers = await Api.getPhotographersAsync();
  displayData(photographers);
};

init();

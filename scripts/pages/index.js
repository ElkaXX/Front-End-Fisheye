const displayData = async (photographers) => {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const card = photographer.getUserCardDOM();
    photographersSection.appendChild(card);
  });
};

const init = async () => {
  const api = new Api();
  const photographers = await api.getPhotographersAsync();
  displayData(photographers);
};

init();

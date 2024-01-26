async function getPhotographers() {
  const response = await fetch("data/photographers.json");
  return await response.json();
}

function displayPhotographer(photographer) {
  const name = document.querySelector(".photograph-header__name");
  const location = document.querySelector(".photograph-header__location");
  const tag = document.querySelector(".photograph-header__tag");
  const img = document.querySelector(".photograph-header__img");

  name.textContent = photographer.name;
  location.textContent = `${photographer.city}, ${photographer.country}`;
  tag.textContent = photographer.tagline;
  img.src = `assets/photographers/${photographer.id}/${photographer.portrait}`;
}

function displayPhotos(id, photos) {
  const list = document.querySelector(".photograph-photos");

  photos.forEach((photo) => {
    const listItem = getMediaListItemTemplate(id, photo);
    list.appendChild(listItem);
  });
}

async function init() {
  const { photographers, media } = await getPhotographers();

  const photographerId = new URL(location.href).searchParams.get("id");

  const photograpther = photographers.find(
    (element) => element.id === +photographerId
  );

  const photos = media.filter(
    (element) => element.photographerId === +photographerId
  );

  displayPhotographer(photograpther);
  displayPhotos(photograpther.id, photos);
}

init();

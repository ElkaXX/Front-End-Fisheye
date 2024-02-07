const displayPhotographer = (photographer) => {
  const name = document.querySelector(".photograph-header__name");
  const location = document.querySelector(".photograph-header__location");
  const tag = document.querySelector(".photograph-header__tag");
  const img = document.querySelector(".photograph-header__img");

  const mediaFactory = new MediaFactory();
  const portrait = mediaFactory.getPhotograptherPortrait(
    photographer.id,
    photographer.portrait
  );

  name.textContent = photographer.name;
  location.textContent = `${photographer.city}, ${photographer.country}`;
  tag.textContent = photographer.tagline;
  img.src = portrait.src;
};

const displayMediaList = (mediaList) => {
  const dropdown = document.querySelector(".photograph-filters__dropdown");
  const filterValue = dropdown.value;

  displayMediaByFilter(mediaList, filterValue);

  dropdown.addEventListener("change", () => {
    const newFilterValue = dropdown.value;
    displayMediaByFilter(mediaList, newFilterValue);
  });
};

const displayMediaByFilter = (mediaList, filterValue) => {
  const list = document.querySelector(".photograph-photos");
  list.innerHTML = "";


  if (filterValue === "popular") {
    mediaList.sort((a, b) => b.likes - a.likes);
  } else if (filterValue === "date") {
    mediaList.sort((a, b) => a.date - b.date);
  } else if (filterValue === "title") {
    mediaList.sort((a, b) => a.title.localeCompare(b.title));
  }

  mediaList.forEach((media) => {
    const listItem = media.getMediaListItemDOM();
    list.appendChild(listItem);
  });

  initGallery();
};

const init = async () => {
  const photographerId = new URL(location.href).searchParams.get("id");

  const api = new Api();
  const photographer = await api.getPhotographerByIdAsync(photographerId);
  const mediaList = await api.getPhotographerMediaListAsync(photographerId);

  displayPhotographer(photographer);
  displayMediaList(mediaList);
};

init();

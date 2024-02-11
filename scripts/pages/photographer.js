const likedMediaIds = new Set();

const displayPhotographer = (photographer) => {
  const name = document.querySelector(".photograph-header__name");
  const location = document.querySelector(".photograph-header__location");
  const tag = document.querySelector(".photograph-header__tag");
  const img = document.querySelector(".photograph-header__img");

  const mediaFactory = new MediaFactory();
  const portraitImg = mediaFactory.getPhotograptherPortrait(
    photographer.id,
    photographer.name,
    photographer.portrait
  );

  name.textContent = photographer.name;
  location.textContent = `${photographer.city}, ${photographer.country}`;
  tag.textContent = photographer.tagline;
  img.src = portraitImg.src;
  img.alt = portraitImg.alt;
};

const displayMediaList = (mediaList) => {
  const dropdown = document.querySelector(".photograph-filters__dropdown");

  displayMediaByFilter(mediaList, dropdown.value);

  dropdown.addEventListener("change", () => {
    displayMediaByFilter(mediaList, dropdown.value);
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
    const likeBtn = listItem.querySelector(".photograph-photos__like-btn");
    const likeImg = listItem.querySelector(".photograph-photos__like-media");
    const count = listItem.querySelector(".photograph-photos__like-count");

    if (likedMediaIds.has(media.id)) {
      likeImg.classList.add("photograph-photos__like-media_liked");
    } else {
      likeImg.classList.remove("photograph-photos__like-media_liked");
    }

    likeBtn.addEventListener("click", () => {
      if (likedMediaIds.has(media.id)) {
        likedMediaIds.delete(media.id);
        media.likes -= 1;
      } else {
        likedMediaIds.add(media.id);
        media.likes += 1;
      }

      likeImg.classList.toggle("photograph-photos__like-media_liked");
      count.textContent = media.likes;
    });

    list.appendChild(listItem);
  });

  initGallery();
};

const initKeyboard = () => {
  document.addEventListener("keydown", (event) => {
    galleryHandleKeyboardEvent(event);
  });
};

const init = async () => {
  document
    .querySelector(".contact-modal__form")
    .addEventListener("submit", submitForm);

  const photographerId = new URL(location.href).searchParams.get("id");

  const api = new Api();
  const photographer = await api.getPhotographerByIdAsync(photographerId);
  const mediaList = await api.getPhotographerMediaListAsync(photographerId);

  displayPhotographer(photographer);
  displayMediaList(mediaList);
};

init();
initKeyboard();

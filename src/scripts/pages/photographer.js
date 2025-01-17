/* eslint-disable no-param-reassign */
import MediaFactory from "../factories/MediaFactory";
import Api from "../api/api";
import { initGallery, galleryHandleKeyboardEvent } from "../utils/gallery";
import { displayModal, closeModal, submitForm } from "../utils/contactForm";

const likedMediaIds = new Set();

const displayPhotographer = (photographer) => {
  const name = document.querySelector(".photograph-header__name");
  const location = document.querySelector(".photograph-header__location");
  const tag = document.querySelector(".photograph-header__tag");
  const img = document.querySelector(".photograph-header__img");

  const portraitImg = MediaFactory.getPhotograptherPortrait(
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

const displaySummary = (mediaList, photographer = null) => {
  if (photographer) {
    const price = document.querySelector(".photograpth-summary__price");
    price.textContent = `${photographer.price}€ / jour`;
  }

  const likeCount = document.querySelector(".photograpth-summary__count");

  likeCount.textContent = mediaList.reduce(
    (partialSum, element) => partialSum + element.likes,
    0
  );
};

// Fonction pour afficher une liste d'éléments multimédias en fonction du filtre sélectionné
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

    // Ajout d'un gestionnaire d'événement pour le bouton "Like"
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
      displaySummary(mediaList);
    });

    list.appendChild(listItem);
  });

  initGallery();
};

const displayMediaList = (mediaList) => {
  const dropdown = document.querySelector(".photograph-filters__dropdown");

  displayMediaByFilter(mediaList, dropdown.value);

  dropdown.addEventListener("change", () => {
    displayMediaByFilter(mediaList, dropdown.value);
  });
};

// Fonction d'initialisation du traitement des événements clavier
const initKeyboard = () => {
  document.addEventListener("keydown", (event) => {
    galleryHandleKeyboardEvent(event);
  });
};

const initContactForm = () => {
  const openBtn = document.querySelector(".photograph-header__btn");
  const closeBtn = document.querySelector(".contact-modal__close");
  const form = document.querySelector(".contact-modal__form");

  openBtn.addEventListener("click", displayModal);
  closeBtn.addEventListener("click", closeModal);
  form.addEventListener("submit", submitForm);
};

const init = async () => {
  // eslint-disable-next-line no-restricted-globals
  const photographerId = new URL(location.href).searchParams.get("id");

  const photographer = await Api.getPhotographerByIdAsync(photographerId);
  const mediaList = await Api.getPhotographerMediaListAsync(photographerId);

  displayPhotographer(photographer);
  displayMediaList(mediaList);
  displaySummary(mediaList, photographer);
};

init();
initKeyboard();
initContactForm();

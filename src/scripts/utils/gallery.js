/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
let selectedMedia;
// Fonction pour mettre à jour le titre de la galerie en fonction du média sélectionné
const applyMediaTitle = (mediaElement) => {
  const galleryTitle = document.querySelector(".photograpth-gallery__title");
  const title = mediaElement.parentElement.querySelector(
    ".photograph-photos__wrapper .photograph-photos__title"
  ).textContent;

  galleryTitle.textContent = title;
};
// Fonction pour mettre à jour le contenu de la galerie en fonction du média sélectionné
const applyMediaContent = (mediaElement) => {
  const wrapper = document.querySelector(".photograpth-gallery__wrapper");
  const media = mediaElement.querySelector(".photograph-photos__media");

  wrapper.querySelector(".photograpth-gallery__media")?.remove();

  // Créer un nouvel élément multimédia de galerie en fonction du type de média (image ou vidéo)
  let galleryMedia;

  if (media.src) {
    galleryMedia = document.createElement("img");
    galleryMedia.src = media.src;
    galleryMedia.alt = media.alt;
  } else {
    const source = media.querySelector("source");
    galleryMedia = document.createElement("video");
    galleryMedia.controls = true;

    const sourceElement = document.createElement("source");
    sourceElement.src = source.src;
    sourceElement.type = "video/mp4";

    galleryMedia.appendChild(sourceElement);
  }

  galleryMedia.classList.add("photograpth-gallery__media");
  wrapper.insertBefore(galleryMedia, wrapper.firstChild);
};

// Fonction pour mettre à jour la galerie avec le média sélectionné
const applyMediaToGallery = (mediaElement) => {
  applyMediaTitle(mediaElement);
  applyMediaContent(mediaElement);
};

// Fonction pour gérer la navigation vers l'élément multimédia précédent
const handlePrevious = (mediaList) => {
  // Détermine l'index de l'élément multimédia précédent
  const index = selectedMedia.index === 0 ? mediaList.length - 1 : selectedMedia.index - 1;

  const mediaElement = mediaList[index];
  applyMediaToGallery(mediaElement);
  selectedMedia = mediaElement;
};

const handleNext = (mediaList) => {
  const index = mediaList.length - 1 === selectedMedia.index ? 0 : selectedMedia.index + 1;

  const mediaElement = mediaList[index];
  applyMediaToGallery(mediaElement);
  selectedMedia = mediaElement;
};

// Fonction pour gérer la navigation au clavier dans la galerie
const galleryHandleArrows = (gallery, event) => {
  const mediaList = document.querySelectorAll(
    ".photograph-photos__media-wrapper"
  );

  if (event.code === "ArrowRight") {
    handleNext(mediaList, selectedMedia);
  } else if (event.code === "ArrowLeft") {
    handlePrevious(mediaList, selectedMedia);
  }
};

// Fonction pour gérer la fermeture de la galerie
const galleryHandleClose = (gallery, event) => {
  if (event.code === "Escape") {
    gallery.style.display = "none";
    selectedMedia.focus();
  }
};

// Fonction pour initialiser la galerie
export const initGallery = () => {
  const mediaList = document.querySelectorAll(
    ".photograph-photos__media-wrapper"
  );
  const gallery = document.querySelector(".photograpth-gallery");
  const galleryClose = document.querySelector(".photograpth-gallery__close");
  const galleryPrevious = document.querySelector(
    ".photograpth-gallery__button_previous"
  );
  const galleryNext = document.querySelector(
    ".photograpth-gallery__button_next"
  );

  galleryClose.addEventListener(
    "click",
    () => (gallery.style.display = "none")
  );

  galleryPrevious.addEventListener("click", () => handlePrevious(mediaList));

  galleryNext.addEventListener("click", () => handleNext(mediaList));

  // Fonction pour ouvrir la galerie avec l'élément média sélectionné
  const openGalleryWithSelectedElement = (mediaElement) => {
    selectedMedia = mediaElement;
    gallery.style.display = "flex";
    applyMediaToGallery(mediaElement);
  };

  // Écouteurs d'événements pour chaque élément multimédia
  mediaList.forEach((mediaElement, index) => {
    mediaElement.index = index;

    mediaElement.addEventListener("click", (e) => {
      e.preventDefault();
      openGalleryWithSelectedElement(mediaElement);
    });

    mediaElement.addEventListener("keypress", (e) => {
      if (e.code === "Enter") {
        e.preventDefault();
        openGalleryWithSelectedElement(mediaElement);
      }
    });
  });
};

/** Fonction pour gérer les événements du clavier pour
     navigation et fermeture de la galerie
    */
export const galleryHandleKeyboardEvent = (event) => {
  const gallery = document.querySelector(".photograpth-gallery");

  // Si la galerie n'est pas affichée, return
  if (gallery.style.display !== "flex") {
    return;
  }

  galleryHandleArrows(gallery, event);
  galleryHandleClose(gallery, event);
};

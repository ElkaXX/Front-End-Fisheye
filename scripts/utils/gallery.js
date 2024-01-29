function initGallery() {
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

  let selectedMedia;

  galleryClose.addEventListener(
    "click",
    () => (gallery.style.display = "none")
  );

  galleryPrevious.addEventListener("click", () => {
    if (selectedMedia.index === 0) {
      return;
    }
    const mediaElement = mediaList[selectedMedia.index - 1];
    applyMediaToGallery(mediaElement);
    selectedMedia = mediaElement;
  });

  galleryNext.addEventListener("click", () => {
    if (mediaList.length - 1 === selectedMedia.index) {
      return;
    }
    const mediaElement = mediaList[selectedMedia.index + 1];
    applyMediaToGallery(mediaElement);
    selectedMedia = mediaElement;
  });

  mediaList.forEach((mediaElement, index) => {
    mediaElement.index = index;

    mediaElement.addEventListener("click", (e) => {
      e.preventDefault();
      selectedMedia = mediaElement;
      gallery.style.display = "flex";
      applyMediaToGallery(mediaElement);
    });
  });
}

function applyMediaToGallery(mediaElement) {
  const galleryMedia = document.querySelector(".photograpth-gallery__media");
  const galleryTitle = document.querySelector(".photograpth-gallery__title");
  const title = mediaElement.parentElement.querySelector(
    ".photograph-photos__wrapper .photograph-photos__title"
  ).textContent;
  const mediaSrc = mediaElement.querySelector(".photograph-photos__media").src;

  galleryMedia.src = mediaSrc;
  galleryTitle.textContent = title;
}

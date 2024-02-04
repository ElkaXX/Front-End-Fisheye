const initGallery = () => {
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
    const index =
      selectedMedia.index === 0
        ? mediaList.length - 1
        : selectedMedia.index - 1;

    const mediaElement = mediaList[index];
    applyMediaToGallery(mediaElement);
    selectedMedia = mediaElement;
  });

  galleryNext.addEventListener("click", () => {
    const index =
      mediaList.length - 1 === selectedMedia.index
        ? 0
        : selectedMedia.index + 1;

    const mediaElement = mediaList[index];
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

const applyMediaToGallery = (mediaElement) => {
  applyMediaTitle(mediaElement);
  applyMediaContent(mediaElement);
}

const applyMediaTitle = (mediaElement) => {
  const galleryTitle = document.querySelector(".photograpth-gallery__title");
  const title = mediaElement.parentElement.querySelector(
    ".photograph-photos__wrapper .photograph-photos__title"
  ).textContent;

  galleryTitle.textContent = title;
}

const applyMediaContent = (mediaElement) => {
  const wrapper = document.querySelector(".photograpth-gallery__wrapper");
  const media = mediaElement.querySelector(".photograph-photos__media");

  wrapper.querySelector(".photograpth-gallery__media")?.remove();

  let galleryMedia;

  if (media.src) {
    galleryMedia = document.createElement("img");
    galleryMedia.src = media.src;
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
}

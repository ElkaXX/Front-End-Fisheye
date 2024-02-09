let selectedMedia;

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

  galleryClose.addEventListener(
    "click",
    () => (gallery.style.display = "none")
  );

  galleryPrevious.addEventListener("click", () => handlePrevious(mediaList));

  galleryNext.addEventListener("click", () => handleNext(mediaList));

  const openGalleryWithSelectedElement = (mediaElement) => {
    selectedMedia = mediaElement;
    gallery.style.display = "flex";
    applyMediaToGallery(mediaElement);
  };

  mediaList.forEach((mediaElement, index) => {
    mediaElement.index = index;

    mediaElement.addEventListener("click", (e) => {
      e.preventDefault();
      openGalleryWithSelectedElement(mediaElement);
    });
  });
};

const handlePrevious = (mediaList) => {
  const index =
    selectedMedia.index === 0 ? mediaList.length - 1 : selectedMedia.index - 1;

  const mediaElement = mediaList[index];
  applyMediaToGallery(mediaElement);
  selectedMedia = mediaElement;
};

const handleNext = (mediaList) => {
  const index =
    mediaList.length - 1 === selectedMedia.index ? 0 : selectedMedia.index + 1;

  const mediaElement = mediaList[index];
  applyMediaToGallery(mediaElement);
  selectedMedia = mediaElement;
};

const applyMediaToGallery = (mediaElement) => {
  applyMediaTitle(mediaElement);
  applyMediaContent(mediaElement);
};

const applyMediaTitle = (mediaElement) => {
  const galleryTitle = document.querySelector(".photograpth-gallery__title");
  const title = mediaElement.parentElement.querySelector(
    ".photograph-photos__wrapper .photograph-photos__title"
  ).textContent;

  galleryTitle.textContent = title;
};

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
};

const galleryHandleKeyboardEvent = (event) => {
  const gallery = document.querySelector(".photograpth-gallery");

  if (gallery.style.display !== "flex") {
    return;
  }

  const mediaList = document.querySelectorAll(
    ".photograph-photos__media-wrapper"
  );

  if (event.code === "ArrowRight") {
    handleNext(mediaList, selectedMedia);
  } else if (event.code === "ArrowLeft") {
    handlePrevious(mediaList, selectedMedia);
  }
};

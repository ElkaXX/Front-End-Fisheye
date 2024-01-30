const getMediaListItemTemplate = (id, media) => {
  let mediaElement;
/*function getMediaListItemTemplate(id, media) {
  let mediaElement;*/

  if (media.image) {
    mediaElement = document.createElement("img");
    mediaElement.src = `assets/photographers/${id}/${media.image}`;
  } else {
    mediaElement = document.createElement("video");
    mediaElement.controls = true;

    const sourceElement = document.createElement("source");
    sourceElement.src = `assets/photographers/${id}/${media.video}`;
    sourceElement.type = "video/mp4";

    mediaElement.appendChild(sourceElement);
  }

  mediaElement.classList.add("photograph-photos__media");
  const mediaWrapper = document.createElement("div");
  mediaWrapper.classList.add("photograph-photos__media-wrapper");
  mediaWrapper.appendChild(mediaElement);

  const title = document.createElement("div");
  title.classList.add("photograph-photos__title");
  title.textContent = media.title;

  const likeCount = document.createElement("div");
  likeCount.textContent = media.likes;
  likeCount.classList.add("photograph-photos__like-count");
  const likeImg = document.createElement("img");
  likeImg.setAttribute("src", "assets/images/favorite.png");
  const likes = document.createElement("div");
  likes.classList.add("photograph-photos__likes");
  likes.appendChild(likeCount);
  likes.appendChild(likeImg);

  const wrapper = document.createElement("div");
  wrapper.classList.add("photograph-photos__wrapper");
  wrapper.appendChild(title);
  wrapper.appendChild(likes);

  const li = document.createElement("li");
  li.classList.add("photograph-photos__item");
  li.appendChild(mediaWrapper);
  li.appendChild(wrapper);

  return li;
}

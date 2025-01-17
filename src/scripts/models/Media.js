export default class Media {
  // Crée une instance de Media.
  constructor(data) {
    if (data) {
      this.id = data.id;
      this.title = data.title;
      this.likes = data.likes;
      this.date = new Date(data.date);
      this.price = data.price;
    }
  }

  /**
   * Génère et renvoie un élément DOM représentant l'élément média item.
   * @returns {HTMLLIElement} L'élément DOM représentant l'élément media item.
   * @throws {Error} Génère une erreur si les données de l'élément media item ne sont pas disponible
   */

  getMediaListItemDOM() {
    if (!this.id) {
      throw new Error("No data");
    }

    const mediaElement = this.getHtmlDOM();

    mediaElement.classList.add("photograph-photos__media");
    const mediaWrapper = document.createElement("div");
    mediaWrapper.tabIndex = 0;
    mediaWrapper.classList.add("photograph-photos__media-wrapper");
    mediaWrapper.appendChild(mediaElement);

    const title = document.createElement("div");
    title.classList.add("photograph-photos__title");
    title.setAttribute("aria-hidden", true);
    title.textContent = this.title;

    const likeCount = document.createElement("div");
    likeCount.textContent = this.likes;
    likeCount.classList.add("photograph-photos__like-count");
    const likeImg = document.createElement("img");
    likeImg.setAttribute("src", "assets/images/favorite.png");
    likeImg.setAttribute("alt", "heart");
    likeImg.classList.add("photograph-photos__like-media");
    const likeBtn = document.createElement("button");
    likeBtn.classList.add("photograph-photos__like-btn");
    likeBtn.appendChild(likeImg);
    const likes = document.createElement("div");
    likes.classList.add("photograph-photos__likes");
    likes.appendChild(likeCount);
    likes.appendChild(likeBtn);

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
}

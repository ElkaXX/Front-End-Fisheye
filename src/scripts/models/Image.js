import Media from "./Media";

export default class Image extends Media {
  constructor(src, alt, data) {
    super(data);
    this.src = src;
    this.alt = alt;
  }

  getHtmlDOM(classes) {
    const img = document.createElement("img");
    img.src = this.src;
    img.alt = this.alt;

    classes?.forEach((className) => {
      img.classList.add(className);
    });

    return img;
  }
}

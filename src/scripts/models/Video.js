import Media from "./Media";

export default class Video extends Media {
  constructor(src, type, data = undefined) {
    super(data);
    this.src = src;
    this.type = type;
  }

  getHtmlDOM(classes) {
    const video = document.createElement("video");
    const source = document.createElement("source");

    video.controls = true;
    source.src = this.src;
    source.type = this.type;

    classes?.forEach((className) => {
      video.classList.add(className);
    });

    video.appendChild(source);

    return video;
  }
}

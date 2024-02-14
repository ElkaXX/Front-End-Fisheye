import Image from "../models/Image";
import Video from "../models/Video";

export default class MediaFactory {
  // Méthode Factory pour créer l'image portrait d'un photographe
  static getPhotograptherPortrait(photographerId, name, portraitName) {
    const src = `assets/photographers/${photographerId}/${portraitName}`;
    return new Image(src, name);
  }

  // Méthode Factory pour créer le média d'un photographe (image ou vidéo)
  static getPhotograptherMedia(photographerId, media) {
    const baseMediaPath = `assets/photographers/${photographerId}/`;

    if (media.image) {
      const src = baseMediaPath + media.image;
      return new Image(src, media.title, media);
    }

    if (media.video) {
      const src = baseMediaPath + media.video;
      return new Video(src, "video/mp4", media);
    }

    throw new Error("Invalid media");
  }
}

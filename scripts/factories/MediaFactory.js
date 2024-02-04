class MediaFactory {
  getPhotograptherPortrait(photographerId, portraitName) {
    const src = `assets/photographers/${photographerId}/${portraitName}`;
    return new Image(src, portraitName);
  }

  getPhotograptherMedia(photographerId, media) {
    const baseMediaPath = `assets/photographers/${photographerId}/`;

    if (media.image) {
      const src = baseMediaPath + media.image;
      return new Image(src, media.title, media);
    } else if (media.video) {
      const src = baseMediaPath + media.video;
      return new Video(src, "video/mp4", media);
    } else {
      throw new Error("Invalid data");
    }
  }
}

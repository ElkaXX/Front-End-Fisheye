import Photographer from "../models/Photographer";
import MediaFactory from "../factories/MediaFactory";

export default class Api {
  static async getPhotographersAsync() {
    const data = await this.#readData();
    return data.photographers.map(
      (photographer) => new Photographer(photographer)
    );
  }

  static async getPhotographerByIdAsync(id) {
    const photographers = await this.getPhotographersAsync();
    const photographer = photographers.find((element) => element.id === +id);
    return new Photographer(photographer);
  }

  static async getPhotographerMediaListAsync(id) {
    const data = await this.#readData();

    const mediaList = data.media
      .filter((media) => media.photographerId === +id)
      .map((media) => MediaFactory.getPhotograptherMedia(id, media));

    return mediaList;
  }

  // Private function to read data from json file.
  static async #readData() {
    const response = await fetch("data/photographers.json");
    const data = await response.json();
    // eslint-disable-next-line no-console
    console.log(data);
    return data;
  }
}

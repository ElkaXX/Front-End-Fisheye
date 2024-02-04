class Api {
  async getPhotographersAsync() {
    const data = await this.#readData();
    return data.photographers.map(
      (photographer) => new Photographer(photographer)
    );
  }

  async getPhotographerByIdAsync(id) {
    const photographers = await this.getPhotographersAsync();
    const photographer = photographers.find((element) => element.id === +id);
    return new Photographer(photographer);
  }

  async getPhotographerMediaListAsync(id) {
    const data = await this.#readData();
    const mediaFactory = new MediaFactory();

    const mediaList = data.media
      .filter((media) => media.photographerId === +id)
      .map((media) => mediaFactory.getPhotograptherMedia(id, media));

    return mediaList;
  }

  // Private function to read data from json file.
  async #readData() {
    const response = await fetch("data/photographers.json");
    return await response.json();
  }
}

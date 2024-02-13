import MediaFactory from "../factories/MediaFactory";

export default class Photographer {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.portrait = data.portrait;
    this.city = data.city;
    this.country = data.country;
    this.tagline = data.tagline;
    this.price = data.price;
  }

  getUserCardDOM() {
    // Méthode de classe qui renvoie un élément DOM représentant la carte du photographe
    const article = document.createElement("article");

    const img = MediaFactory.getPhotograptherPortrait(
      this.id,
      this.name,
      this.portrait
    ).getHtmlDOM();

    const h2 = document.createElement("h2");
    h2.setAttribute("aria-hidden", true);
    h2.textContent = this.name;

    const locationP = document.createElement("p");
    locationP.textContent = `${this.city}, ${this.country}`;
    locationP.classList.add("photographer__location");

    const tagP = document.createElement("p");
    tagP.textContent = this.tagline;
    tagP.classList.add("photographer__tag");

    const priceP = document.createElement("p");
    priceP.textContent = `${this.price}€/jour`;
    priceP.classList.add("photographer__price");

    const link = document.createElement("a");
    link.setAttribute("href", `photographer.html?id=${this.id}`);
    link.classList.add("photographer__link");
    link.appendChild(img);
    link.appendChild(h2);

    article.appendChild(link);
    article.appendChild(locationP);
    article.appendChild(tagP);
    article.appendChild(priceP);

    return article;
  }
}

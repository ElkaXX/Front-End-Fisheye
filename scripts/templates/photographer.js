function photographerTemplate(data) {
  const { id, name, portrait, city, country, tagline, price } = data;

  const picture = `assets/photographers/id/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");

    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.setAttribute("alt", name);

    const h2 = document.createElement("h2");
    h2.textContent = name;

    const locationP = document.createElement("p");
    locationP.textContent = `${city}, ${country}`;
    locationP.classList.add("photographer__location");

    const tagP = document.createElement("p");
    tagP.textContent = tagline;
    tagP.classList.add("photographer__tag");

    const priceP = document.createElement("p");
    priceP.textContent = `${price}€/jour`;
    priceP.classList.add("photographer__price");

    const link = document.createElement("a");
    link.setAttribute("href", `photographer?id=${id}`);
    link.classList.add("photographer__link");
    link.appendChild(img);
    link.appendChild(h2);

    article.appendChild(link);
    article.appendChild(locationP);
    article.appendChild(tagP);
    article.appendChild(priceP);

    return article;
  }

  return { name, picture, getUserCardDOM };
}

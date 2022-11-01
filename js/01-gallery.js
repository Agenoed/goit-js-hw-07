import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");

function createGalleryItems() {
  galleryItems.forEach((item) => {
    const galleryItem = document.createElement("div");
    galleryItem.classList.add("gallery__item");

    const link = document.createElement("a");
    link.classList.add("gallery__link");
    link.setAttribute("href", `${item.original}`);
    galleryItem.append(link);

    const image = document.createElement("img");
    image.classList.add("gallery__image");
    image.setAttribute("src", `${item.preview}`);
    image.setAttribute("data-source", `${item.original}`);
    image.setAttribute("alt", `${item.description}`);
    link.append(image);

    return galleryRef.append(galleryItem);
  });
}

createGalleryItems();

galleryRef.addEventListener("click", openModal);

function openModal(event) {
  const instance = basicLightbox.create(`
	<img src="${event.target.dataset.source}">`);
  instance.show();
  event.preventDefault();

  galleryRef.addEventListener("keydown", (evnt) => {
    if (evnt.code === "Escape") {
      instance.close();
    }
  });
}

import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");

function createGalleryItems() {
  galleryItems.forEach((item) => {
    const galleryItem = document.createElement("a");
    galleryItem.classList.add("gallery__item");
    galleryItem.setAttribute("href", `${item.original}`);

    const image = document.createElement("img");
    image.classList.add("gallery__image");
    image.setAttribute("src", `${item.preview}`);
    image.setAttribute("alt", `${item.description}`);
    galleryItem.append(image);

    return galleryRef.append(galleryItem);
  });
}

createGalleryItems();

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
gallery.on("show.simplelightbox", function () {});

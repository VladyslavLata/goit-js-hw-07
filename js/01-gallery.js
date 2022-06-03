import { galleryItems } from './gallery-items.js';

// Change code below this line

// console.log(galleryItems);
let modal;
const galleryEl = document.querySelector('.gallery');
const body = document.body;
galleryEl.addEventListener('click', onGetOriginalImageClick);

galleryEl.innerHTML = createGalleryItemMarkup(galleryItems);
 
function onGetOriginalImageClick(e) {
    e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  
 modal= basicLightbox.create(`
    <img src=${e.target.dataset.source} width="1280">
`);

  modal.show();

  body.addEventListener('mousedown', removeEventListenerClickEsc, {once: true});
  window.addEventListener('keydown', onCloseModalClickEsc);
  }

function onCloseModalClickEsc() {
  if (event.code === "Escape") {
   modal.close();
    removeEventListenerClickEsc();
    removeEventListenerMousedownBody();
  }
 }

 function removeEventListenerMousedownBody() {
   body.removeEventListener('mousedown', removeEventListenerClickEsc);
  }

function removeEventListenerClickEsc() {
  window.removeEventListener('keydown', onCloseModalClickEsc);
  }

function createGalleryItem({ preview, original, description }) {
     return `<div class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</div>`}

function createGalleryItemMarkup(galleryItems) {
  return galleryItems.map(createGalleryItem).join('');
}


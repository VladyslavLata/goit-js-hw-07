import { galleryItems } from './gallery-items.js';

// Change code below this line

// console.log(galleryItems);
const galleryEl = document.querySelector('.gallery');

galleryEl.addEventListener('click', onGetOriginalImageClick);

galleryEl.innerHTML = createGalleryItemMarkup(galleryItems);
 
function onGetOriginalImageClick(e) {
    e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  
  const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

  }

function createGalleryItem({ preview, original, description }) {
  return `<li><a class="gallery__item" href='${original}'>
  <img class="gallery__image" src='${preview}' 
  alt='${description}' /></a></li>`;
}

function createGalleryItemMarkup(galleryItems) {
  return galleryItems.map(createGalleryItem).join('');
}


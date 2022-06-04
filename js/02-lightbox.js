import { galleryItems } from './gallery-items.js';

// Change code below this line

// console.log(galleryItems);
const galleryEl = document.querySelector('.gallery');
galleryEl.addEventListener('click', onPreventDefaultClick);

galleryEl.innerHTML = createGalleryItemMarkup(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

function onPreventDefaultClick(e) {
    e.preventDefault();
  }

function createGalleryItem({ preview, original, description }) {
  return `<li><a class="gallery__item" href='${original}'>
  <img class="gallery__image" src='${preview}' 
  alt='${description}' /></a></li>`;
}

function createGalleryItemMarkup(galleryItems) {
  return galleryItems.map(createGalleryItem).join('');
}


import { galleryItems } from './gallery-items.js';

console.log(galleryItems)

const galleryRef = document.querySelector('.gallery')

const itemsMarkUp = createGalleryItemMarkUp(galleryItems)

galleryRef.insertAdjacentHTML('beforeend', itemsMarkUp)

function createGalleryItemMarkUp(images) {
    return images.map(({preview, original, description}) => {
        return `
    <div class="gallery__item">
    <a href="${original}" class="gallery__link">
      <img 
      class="gallery__image" 
      src="${preview}" 
      data-src="${original}" 
      alt="${description}" 
      />
    </a>
  </div>
    `}).join('')
    }

galleryRef.addEventListener('click', evt => {

    if (evt.target.nodeName !== 'IMG') {
		return
	}

  evt.preventDefault()

  const choosenImage = evt.target.dataset.src

  const instance = basicLightbox.create(`
  <img src="${choosenImage}" width = '800' height='600'>
  `)
  instance.show()

  galleryRef.addEventListener('keydown', evt => {
		if (evt.key === 'Escape') {
			instance.close()
		}
  })
  
})
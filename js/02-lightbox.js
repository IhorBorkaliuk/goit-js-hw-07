import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery')

const gallery = []

galleryItems.forEach(image => {
    const galleryLink = document.createElement('a')
    galleryLink.classList.add('gallery__link')
    galleryLink.href = image.original
    const galleryImage = document.createElement('img')
    galleryImage.classList.add('gallery__image')
    galleryImage.src = image.preview
    galleryImage.alt = image.description

    galleryLink.append(galleryImage)
    gallery.push(galleryLink)

})

galleryRef.append(...gallery)


let imgLab = new SimpleLightbox('.gallery a', {
    captionDelay: '150',
    animationSpeed: '150'
});
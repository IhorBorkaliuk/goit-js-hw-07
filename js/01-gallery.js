import { galleryItems } from './gallery-items.js';

console.log(galleryItems)


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>Метод 1<<<<<<<<<<<<<<<<<<<<<<<<<



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







// >>>>>>>>>>>>>>>>>>>>>Метод 2<<<<<<<<<<<<<<<<<<<<<<<<<<<





// const galleryRef = document.querySelector('.gallery')

// let gallery = []

// galleryItems.forEach(image => {
//   const container = document.createElement('div')
//   container.classList.add('gallery__item')

//   const link = document.createElement('a')
//   link.classList.add('gallery__link')
//   link.href = image.original

//   const img = document.createElement('img')
//   img.classList.add('gallery__image')
//   img.src = image.preview
//   img.setAttribute('data-src', image.original)
//   img.alt = image.description

//   container.append(link)
//   link.append(img)

//   gallery.push(container)

// })

// galleryRef.append(...gallery)

// galleryRef.addEventListener('click', evt => {

//     if (evt.target.nodeName !== 'IMG') {
// 		return
// 	}

//   evt.preventDefault()

//   const choosenImage = evt.target.getAttribute('data-src')

//   const instance = basicLightbox.create(`
//   <img src="${choosenImage}" width = '1500' height='600'>
//   `)
//   instance.show()

//   galleryRef.addEventListener('keydown', evt => {
// 		if (evt.key === 'Escape') {
// 			instance.close()
// 		}
//   })

// })
























import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { getImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';

const refs = {
  searchForm: document.querySelector('.search-form'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
};

const viewImage = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionsDelay: 250,
});

refs.searchForm.addEventListener('submit', onSearchFormSubmit);

function onSearchFormSubmit(event) {
  event.preventDefault();

  const query = event.currentTarget.elements.query.value.trim();

  refs.gallery.innerHTML = '';
  refs.loader.classList.remove('visually-hidden');

  getImages(query)
    .then(data => {
      const dataImages = data.hits;
      if (dataImages.length === 0) {
        iziToast.info({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          maxWidth: 350,
          color: '#a3b6fd',
          closeOnEscape: true,
          closeOnClick: true,
          position: 'topRight',
        });
      } else {
        refs.gallery.innerHTML = '';
        renderImages(dataImages, refs.gallery);
        viewImage.refresh();
      }
    })
    .catch(error => {
      iziToast.error({
        message: error,
        closeOnEscape: true,
        closeOnClick: true,
        position: 'topRight',
      });
    })
    .finally(() => {
      refs.loader.classList.add('visually-hidden');
      refs.searchForm.reset();
    });
}

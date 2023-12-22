const elUrlShortener = document.querySelector('.url-shortener')
const elUrlShortenerForm = document.querySelector('.js-url-shortener-form');
const elUrlShortenerResults =document.querySelector('.js-url-shortener__results');
const elCopyButton = document.querySelector('.js-copy-button');


if (elUrlShortenerForm) {
  elUrlShortenerForm.addEventListener('submit', function (evt) {
    evt.preventDefault ();

    elUrlShortenerResults.classList.add('url-shortener__results--open');
  })
}

if (elUrlShortener) {
  elUrlShortener.addEventListener('click', function (evt) {
    if (evt.target.matches('.js-copy-button')) {
      evt.target.textContent = 'Copied!';
      evt.target.classList.add('copy-button--copied');

      setTimeout(function () {
        evt.target.textContent = 'Copy';
        evt.target.classList.remove('copy-button--copied');
      }, 2000)
    }
  })
}

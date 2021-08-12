var myCarousel = document.querySelector('#carouselExampleControls')
var carousel = new bootstrap.Carousel(myCarousel)

document.addEventListener("DOMContentLoaded", (event) => {
  console.log('Страница загружена');
  document.cookie = "value=John"
  console.log(document.cookie);
});

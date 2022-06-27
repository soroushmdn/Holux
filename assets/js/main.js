//  @@@@@@@@@@@@@@@@@@ PRELOADER @@@@@@@@@@@@@@@@@@
onload = () => {
  const preloader = document.getElementById('preloader');

  setTimeout(() => {
    preloader.style.display = 'none';
  }, 2500);
};

// @@@@@@@@@@@@@@ change header background @@@@@@@@@@@@@@

const header = document.getElementById('header');
window.addEventListener('scroll', scrollHeader);

function scrollHeader() {
  if (this.scrollY >= 50) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
}

// @@@@@@@@@@@@@@ show scrollup @@@@@@@@@@@@@@

window.addEventListener('scroll', scrollUp);

function scrollUp() {
  const scrollUp = document.getElementById('scrollup');
  if (this.scrollY >= 200) {
    scrollUp.classList.add('show-scrollup');
  } else {
    scrollUp.classList.remove('show-scrollup');
  }
}

//  @@@@@@@@@@@@@@@@@@ swiperjs.com @@@@@@@@@@@@@@@@@@

const popularSwiper = new Swiper('.popular__swiper', {
  spaceBetween: 23,
  loop: 'true',
  slidesPerView: 'auto',
  centeredSlides: true,
  grabCursor: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    767: {
      slidesPerView: 3,
    },

    992: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

//  @@@@@@@@@@@@@@@@@@ scrollrevealjs.org @@@@@@@@@@@@@@@@@@
const sr = ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 2500,
  delay: 300,
});

sr.reveal(`.home__container,.popular__swiper,.subscribe__container`);

sr.reveal(`.logos__img,.footer__container div,.footer__group div `, {
  interval: 200,
});

sr.reveal(`.value__img,.contact__data`, { origin: 'left' });
sr.reveal(`.value__data,.contact__img`, { origin: 'right' });

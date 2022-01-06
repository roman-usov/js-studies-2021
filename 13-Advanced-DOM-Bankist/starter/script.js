'use strict';

///////////////////////////////////////
// Elements

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const header = document.querySelector('.header');
const navLinksEl = document.querySelector('.nav__links');
const navEl = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const contentAreas = document.querySelectorAll('.operations__content');
const sections = document.querySelectorAll('.section');

// Modals

const openModal = function (event) {
  event.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//// Page Navigation

// document.querySelectorAll('.nav__link').forEach(link =>
//   link.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   })
// );

navLinksEl.addEventListener('click', function (e) {
  e.preventDefault();
  // if (e.target.classList.contains('nav__link'))
  //if (e.target.matches('.nav__link'))
  if (e.target.matches('.nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//// Create Elements

const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'We use cookies for improved performance.';
message.innerHTML =
  'We use cookies for improved performance. <button class="btn btn--close-cookie">Got it!</button>';
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

header.after(message);
const cookieBtnEl = document.querySelector('.btn--close-cookie');

cookieBtnEl.addEventListener('click', () => {
  message.remove();
});

message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';

//// Scrolling

btnScrollTo.addEventListener('click', e => {
  const s1coords = section1.getBoundingClientRect();
  //console.log(s1coords);
  //console.log(e.target.getBoundingClientRect());
  console.log('Current scroll (X/Y)', window.pageYOffset, window.pageXOffset);
  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
  console.log(
    s1coords.left + window.pageXOffset,
    s1coords.top + window.pageYOffset
  );
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );
  //window.scrollTo(0, 200);

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });
  section1.scrollIntoView({ behavior: 'smooth' });
});

//// Tab Component

tabsContainer.addEventListener('click', function (e) {
  e.preventDefault();

  const clicked = e.target.closest('.operations__tab');

  if (!clicked) return;

  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  contentAreas.forEach(area =>
    area.classList.remove('operations__content--active')
  );

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//// Menu Fade Animation

const changeNavElOpacity = function (event) {
  if (event.target.matches('.nav__link')) {
    const link = event.target;
    const navLinks = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    navLinks.forEach(navLink => {
      if (navLink !== link) navLink.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

navEl.addEventListener('mouseover', changeNavElOpacity.bind(0.5));
navEl.addEventListener('mouseout', changeNavElOpacity.bind(1));

//// Sticky Navigation

const navHeight = navEl.getBoundingClientRect().height;

const activateStickyNav = function (entries) {
  entries.forEach(entry => {
    //console.log(entry);
    if (!entry.isIntersecting) navEl.classList.add('sticky');
    else navEl.classList.remove('sticky');
  });
};

const headerObserver = new IntersectionObserver(activateStickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

//// Reveal sections on scroll

// const createSectionObserver = function (sect) {
//   const activateSection = function (entries) {
//     entries.forEach(entry => {
//       console.log(entry);
//       if (entry.isIntersecting) sect.classList.remove('section--hidden');
//       else sect.classList.add('section--hidden');
//     });
//   };
//
//   const sectionObserver = new IntersectionObserver(activateSection, {
//     root: null,
//     threshold: 0.2,
//   });
//   sectionObserver.observe(sect);
// };

const revealSection = function (entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.remove('section--hidden');
    else entry.target.classList.add('section--hidden');
  });
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.2,
});

sections.forEach(section => {
  section.classList.add('section--hidden');
  sectionObserver.observe(section);
});

//sections.forEach(section => createSectionObserver(section));

// const activateSection = function (entries) {
//   entries.forEach(entry => {
//     console.log(entry);
//     if (entry.isIntersecting) section1.classList.remove('section--hidden');
//     else section1.classList.add('section--hidden');
//   });
// };
//
// const sectionObserver = new IntersectionObserver(activateSection, {
//   root: null,
//   threshold: 0.2,
// });
// sectionObserver.observe(section1);

//// Lazy Image Loading

const lazyImages = document.querySelectorAll('.lazy-img');

const loadImage = function (entries, observer) {
  entries.forEach(entry => {
    // console.log(entry);
    if (!entry.isIntersecting) return;
    entry.target.src = entry.target.dataset.src;
    entry.target.addEventListener('load', function (e) {
      entry.target.classList.remove('lazy-img');
    });
    observer.unobserve(entry.target);
  });
};

const lazyImageObserver = new IntersectionObserver(loadImage, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

lazyImages.forEach(image => lazyImageObserver.observe(image));

//// Slider Component

// Slider Functions

const slider = function () {
  const createDots = function () {
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.classList.add('dots__dot');
      dot.setAttribute('data-slide', `${i}`);
      dotContainer.append(dot);
    });
  };

  const goToSlide = function (curSlide) {
    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(${(i - curSlide) * 100}%)`;
    });
    document.querySelectorAll('.dots__dot').forEach(dot => {
      dot.classList.remove('dots__dot--active');
    });
    document
      .querySelector(`.dots__dot[data-slide="${curSlide}"]`)
      .classList.add('dots__dot--active');
  };

  const nextSlide = function () {
    if (currentSlide < slideNumber - 1) currentSlide++;
    else currentSlide = 0;
    goToSlide(currentSlide);
  };

  const previousSlide = function () {
    if (currentSlide === 0) currentSlide = slideNumber - 1;
    else currentSlide--;
    goToSlide(currentSlide);
  };

  const slidesWithKeys = function (e) {
    e.preventDefault();
    e.key === 'ArrowRight' && nextSlide();
    e.key === 'ArrowLeft' && previousSlide();
  };

  const sliderInit = function () {
    slideNumber = slides.length;
    currentSlide = 0;
    createDots();
    goToSlide(currentSlide);
  };

  // Slider Elements

  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  const slideRightBtn = document.querySelector('.slider__btn--right');
  const slideLeftBtn = document.querySelector('.slider__btn--left');
  const dotContainer = document.querySelector('.dots');

  // Slider Globals and Init

  let slideNumber, currentSlide;

  sliderInit();

  // Slider Event Listeners and Observers

  slideRightBtn.addEventListener('click', nextSlide);
  slideLeftBtn.addEventListener('click', previousSlide);

  const allowSlidesWithKeyboard = function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting)
        document.addEventListener('keydown', slidesWithKeys);
      else document.removeEventListener('keydown', slidesWithKeys);
    });
  };

  const sliderObserver = new IntersectionObserver(allowSlidesWithKeyboard, {
    root: null,
    threshold: 0.7,
  });

  sliderObserver.observe(slider);

  dotContainer.addEventListener('click', function (e) {
    if (!e.target.matches('.dots__dot')) return;
    const { slide } = e.target.dataset;
    goToSlide(slide);
  });
};

slider();

/////////////////////////
// Lectures

////// Special Events in a Web Page Lifecycle

document.addEventListener('DOMContentLoaded', function (e) {
  console.log(e);
});

window.addEventListener('load', function (e) {
  console.log(e);
});

// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = '';
// });

////// Intersection Observer API

// const observerCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };
// const observerOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };
// const observer = new IntersectionObserver(observerCallback, observerOptions);
// observer.observe(section1);

////// DOM Traversing

// const h1 = document.querySelector('h1');

//// Going Downwards: child

// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
//
// h1.firstElementChild.style.color = 'orangered';
// h1.lastElementChild.style.color = 'white';
//
// //// Going Upwards: parent
//
// console.log(h1.parentNode);
// console.log(h1.parentElement);
//
// h1.closest('.header').style.background = 'var(--gradient-secondary';

//// Going sideways: sibling

// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
//
// console.log(h1.previousSibling);
// console.log(h1.nextSibling);
//
// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(el => {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });

//Attributes

// console.log(message.style.backgroundColor);
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);
// console.log(document);

// const AllSections = document.querySelectorAll('.section');
// console.log(AllSections);
//
// document.getElementById('section--1');
//
// const AllButtons = document.getElementsByTagName('button');
// console.log(AllButtons);
//
// console.log(document.getElementsByClassName('btn'));

//header.append(message);
//header.prepend(message);
//header.append(message.cloneNode(true));
//header.before(message);
// document.documentElement.style.setProperty('--color-primary', 'orangered');
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.className);
// console.log(logo.getAttribute('designer'));
// logo.setAttribute('designer', 'Roman');
// console.log(logo.getAttribute('designer'));
// logo.alt = 'Beautiful minimalist logo';
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.getAttribute('src'));
// const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute('href'));
//
// //Data Attributes
// console.log(logo.dataset.versionNumber);
//
// //Classes
// logo.classList.add('class1', 'class2');
// logo.classList.remove('class2');
// logo.classList.toggle('class1');
// logo.classList.contains('class1');

// const h1 = document.querySelector('h1');
//
// const displayHeader = () => {
//   alert("onmousenter: Great! You're reading the heading");
// };
// h1.addEventListener('mouseenter', displayHeader);
//
// setTimeout(() => h1.removeEventListener('mouseenter', displayHeader), 3000);

// h1.onmouseenter = e => {
//   alert("onmousenter: Great! You're reading the heading");
// };

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1)) + min;
//
// const randomColor = () => `rgb(
//   ${randomInt(0, 255)},
//   ${randomInt(0, 255)},
//   ${randomInt(0, 255)})`;
//
// console.log(randomColor());
//
// const featuresEl = document.querySelector('.nav__link');
// const itemsEl = document.querySelector('.nav__item');
// const linksEl = document.querySelector('.nav__links');
// const navEl = document.querySelector('.nav');
//
// featuresEl.addEventListener('click', function (e) {
//   e.preventDefault();
//   this.style.backgroundColor = randomColor();
//   console.log('Link', e.target);
//   console.log('El', featuresEl);
// });
//
// linksEl.addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('Links', e.target);
//   console.log('El', linksEl);
//   console.log(this === e.currentTarget);
//   e.stopPropagation();
// });
//
// navEl.addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log('Nav', e.target);
//     console.log('El', navEl);
//   },
//   true
// );

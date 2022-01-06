'use strict';

const imagesContainer = document.querySelector('.images');

/*
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening');
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve('You WIN!!');
    } else {
      reject(new Error('You lost your money'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

const wait = seconds =>
  new Promise(resolve => setTimeout(resolve, seconds * 1000));

wait(1)
  .then(() => {
    console.log('1 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('2 seconds passed');
    return wait(1);
  })
  .then(() => {
    console.log('3 seconds passed');
  });

Promise.resolve('Created a resolved promise immediately').then(res =>
  console.log(res)
);
Promise.reject(new Error('Created a rejected promise immediately')).catch(err =>
  console.error(err)
);

const el = document.querySelector('img');
el.src = 'dog.jpg';
el.addEventListener('load', () => {
  el.classList.add('fadeIn');
});
*/

let image;

const wait = seconds =>
  new Promise(resolve => setTimeout(resolve, seconds * 1000));

const renderError = function (msg) {
  imagesContainer.insertAdjacentText('beforeend', msg);
};

const createImage = function (imgPath) {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.setAttribute('alt', 'alt');
    img.src = imgPath;
    img.addEventListener('load', () => {
      imagesContainer.appendChild(img);
      resolve(img);
    });
    img.addEventListener('error', () => {
      reject(new Error('Failed to load image'));
    });
  });
};

//console.log(createImage('/img/img-5.jpg'));
createImage('/img/img-1.jpg')
  .then(img => {
    image = img;
    return wait(2);
  })
  .then(() => {
    image.style.display = 'none';
    return createImage('/img/img-2.jpg');
  })
  .then(img => {
    image = img;
    return wait(2);
  })
  .then(() => {
    image.style.display = 'none';
  })
  .catch(error => {
    renderError(`Something went wrong: 💥💥 ${error.message}. Try again!`);
  });

// const newImage = document.createElement('img');
// newImage.setAttribute('alt', 'alt');
// newImage.src = '/img/img-1.jpg';
// newImage.addEventListener('load', () => {
//   imagesContainer.appendChild(newImage);
//   console.log('image loaded');
// });
// newImage.addEventListener('error', e => {
//   console.log(e);
// });

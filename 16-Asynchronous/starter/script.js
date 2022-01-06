'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
/*

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};

const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
            <img class="country__img" src="${data.flag}" alt=""/>
            <div class="country__data">
              <h3 class="country__name">${data.name}</h3>
              <h4 class="country__region">${data.region}</h4>
              <p class="country__row"><span>👫</span>${(
                +data.population / 1000000
              ).toFixed(1)}</p>
              <p class="country__row"><span>🗣️</span>${
                data.languages[0].name
              }</p>
              <p class="country__row"><span>💰</span>${
                data.currencies[0].code
              }</p>
            </div>
    </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
};

function getJSON(url) {
  return fetch(url).then(response => response.json());
}

function handleError(responseData) {
  if (responseData.status === 404)
    throw new Error(`${responseData.status} Country not found`);
  if (/^4([0-3]|[5-9]){2}/g.test(responseData.status))
    throw new Error(
      `${responseData.status} Handling Error: ${responseData.message}`
    );
}

const getCountryData = function (country) {
  getJSON(`https://restcountries.com/v2/name/${country}`)
    .then(data => {
      console.log(data);
      if (data.status) handleError(data);
      renderCountry(data[0]);
      const neighbor = data[0].borders ? data[0].borders[0] : null;
      //const neighbor = 'edssgdsgdtr';
      if (!neighbor) throw new Error('No neighbor found');
      return getJSON(`https://restcountries.com/v2/alpha/${neighbor}`);
    })
    .then(data => {
      console.log(data);
      //if (data === undefined) return;
      if (data.status) handleError(data);
      renderCountry(data, 'neighbour');
    })
    .catch(err => {
      renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
    })
    .finally(() => (countriesContainer.style.opacity = '1'));
};
*/

// const getCountryData = function (country) {
//   getJSON(`https://restcountries.com/v2/name/${country}`)
//     .then(data => {
//       return handleError(data);
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       //const neighbor = data[0].borders[0];
//       const neighbor = 'sldkslk';
//       if (!neighbor) return;
//       return getJSON(`https://restcountries.com/v2/alpha/${neighbor}`);
//       //return fetch(`https://restcountries.com/v2/alpha/${neighbor}`);
//     })
//     .then(data => {
//       return handleError(data);
//     })
//     .then(data => {
//       renderCountry(data, 'neighbour');
//     })
//     .catch(err => {
//       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => (countriesContainer.style.opacity = '1'));
// };

// const getCountryData = function (country) {
//   getJSON(`https://restcountries.com/v2/name/${country}`)
//     .then(data => {
//       if (data.status === 404)
//         throw new Error(`${data.status} Country not found`);
//       renderCountry(data[0]);
//       //const neighbor = data[0].borders[0];
//       const neighbor = 'sldkslk';
//       if (!neighbor) return;
//       return getJSON(`https://restcountries.com/v2/alpha/${neighbor}`);
//       //return fetch(`https://restcountries.com/v2/alpha/${neighbor}`);
//     })
//     .then(data => {
//       if (data.status === 404)
//         throw new Error(`${data.status} Country not found`);
//       renderCountry(data, 'neighbour');
//     })
//     .catch(err => {
//       console.error(`${err.message} 💥💥💥`);
//       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => (countriesContainer.style.opacity = '1'));
// };

/*

const getCountryAndNeighbor = function (country) {
  // AJAX call for Country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    // Render Country 1
    renderCountry(data);

    // Get neighboring countries
    const neighbors = data.borders;

    if (!neighbors) return;

    neighbors.forEach(neighbor => getNeighbor(neighbor));
  });
};
*/

// const requestAndDisplayCountry = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     const html = `
//     <article class="country">
//             <img class="country__img" src="${data.flag}" alt=""/>
//             <div class="country__data">
//               <h3 class="country__name">${data.name}</h3>
//               <h4 class="country__region">${data.region}</h4>
//               <p class="country__row"><span>👫</span>${(
//                 +data.population / 1000000
//               ).toFixed(1)}</p>
//               <p class="country__row"><span>🗣️</span>${
//                 data.languages[0].name
//               }</p>
//               <p class="country__row"><span>💰</span>${
//                 data.currencies[0].code
//               }</p>
//             </div>
//     </article>
//   `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = '1';
//   });
// };

/*const getNeighbor = function (neighbor) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/alpha/${neighbor}`);
  request.send();
  request.addEventListener('load', function () {
    const data = JSON.parse(this.responseText);
    renderCountry(data, 'neighbour');
  });
};*/

//getCountryAndNeighbor('russia');
// requestAndDisplayCountry('russia');

/*setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 seconds passed');
    setTimeout(() => {
      console.log('3 seconds passed');
    }, 1000);
  }, 1000);
}, 1000);*/

//// FETCH API

//const request = fetch(`https://restcountries.com/v2/name/portugal`);
//console.log(request);

///Implementation with a separate getNeighbor method
/*

const getNeighbor = function (neighbor) {
  fetch(`https://restcountries.com/v2/alpha/${neighbor}`)
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'));
};

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbors = data[0].borders;
      if (!neighbors) return;
      neighbors.forEach(neighbor => getNeighbor(neighbor));
    });
};
*/

///Implementation with chaining

/*

btn.addEventListener('click', function () {
  countriesContainer.innerHTML = '';
  getCountryData('australia');
});
*/

//getCountryData('portugal');

/*
console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise1').then(res => console.log(res));

Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(res);
});
console.log('Test end');
*/

////// Promisifying

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

*/

////// Promisifying the Geolocation API

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = '1';
};

const handleGeoApiError = function (data) {
  if (data.error.code !== '018')
    throw new Error(`${data.error.code} ${data.error.message}`);
  if (data.error.code === '018')
    throw new Error(`${data.error.code} ${data.error.description}`);
};

function handleCountryApiError(responseData) {
  if (responseData.status === 404)
    throw new Error(`${responseData.status} Country not found`);
  if (/^4([0-3]|[5-9]){2}/g.test(responseData.status))
    throw new Error(
      `${responseData.status} Handling Error: ${responseData.message}`
    );
}

const getJSON = function (url, errorMsg) {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

const getCountryData = function (country) {
  getJSON(`https://restcountries.com/v2/name/${country}`)
    .then(data => {
      console.log(data);
      if (data.status) handleCountryApiError(data);
      renderCountry(data[0]);
      const neighbor = data[0].borders ? data[0].borders[0] : null;
      //const neighbor = 'edssgdsgdtr';
      if (!neighbor) throw new Error('No neighbor found');
      return getJSON(`https://restcountries.com/v2/alpha/${neighbor}`);
    })
    .then(data => {
      console.log(data);
      //if (data === undefined) return;
      if (data.status) handleCountryApiError(data);
      renderCountry(data, 'neighbour');
    })
    .catch(err => {
      renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
    })
    .finally(() => (countriesContainer.style.opacity = '1'));
};

const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
            <img class="country__img" src="${data.flag}" alt=""/>
            <div class="country__data">
              <h3 class="country__name">${data.name}</h3>
              <h4 class="country__region">${data.region}</h4>
              <p class="country__row"><span>👫</span>${(
                +data.population / 1000000
              ).toFixed(1)}</p>
              <p class="country__row"><span>🗣️</span>${
                data.languages[0].name
              }</p>
              <p class="country__row"><span>💰</span>${
                data.currencies[0].code
              }</p>
            </div>
    </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = '1';
};

/*
const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?json=1`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      if (data.error) handleGeoApiError(data);
      if (!data.country || !data.city)
        throw new Error('Your request did not produce any results');
      console.log(`You are in ${data.city}, ${data.country}.`);
      getCountryData(data.country);
    })
    .catch(err => {
      console.log(err.message);
      renderError(`Something went wrong 💥💥 ${err.message} Try again!`);
    })
    .finally(() => (countriesContainer.style.opacity = '1'));
};

btn.addEventListener('click', function () {
  countriesContainer.innerHTML = '';
  whereAmI(52.508, 13.381);
});
*/

const getPosition = function () {
  return new Promise((resolve, reject) => {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition()
  .then(position => console.log(position))
  .catch(err => console.log(err));

console.log('Getting location');
/*

const whereAmI = function () {
  getPosition()
    .then(position => {
      const { latitude: lat, longitude: lng } = position.coords;
      return fetch(`https://geocode.xyz/${lat},${lng}?json=1`);
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      if (data.error) handleGeoApiError(data);
      if (!data.country || !data.city)
        throw new Error('Your request did not produce any results');
      console.log(`You are in ${data.city}, ${data.country}.`);
      getCountryData(data.country);
    })
    .catch(err => {
      console.log(err.message);
      renderError(`Something went wrong 💥💥 ${err.message} Try again!`);
    })
    .finally(() => (countriesContainer.style.opacity = '1'));
};
*/

btn.addEventListener('click', function () {
  countriesContainer.innerHTML = '';
  whereAmI();
});

const whereAmI = async function () {
  try {
    const geolocation = await getPosition();
    const { latitude: lat, longitude: lng } = geolocation.coords;
    const geocodeResponse = await fetch(
      `https://geocode.xyz/${lat},${lng}?json=1`
    );
    //const geocodeResponse = await fetch(`https://geocode.xyz/${0},${1}?json=1`);
    console.log(geocodeResponse);
    const geocodeResponseBody = await geocodeResponse.json();
    if (geocodeResponseBody.error) handleGeoApiError(geocodeResponseBody);
    if (!geocodeResponseBody.country || !geocodeResponseBody.city)
      throw new Error('Your request did not produce any results');
    const countriesResponse = await fetch(
      `https://restcountries.com/v2/name/${geocodeResponseBody.country}`
    );
    const countriesResponseBody = await countriesResponse.json();
    if (countriesResponseBody.status)
      handleCountryApiError(countriesResponseBody);
    renderCountry(countriesResponseBody[0]);
    return `You are in ${geocodeResponseBody.city}, ${geocodeResponseBody.country}`;
  } catch (err) {
    console.log(err);
    renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
    throw new Error(`Something went wrong 💥💥 ${err.message}. Try again!`);
  }
};

/*console.log('1: Will get location');
whereAmI()
  .then(city => console.log(`2: ${city}`))
  .catch(err => console.log(`2: ${err.message}`))
  .finally(() => console.log('3: Finished getting location'));*/

// let city;
//
// (async function () {
//   console.log('1: Will get location');
//   try {
//     const myLocation = await whereAmI();
//     city = myLocation;
//     console.log(`2: ${myLocation}`);
//   } catch (err) {
//     console.log(`2: ${err.message}`);
//   }
//   console.log('3: Finished getting location');
// })();

/*



try {
  let y = 1;
  const x = 2;
  x = 3;
} catch (err) {
  alert(err.message);
}
*/

const getThreeCountries = async function (c1, c2, c3) {
  try {
    const data = await Promise.all([
      getJSON(
        `https://restcountries.com/v2/name/${c1}`,
        'Something went wrong'
      ),
      getJSON(
        `https://restcountries.com/v2/name/${c2}`,
        'Something went wrong'
      ),
      getJSON(
        `https://restcountries.com/v2/name/${c3}`,
        'Something went wrong'
      ),
    ]);
    console.log(data);
    console.log(data.map(countryArr => countryArr[0].capital));
  } catch (err) {
    console.error(err);
  }
};

getThreeCountries('portugal', 'canada', 'tanzania');

(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v2/name/italy`, 'Something went wrong'),
    getJSON(`https://restcountries.com/v2/name/egypt`, 'Something went wrong'),
    getJSON(`https://restcountries.com/v2/name/mexico`, 'Something went wrong'),
  ]);
  console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request timeout after ${sec * 1000}`));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.com/v2/name/mexico`, 'Something went wrong'),
  timeout(0.3),
])
  .then(res => console.log(res[0]))
  .catch(err => console.log(err.message));

Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Success'),
]).then(res => console.log(res));

Promise.any([
  Promise.reject('Error'),
  Promise.reject('Error'),
  //Promise.resolve('Success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err.message));

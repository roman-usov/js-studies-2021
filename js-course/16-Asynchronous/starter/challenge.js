'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
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

const getJSON = function (url) {
  return fetch(url).then(response => response.json());
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
};

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

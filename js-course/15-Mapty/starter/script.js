'use strict';

//Use the comment below before an element in which you want to ignore the prettier formatting.
// prettier-ignore

/////////////////////////////
//APPLICATION LOGIC

//UI Elements
const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
const mapEl = document.getElementById('map');

class App {
  #map;
  #mapEvent;
  #zoomLevel = 13;
  workouts = [];
  constructor() {
    //Get the user's position
    this._getPosition();

    //Get workout data from the Local Storage
    this._getLocalStorage();
    this._loadWorkouts();
    //Attach event handlers
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);
    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
  }

  //Move a created workout to the Local Storage in the Browser. Called from _newWorkout
  _setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.workouts));
  }

  //Get workout data from the Local Storage. Called in the App class constructor.
  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('workouts'));
    if (!data) return;
    this.workouts = data;
  }

  //Load workouts in the UI from the workouts array. Called in the App class constructor after _getLocalStorage.
  _loadWorkouts() {
    this.workouts.forEach(this._renderWorkout);
  }

  //Load workout markers on the map from the workouts array. Called at the very end of _loadMap when the map becomes available.
  _loadMarkers() {
    this.workouts.forEach(this._renderWorkoutMarker, this);
  }

  //Loads the map at a position received from getCurrentPosition() and adds an event listener to show a workout form
  _loadMap(position) {
    const {
      coords: { latitude, longitude },
    } = position;

    const coords = [latitude, longitude];
    this.#map = L.map(mapEl).setView(coords, this.#zoomLevel);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on('click', this._showForm.bind(this));
    this._loadMarkers();
  }

  //Gets geolocation position coordinates and loads the map by calling _loadMap(position).
  _getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('Could not get your position.');
        }
      );
    }
  }

  //Attached to the map by _loadMap and called by clicking on the map to display the workout entry form.
  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  //Called by _newWorkout to hide the workout entry form after creating a workout.
  _hideForm() {
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';
    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => (form.style.display = 'grid'), 1000);
  }

  //Attached to inputType dropdown list and called upon changing the workout type to display the relevant fields.
  _toggleElevationField() {
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
  }

  //Attached to the form element and called upon submitting a new workout
  _newWorkout(event) {
    event.preventDefault();

    // Helps to check if provided input values are numbers
    function areNumbers(...inputs) {
      return inputs.every(input => Number.isFinite(input));
    }

    // Helps to check if provided input values are positive numbers
    function arePositive(...inputs) {
      return inputs.every(input => input > 0);
    }

    // Get Coordinates
    const {
      latlng: { lat, lng },
    } = this.#mapEvent;

    // Get Data From the Workout Form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    let workout;
    let workoutEl;

    //Check if the input values are valid and create a running workout
    if (type === 'running') {
      const cadence = +inputCadence.value;
      if (
        !areNumbers(
          distance,
          duration,
          cadence || !arePositive(distance, duration, cadence)
        )
      )
        return alert(`Please, enter correct workout details.`);
      workout = new Running(distance, duration, [lat, lng], cadence);
    }

    //Check if the input values are valid and create a cycling workout
    if (type === 'cycling') {
      const elevationGain = +inputElevation.value;
      if (
        !areNumbers(distance, duration, elevationGain) ||
        !arePositive(distance, duration)
      )
        return alert(`Please, enter correct workout details.`);
      workout = new Cycling(distance, duration, [lat, lng], elevationGain);
    }

    //Push the created workout to the workouts array
    this.workouts.push(workout);

    //Render the created workout and its marker in the UI
    this._renderWorkoutMarker(workout);
    this._renderWorkout(workout);

    //Hide the workout entry form
    this._hideForm();

    //Set local storage to all workouts
    this._setLocalStorage();
  }

  //Called by _newWorkout to render a workout marker on the map
  _renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`
      )
      .openPopup();
  }

  //Called by _newWorkout to render a workout card in the UI
  _renderWorkout(workout) {
    //Creates the first part of a workout card with the common fields
    let workoutHTML = `
      <li class="workout workout--${workout.type}" data-id="${workout.id}">
          <h2 class="workout__title">${workout.description}</h2>
          <div class="workout__details">
            <span class="workout__icon">${
              workout.type === 'cycling' ? '🚴‍♀️' : '🏃‍♂️'
            }</span>
            <span class="workout__value">${workout.distance}</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${workout.duration}</span>
            <span class="workout__unit">min</span>
          </div>
    `;

    //Updates the workout card with running details for a running workout
    if (workout.type === 'running') {
      workoutHTML += `
        <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.cadence}</span>
            <span class="workout__unit">min/km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">🦶🏼</span>
            <span class="workout__value">${workout.pace}</span>
            <span class="workout__unit">spm</span>
          </div>
        </li>
      `;
    }

    //Updates the workout card with cycling details for a cycling workout
    if (workout.type === 'cycling') {
      workoutHTML += `
        <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.speed}</span>
            <span class="workout__unit">km/h</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⛰</span>
            <span class="workout__value">${workout.elevationGain}</span>
            <span class="workout__unit">m</span>
          </div>
        </li>
      `;
    }

    //Inserts the created workout card into the form element for display in the UI
    form.insertAdjacentHTML('afterend', workoutHTML);
  }

  //Puts the marker of a clicked workout card to the center of the map. Attached to containerWorkouts to catch events bubbling from child elements
  _moveToPopup(event) {
    //A guard clause to make sure that the event target is a child of a specific parent
    if (!event.target.closest('.workout')) return;

    //Gets the value of the id dataset property from the event target's closest parent
    const workoutId = event.target.closest('.workout').dataset.id;

    //Gets the required workout based on the received workout id
    const workout = this.workouts.find(workout => workout.id === workoutId);

    //Gets workout coordinates from the found workout
    const { coords } = workout;

    //Sets the center of the map to the provided coordinates. Adds animation options.
    this.#map.setView(coords, this.#zoomLevel, {
      animate: true,
      pan: {
        duration: 1,
      },
    });

    //Demo of a public API method - stops working after loading workouts from Local Storagge
    //workout.click();
  }
  reset() {
    localStorage.removeItem('workouts');
    location.reload();
  }
}

/////////////////////////////
//WORKOUT CLASSES

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  clicks = 0;
  constructor(distance, duration, coords) {
    this.distance = distance;
    this.duration = duration;
    this.coords = coords;
  }
  //Creates a description for a running or cycling workout. Called when creating a running or cycling object.
  _setDescription() {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    this.description = `
      ${this.type.slice(0, 1).toUpperCase() + this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}
    `;
  }
  //Demo method to demonstrate a public API
  click() {
    this.clicks++;
  }
}

class Running extends Workout {
  type = 'running';
  constructor(distance, duration, coords, cadence) {
    super(distance, duration, coords);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }
  calcPace() {
    this.pace = Math.round(+this.duration / +this.distance); //minutes per kilometer
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';
  constructor(distance, duration, coords, elevationGain) {
    super(distance, duration, coords);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }
  calcSpeed() {
    this.speed = Math.round(+this.distance / (+this.duration / 60));
    return this.speed;
  }
}

/////////////////////////////
//APPLICATION INIT

const app = new App();
//console.log(app);

/*map.on('click', function (mapEvent) {
  console.log(mapEvent);
  const {
    latlng: { lat, lng },
  } = mapEvent;
  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(
      L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: 'running-popup',
      })
    )
    .setPopupContent('Workout')
    .openPopup();
});*/

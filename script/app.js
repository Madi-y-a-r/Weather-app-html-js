
const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const timeSrc = document.querySelector('img.time');

const updateUI =(data) => {

    const{ cityDets, weather } = data; 
    let timeSrc = null;

    if (weather.IsDayTime) {
       timeSrc = '../img/day.svg';
    }else{
        timeSrc = '../img/night.svg';
    }
    details.innerHTML = `
    <div class="card shadow-lg rounded"> <img src="${timeSrc}" alt="Weather icon" class="time card-img-top" />
      <div class="text-muted text-uppercase text-center details">
        <h5 class="text-3xl text-center">${cityDets.EnglishName}</h5>
        <div class='my-3 text-center'>${weather.WeatherText}</div>
        <div class='display-4 my-4'>
          <span>${weather.Temperature.Metric.Value}</span>
          <span>&deg;C</span>
        </div>
      </div>
    </div>
  `;

    
    if (card && card.classList.contains('d-none')) {
        card.classList.remove('d-none');
      }
}
  
const updateCity = async(city) => {
    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);

    return{cityDets,weather};
}

cityForm.addEventListener('submit', (event) => {
    event.preventDefault();
  
    const city = event.target.city.value.trim(); // Access city value from the form
    cityForm.reset();
  
    updateCity(city)
    .then(data => updateUI(data))
    .catch(error => console.log(error));

});

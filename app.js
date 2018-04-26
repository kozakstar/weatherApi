//Vars
const changeBtn = document.querySelector('.weather__btn');
const modalBtn = document.querySelector('.modal__btn');
let modalBg = document.querySelector(".modal__bg");
let modal = document.querySelector(".modal-box");
// Init UI
const ui = new UI;
const storage = new Storage();

// Get stored location data
const weatherLocation = storage.getLocalCity();
// Init weather
const weather = new Weather(weatherLocation.city);


// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);


changeBtn.addEventListener('click', () => {
    modalBg = document.querySelector(".modal__bg");
    modal = document.querySelector(".modal-box");
    modalBg.classList.add('modal__bg--active');
    modal.classList.add('modal-box--active');
});


modalBtn.addEventListener('click', (e) => {
    let cityInput = document.getElementById('city');
    const city = document.getElementById('city').value;
    if(city === ""){
        cityInput.classList.add('modal__city--error')

    }else{
        weather.changeLocation(city);
        getWeather();
        storage.setLocalCity(city);
        modalBg = document.querySelector(".modal__bg");
        modal = document.querySelector(".modal-box");
        modalBg.classList.remove('modal__bg--active');
        modal.classList.remove('modal-box--active')

    }


});
modal.addEventListener('click',(e) =>{
   if(e.target.className === 'modal__close'){
       modalBg.classList.remove('modal__bg--active');
       modal.classList.remove('modal-box--active')
   }
});


function getWeather() {
    weather.getWeather().then((res) => {
        console.log(res)
        ui.render(res);
    })
        .catch((err) => {
            console.log(err)
        })

}

console.log(localStorage.getItem('city'));


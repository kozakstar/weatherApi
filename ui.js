class UI{
    constructor(weather){
        this.title = document.querySelector('.weather__title');
        this.description = document.querySelector('.weather__description');
        this.temp = document.querySelector('.weather__temp');
        this.icon = document.querySelector('.weather__icon');
        this.rise = document.querySelector('.weather__rise');
        this.set = document.querySelector('.weather__set');
        this.humidity = document.querySelector('.weather__humidity');
        this.wind = document.querySelector('.weather__wind');


    }

    render(weather){
        let rise = new Date(weather.sys.sunrise *1000);
        let set = new Date(weather.sys.sunset *1000);
        this.title.textContent = `${weather.name}, ${weather.sys.country}`;
        this.description.textContent = weather.weather[0].main;
        this.temp.textContent = `(${Math.round(weather.main.temp)} c)`;
        this.icon.setAttribute('src',`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
        this.rise.textContent = `Sunrise time: ${rise.getHours()}:${rise.getMinutes()}`;
        this.set.textContent = `Sunset time: ${set.getHours()}:${set.getMinutes()}`;
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
        this.wind.textContent = `Wind: ${weather.wind.speed} m/s`;


    }
}
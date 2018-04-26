class Weather {
    constructor(city){
        this.apiKey = 'a913efa160ec95e365cc0a2c498404a3';
        this.city = city;
    }

    getWeather(){
        return new Promise((resolve,reject) =>{
            let xhr = new XMLHttpRequest();
            xhr.open('GET',`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&APPID=${this.apiKey}&lang=ru`);
            xhr.addEventListener('load', () => {
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.response))
                }
                else {
                    reject('something went wrong')
                }

            });
            xhr.send()

        })

    };
    changeLocation(city){
        this.city = city

    }

}


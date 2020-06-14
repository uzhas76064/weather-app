export default class WeatherAPI {
    #APP_ID = "e7651cfedf9e77b455ed7fda7a267fed";

    constructor() {
        this._url = `https://api.openweathermap.org/data/2.5/weather?q=`;
        this._urls = [
            `https://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=${this.#APP_ID}`,
            `https://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=${this.#APP_ID}`,
            `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${this.#APP_ID}`
        ];
    }

    async getCitiesWeather(cities=this._urls, units="imperial", lang="en") {
        return Promise.all(cities.map(async cityUrl =>
            fetch(cityUrl)
                .then(async response => {
                    if(response.ok) return response;
                })
                .then(async response => await response.json())
                .catch(response => console.log(response.error))
        ));
    }
}
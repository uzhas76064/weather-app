export default class WeatherAPI {
    #APP_ID = "e7651cfedf9e77b455ed7fda7a267fed";

    constructor() {
        this._url = `https://api.openweathermap.org/data/2.5/weather?q=`;
    }

    async getWeather(city="Moscow", units="imperial", lang="en") {
        let result = await fetch(`${this._url}${city}&appid=${this.#APP_ID}&units=${units}&lang=${lang}`);

        if (!result.ok) {
            throw new Error(`Couldn't fetch ${result.url}. Status: ${result.status}`);
        }

        return await result.json();
    }
}
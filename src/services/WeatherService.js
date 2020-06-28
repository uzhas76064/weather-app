export default class WeatherService {
    #APP_ID = "&appid=e7651cfedf9e77b455ed7fda7a267fed";
    #AQI_TOKEN = "5b51f35cde40ee47e1cf1267ccbbb1eecc8daf78";
    #lang = "ru";
    #units = "metric";

    constructor() {
        this._url = `https://api.openweathermap.org/data/2.5/weather?q=`;
        this._titles = ["Погода!", "Самый точный прогноз", "Forecast для вас!", "Погодочка", "Эх.. Погода.."];

        this.getWeather = this.getWeather.bind(this)
    }

    async getAQI(city) {
        const data = await fetch(`https://api.waqi.info/feed/${city}/?token=${this.#AQI_TOKEN}`);

        return await data.json();
    }

    //Установка случайного заголовка
    setRandomTitle() {
        let titleIndex = Math.floor(Math.random()*3);
        return this._titles[titleIndex];
    }

    //Установка прогноза по умолчанию
    async getDefaultWeather(city="Москва") {
        const data = await fetch(`${this._url}${city}${this.#APP_ID}&lang=${this.#lang}&units=${this.#units}`);
        return await data.json();
    }

    //Получение погоды через input
    async getWeather(e) {
        let city = e.target.elements.city.value;
        const inputCityUrl = await fetch(`${this._url}${city}${this.#APP_ID}&lang=${this.#lang}&units=${this.#units}`);
        return await inputCityUrl.json();
    }
}

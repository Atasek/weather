import React from 'react';
import Weather from './Weather';

const getWeatherURL = (coords) =>
    `http://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&lang=ru&units=metric&appid=a8329cc4f8aa6695f5195fed98fa1ef7`;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    async componentDidMount() {
        await this.getLocation();
    }

    async getLocation() {
        await navigator.geolocation.getCurrentPosition((position) => this.showPosition(position));
    }

    async showPosition(position) {
        const weatherURL = getWeatherURL(position.coords);
        const response = await fetch(weatherURL);
        const weatherData = await response.json();
        this.setState({
            weather: {
                city: weatherData.name,
                temp: weatherData.main.temp,
                speed: weatherData.wind.speed,
                stat: weatherData.weather[0].description,
                icon: weatherData.weather[0].icon
            },
        });
    }

    render() {
        if (this.state.weather) {
            return <Weather weather={this.state.weather}/>
        } else {
            return <span>Share your coordinates</span>
        }
    }
}


export default App;

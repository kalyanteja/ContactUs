import React from 'react';
import WeatherForm from './WeatherForm';
import WeatherDetails from './WeatherDetails';

// API key for open weather map site
const API_KEY = '46dee3d9d1cfe687af7f002fe4977aa4';

class Weather extends React.Component {

    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        desc: undefined,
        error: undefined
    }

    getWeather = async (e) => {
        e.preventDefault();
        console.log(e.target);
        const city = e.target.elements.city.value;
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();

        if (city) {
            console.log(data);
            if (data.cod == 200) {
                this.setState({
                    temperature: data.main.temp,
                    city: data.name,
                    country: data.sys.country,
                    humidity: data.main.humidity,
                    desc: data.weather[0].description,
                    error: ""
                });
            } else {
                this.updateErrorMessage(data.message);
            }
        } else {
            this.updateErrorMessage("Please enter a city");
        }
    }

    updateErrorMessage(errorMsg) {
        this.setState({
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            desc: undefined,
            error: errorMsg
        });
    }

    render() {
        return (
            <div>
                <WeatherForm getWeather={this.getWeather} />
                <WeatherDetails
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    desc={this.state.desc}
                    error={this.state.error} />
            </div>
        );
    };
}

export default Weather;
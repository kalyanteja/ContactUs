import React from 'react';

const WeatherForm = props => (
    <div>
        <h5 className="pt-5">Find weather here...</h5>
        <form className="pt-1" onSubmit={props.getWeather}>
            <input className="w-35 mr-3 mt-2" type="text" name="city" placeholder="city"></input>
            <div><button className="btn btn-primary mt-3">Get Weather!</button></div>
        </form>
    </div>
);

export default WeatherForm;
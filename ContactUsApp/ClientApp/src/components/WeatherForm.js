import React from 'react';

const WeatherForm = props => (
    <div>
        <h3 className="pt-3">Find weather here...</h3>
        <form className="pt-3" onSubmit={props.getWeather}>
            <input className="w-35 mr-3 mt-2" type="text" name="city" placeholder="city"></input>
            <input className="w-35 mr-3 mt-2" type="text" name="country" placeholder="country"></input>
            
            <div><button className="btn btn-primary mt-3">Get Weather!</button></div>
        </form>
    </div>
);

export default WeatherForm;
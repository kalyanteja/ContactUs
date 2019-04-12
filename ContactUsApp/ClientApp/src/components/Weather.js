import React from 'react';

class Weather extends React.Component{
    render(){
        const hasError = this.props.error;
        const hasErrorPart = (<p className="error-msg"> {this.props.error} </p>)
        return (
            <div className="pt-5">
                { this.props.city && this.props.country &&  <p >Location: {this.props.city}, {this.props.country}</p>}
                { this.props.temperature && <p >Temperature: {this.props.temperature}</p>}
                { this.props.humidity && <p >Humidity: {this.props.humidity}</p>}
                { this.props.desc && <p >Conditions: {this.props.desc}</p>}
                { hasError && hasErrorPart }
            </div>
        );
    };
}

export default Weather;
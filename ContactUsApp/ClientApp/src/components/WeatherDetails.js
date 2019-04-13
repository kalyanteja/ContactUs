import React from 'react';

class WeatherDetails extends React.Component{
    render(){
        const hasError = this.props.error;
        const hasErrorPart = (<p className="error-msg"> {this.props.error} </p>)
        return (
            <div className="pt-5">
                {this.props.city && this.props.country && <p >Location: <span className="badge badge-success">{this.props.city}, {this.props.country} </span></p>}
                {this.props.temperature && <p >Temperature: <span className="badge badge-danger">{this.props.temperature} Celsius </span></p>}
                { this.props.humidity && <p >Humidity: {this.props.humidity}</p>}
                { this.props.desc && <p >Conditions: {this.props.desc}</p>}
                { hasError && hasErrorPart }
            </div>
        );
    };
}

export default WeatherDetails;
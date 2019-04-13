import React, { Component } from 'react';

class Clock extends Component {

    state = {
        hours: undefined,
        minutes: undefined,
        seconds: undefined,
        clicked: false,
        isAm: false
    };

    runClock() {
        var today = new Date();
        var hours = today.getHours();
        var minutes = today.getMinutes();
        var seconds = today.getSeconds();
        this.setState({ hours: hours, minutes: minutes, seconds: seconds, clicked: true, isAm: hours < 12 });
        setTimeout(this.runClock.bind(this), 500);
    };

    render() {

        const clockBlock = (
            <>
                <span className="badge badge-primary">{this.state.hours} </span>
                <span className="badge badge-warning ml-2">{this.state.minutes} </span>
                <span className="badge badge-danger ml-2">{this.state.seconds}</span>
                <span className="badge badge-info ml-2">{this.state.isAm ? "AM" : "PM"}</span>
            </>
        );

        const clickClock = (<span className="badge badge-secondary" onClick={this.runClock.bind(this)}>Click here show Clock!</span>);

        return (
            <div className="mt-4">
                {this.state.clicked ? clockBlock : clickClock}
            </div>
        );
    }
}

export default Clock;
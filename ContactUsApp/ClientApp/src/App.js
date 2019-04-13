import React from 'react';
import ContactUs from './components/ContactUs';
import Clock from './components/Clock';
import Weather from './components/Weather';

class App extends React.Component {
    render(){
        return(
            <div>
                <div className="wrapper">
                    <div className="main">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-5">
                                    <Clock/>
                                    <Weather/>
                                </div>
                                <div className="col-md-7 form-container">
                                    <ContactUs/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
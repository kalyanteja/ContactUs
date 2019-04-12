import React, { Component } from 'react';

class ContactUs extends Component {

    constructor() {
        super();
        this.state = {
            userName: "",
            email: "",
            message: "",
            messageSent: false,
            isValid: true,
            serverError: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
    }

    handleEmailChange(e) {
        this.setState({ email: e.target.value });
    }
    handleUserNameChange(e) {
        this.setState({ userName: e.target.value });
    }
    handleMessageChange(e) {
        this.setState({ message: e.target.value });
    }

    isNotEmpty(val) {
        return val != null && val.length > 0;
    }

    areInputsValid() {
        // check for empty fields
        return this.isNotEmpty(this.state.userName)
            && this.isNotEmpty(this.state.email)
            && this.isNotEmpty(this.state.message)
    }

    handleSubmit(e){
        e.preventDefault();
        if (this.areInputsValid()) {
            console.log(this.state)
            fetch('/api/ContactUsMessage/SendContactUsMessage', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.state)
            }).then(res => {
                console.log(res);
                this.setState({ serverError: !res.ok });
            }).catch(err => console.log);
        } else {
            this.setState({ isValid: false });
        }
    }

    render() {
        const formCode = (
            <form onSubmit={this.handleSubmit}>
                <div className="form-element">
                    <input type="text" className="w-50" id="userName" placeholder="your name..." value={this.state.userName}
                        onChange={this.handleUserNameChange} />
                </div>
                <div className="form-element pt-3">
                    <input type="email" id="email" className="w-50" placeholder="your email..." value={this.state.email}
                        onChange={this.handleEmailChange} />
                </div>
                <div className="form-element pt-3">
                    <textarea type="text" id="meassage" className="w-75" placeholder="write your message here..." value={this.state.message}
                        onChange={this.handleMessageChange} />
                </div>
                {this.state.isValid ? "" : <div className="pt-2 error-msg">Please enter values...</div>}
                <div className="form-actions pt-5">
                    <input type="submit" id="submit" className="btn btn-primary" value="Submit" />
                </div>
            </form>
        );

        const messageCode = (<p> {this.state.serverError ? "Oops, please try again later..." : "Appreciate your feedback {this.state.userName}, we'll contact you soon!"} </p>);

        return (
            <div>
                <h2>{this.state.messageSent ? "Thanks!" : "Give us your feedback"}</h2>
                <br/>
                {this.state.messageSent ? messageCode : formCode}
            </div>
        );
    }
}

export default ContactUs;